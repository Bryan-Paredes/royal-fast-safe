import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarIcon, Loader2 } from "lucide-react";
import { toast, Toaster } from "sonner";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { QuoteData } from "@/types/location";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useZipCodeLookup } from "@/hooks/useZipCode";
import { useEffect, useState } from "react";
import { usePhoneFormatter } from "@/hooks/usePhoneFormatter";
import confetti from "canvas-confetti";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

declare global {
  interface Window {
    gtag: (
      command: "event",
      action: string,
      params: {
        send_to: string;
        value?: number;
        currency?: string;
        event_callback?: () => void;
      }
    ) => void;
  }
}

// Puedes declarar la función aquí, fuera del componente:
function gtag_report_conversion(url?: string) {
  let callback = function () {
    if (typeof url !== "undefined") {
      window.location.href = url;
    }
  };
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-17259959199/A6h-COayoeEaEJ-nmKZA",
      value: 1.0,
      currency: "USD",
      event_callback: callback,
    });
  }
  return false;
}

export default function ShippingForm() {
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteData>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      shipFrom: {
        country: "",
        postalCode: "",
        city: "",
        state: "",
        manualEdit: false,
      },
      shipTo: {
        country: "",
        postalCode: "",
        city: "",
        state: "",
        manualEdit: false,
      },
      weight: "",
      year: "",
      make: "",
      model: "",
      isOperable: true,
      preferredShippingDate: "",
      message: "",
      agreeToSMS: false,
    },
  });

  const [date, setDate] = useState<Date | undefined>(undefined);

  const { fetchZipData } = useZipCodeLookup();
  const { handlePhoneChange } = usePhoneFormatter();
  const watchAll = watch();

  // Función para actualizar ZIP dinámicamente
  const handleZipChange = async (section: "shipFrom" | "shipTo") => {
    const { postalCode, country } = watchAll[section];

    if (postalCode.length === 5 && country === "United States") {
      const data = await fetchZipData(postalCode, country);
      if (data) {
        setValue(`${section}.city`, data.city);
        setValue(`${section}.state`, data.state);
        setValue(`${section}.manualEdit`, false);
      }
    }
  };

  useEffect(() => {
    handleZipChange("shipFrom");
  }, [watchAll.shipFrom.postalCode]);
  useEffect(() => {
    handleZipChange("shipTo");
  }, [watchAll.shipTo.postalCode]);

  const onSubmit: SubmitHandler<QuoteData> = async (data) => {
    // Función para obtener cookies
    function getCookie(name: string): string | undefined {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
      return undefined;
    }

    // Obtener cookies fbp y fbc
    const fbp = getCookie("_fbp");
    const fbc = getCookie("_fbc");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        body: JSON.stringify({
          ...data,
          preferredShippingDate: date,
        }),
      });

      await fetch("/api/send-meta-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          phone: data.phone,
          fbp,
          fbc,
        }),
      });

      if (response.ok) {
        toast.success("Quote submitted successfully");
        confetti();
        // Disparo de conversión Google y Meta CAPI
        gtag_report_conversion();
        reset();
      } else {
        toast.error("Error submitting quote");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error submitting quote");
    }
  };

  return (
    <>
      <Toaster richColors />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto mt-32 p-8 space-y-8 border rounded-xl"
      >
        <a
          href="/"
          className="flex items-center justify-start gap-2 hover:-translate-x-1 hover:text-primary-600 w-fit transition-transform duration-200 cursor-pointer"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Go Back</span>
        </a>

        <div>
          <h2 className="text-2xl font-bold mb-6">Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="name" className="flex items-center">
                Your Name
              </Label>
              <Input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                  maxLength: {
                    value: 15,
                    message: "Name must be at most 15 characters",
                  },
                })}
                placeholder="John Doe"
                className="mt-2 w-full border-gray-300 dark:border-gray-100"
              />
              {errors.name && (
                <p role="alert" className="my-1 text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="phone" className="flex items-center">
                Phone Number{" "}
                <span className="text-gray-500 text-sm ml-1">(optional)</span>
              </Label>
              <Input
                {...register("phone")}
                onChange={(e) =>
                  setValue("phone", handlePhoneChange(e.target.value))
                }
                placeholder="555-555-5555"
                className="mt-0.5 w-full border-gray-300 dark:border-gray-100"
              />
            </div>
            <div>
              <Label htmlFor="email" className="flex items-center">
                Email
              </Label>
              <Input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="john.doe@example.com"
                className="mt-2 w-full border-gray-300 dark:border-gray-100"
              />
              {errors.email && (
                <p role="alert" className="my-1 text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-center justify-between">
          {/* Ship From Section */}
          <div className="flex flex-col gap-4 justify-center w-full">
            <h2 className="text-2xl font-bold mb-6">Ship From</h2>
            <div>
              <Label htmlFor="shipFromCountry" className="flex items-center">
                Country
              </Label>
              <Select
                onValueChange={(value) => setValue("shipFrom.country", value)}
                value={watch("shipFrom.country")}
              >
                <SelectTrigger className="w-full mt-2 border-gray-300 dark:border-gray-100">
                  <SelectValue placeholder="Select a Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Country</SelectLabel>
                    <SelectItem value="United States">United States</SelectItem>
                    <SelectItem value="Canada">Canada</SelectItem>
                    <SelectItem value="Mexico">Mexico</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="shipFromPostalCode" className="flex items-center">
                ZIP Code{" "}
                <span className="text-gray-500 text-sm ml-1">(optional)</span>
              </Label>
              <Input
                {...register("shipFrom.postalCode", {
                  minLength: 5,
                  maxLength: 5,
                })}
                id="shipFromPostalCode"
                placeholder="Enter Postal Code"
                className="mt-2 border-gray-300 dark:border-gray-100"
              />
              {errors.shipFrom?.postalCode && (
                <p role="alert" className="my-1 text-red-500">
                  {errors.shipFrom.postalCode.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="shipFromCity" className="flex items-center">
                City
              </Label>
              <Input
                {...register("shipFrom.city", {
                  required: {
                    value: true,
                    message: "City is required",
                  },
                })}
                id="shipFromCity"
                onChange={() => setValue("shipFrom.manualEdit", true)}
                placeholder="Enter City"
                className="mt-2 border-gray-300 dark:border-gray-100"
              />
              {errors.shipFrom?.city && (
                <p role="alert" className="my-1 text-red-500">
                  {errors.shipFrom.city.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="shipFromState" className="flex items-center">
                State
              </Label>
              <Input
                {...register("shipFrom.state", {
                  required: {
                    value: true,
                    message: "State is required",
                  },
                })}
                id="shipFromState"
                onChange={() => setValue("shipFrom.manualEdit", true)}
                placeholder="Enter State"
                className="mt-2 border-gray-300 dark:border-gray-100"
              />
              {errors.shipFrom?.state && (
                <p role="alert" className="my-1 text-red-500">
                  {errors.shipFrom.state.message}
                </p>
              )}
            </div>
          </div>

          {/* Ship To Section */}
          <div className="flex flex-col gap-4 justify-center w-full">
            <h2 className="text-2xl font-bold mb-6">Ship To</h2>
            <div>
              <Label htmlFor="shipFromCountry" className="flex items-center">
                Country
              </Label>
              <Select
                onValueChange={(value) => setValue("shipTo.country", value)}
              >
                <SelectTrigger className="w-full mt-2 border-gray-300 dark:border-gray-100">
                  <SelectValue placeholder="Select a Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Country</SelectLabel>
                    <SelectItem value="United States">United States</SelectItem>
                    <SelectItem value="Canada">Canada</SelectItem>
                    <SelectItem value="Mexico">Mexico</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="shipFromPostalCode" className="flex items-center">
                ZIP Code{" "}
                <span className="text-gray-500 text-sm ml-1">(optional)</span>
              </Label>
              <Input
                {...register("shipTo.postalCode", {
                  minLength: 5,
                  maxLength: 5,
                })}
                id="shipFromPostalCode"
                placeholder="Enter Postal Code"
                className="mt-2 border-gray-300 dark:border-gray-100"
              />
              {errors.shipTo?.postalCode && (
                <p role="alert" className="my-1 text-red-500">
                  {errors.shipTo.postalCode.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="shipFromCity" className="flex items-center">
                City
              </Label>
              <Input
                {...register("shipTo.city", {
                  required: {
                    value: true,
                    message: "City is required",
                  },
                })}
                id="shipFromCity"
                placeholder="Enter City"
                onChange={() => setValue("shipTo.manualEdit", true)}
                className="mt-2 border-gray-300 dark:border-gray-100"
              />
              {errors.shipTo?.city && (
                <p role="alert" className="my-1 text-red-500">
                  {errors.shipTo.city.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="shipFromState" className="flex items-center">
                State
              </Label>
              <Input
                {...register("shipTo.state", {
                  required: {
                    value: true,
                    message: "State is required",
                  },
                })}
                id="shipFromState"
                placeholder="Enter State"
                onChange={() => setValue("shipTo.manualEdit", true)}
                className="mt-2 border-gray-300 dark:border-gray-100"
              />
              {errors.shipTo?.state && (
                <p role="alert" className="my-1 text-red-500">
                  {errors.shipTo.state.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center w-full">
          <h2 className="text-2xl font-bold mb-6">Equipment Details</h2>

          {/* Equipment Identification */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="year" className="flex items-center">
                Year
              </Label>
              <Input
                {...register("year", {
                  required: {
                    value: true,
                    message: "Year is required",
                  },
                  minLength: {
                    value: 4,
                    message: "Year must be 4 digits",
                  },
                  maxLength: {
                    value: 4,
                    message: "Year must be 4 digits",
                  },
                  pattern: {
                    value: /^\d{4}$/,
                    message: "Please enter a valid 4-digit year",
                  },
                })}
                placeholder="2020"
                className="mt-2 w-full border-gray-300 dark:border-gray-100"
              />
              {errors.year && (
                <p role="alert" className="my-1 text-red-500">
                  {errors.year.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="make" className="flex items-center">
                Make
              </Label>
              <Input
                {...register("make", {
                  required: {
                    value: true,
                    message: "Make is required",
                  },
                  minLength: {
                    value: 2,
                    message: "Make must be at least 2 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Make must be at most 50 characters",
                  },
                })}
                placeholder="Caterpillar"
                className="mt-2 w-full border-gray-300 dark:border-gray-100"
              />
              {errors.make && (
                <p role="alert" className="my-1 text-red-500">
                  {errors.make.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="model" className="flex items-center">
                Model
              </Label>
              <Input
                {...register("model", {
                  required: {
                    value: true,
                    message: "Model is required",
                  },
                  minLength: {
                    value: 2,
                    message: "Model must be at least 2 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Model must be at most 50 characters",
                  },
                })}
                placeholder="CAT 320"
                className="mt-2 w-full border-gray-300 dark:border-gray-100"
              />
              {errors.model && (
                <p role="alert" className="my-1 text-red-500">
                  {errors.model.message}
                </p>
              )}
            </div>
          </div>

          {/* Equipment Status and Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="isOperable" className="flex items-center">
                Is the equipment operable?
              </Label>
              <Select
                onValueChange={(value) =>
                  setValue("isOperable", value === "true")
                }
                value={watch("isOperable") ? "true" : "false"}
              >
                <SelectTrigger className="w-full mt-2 border-gray-300 dark:border-gray-100">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Equipment Status</SelectLabel>
                    <SelectItem value="true">Yes, it's operable</SelectItem>
                    <SelectItem value="false">No, it's not operable</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="weight" className="flex items-center">
                Estimated weight (lbs){" "}
                <span className="text-gray-500 text-sm ml-1">(optional)</span>
              </Label>
              <Input
                {...register("weight")}
                placeholder="172 lbs"
                className="mt-2 w-full border-gray-300 dark:border-gray-100"
              />
            </div>
          </div>

          {/* Shipping Preferences */}
          <div className="flex flex-col gap-4 justify-center w-full">
            <Label className="flex items-center">
              Preferred Shipping Date{" "}
              <span className="text-gray-500 text-sm ml-1">(optional)</span>
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  data-empty={!date}
                  className="data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal cursor-pointer border-gray-300 dark:border-gray-100"
                >
                  <CalendarIcon />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="message" className="flex items-center">
            Additional Details
          </Label>
          <Textarea
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Minimum length is 10 characters",
              },
              maxLength: {
                value: 100,
                message: "Maximum length is 100 characters",
              },
            })}
            placeholder="Enter your Message"
            className="mt-2 h-30 w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none border-gray-300 dark:border-gray-100"
          />
          {errors.message && (
            <p role="alert" className="my-1 text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>
        {/* SMS Agreement */}
        <div className="flex items-center justify-start space-x-2 mt-6">
          <Checkbox
            {...register("agreeToSMS", {
              required: {
                value: true,
                message: "You must accept the terms and conditions to continue",
              },
            })}
            onCheckedChange={(value) =>
              setValue("agreeToSMS", value as boolean)
            }
            id="agreeToSMS"
            aria-label="I agree to the terms and conditions"
            className="border-primary-600"
          />
          <Label htmlFor="agreeToSMS" className="text-sm">
            Accept the terms and conditions and allow myself to be contacted by
            call or SMS.
          </Label>
        </div>
        {errors.agreeToSMS && (
          <p role="alert" className="my-1 text-red-500">
            {errors.agreeToSMS.message}
          </p>
        )}

        {/* Submit Button */}

        <Button
          disabled={isSubmitting}
          variant="default"
          className="mt-8 w-full md:w-auto bg-primary-600 hover:bg-primary-700 text-white text-md py-3 px-7 cursor-pointer transition-colors duration-300 ease"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <span>Submit</span>
          )}
        </Button>
      </form>
    </>
  );
}
