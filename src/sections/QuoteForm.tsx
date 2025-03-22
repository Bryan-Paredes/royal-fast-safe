import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Toaster } from "sonner";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import type { QuoteData } from "@/types/location";
import { cn } from "@/lib/utils";

export default function ShippingForm() {
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<QuoteData>();

  const onSubmit: SubmitHandler<QuoteData> = async (data) => {
    console.log("Submitting form with data:", data);
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
              <label htmlFor="name" className="flex items-center">
                Your Name <span className="text-red-500 ml-1">*</span>
              </label>
              <input
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
                className="mt-2 w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              {errors.name && (
                <p role="alert" className="my-1 text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="flex items-center">
                Phone Number
                <span className="text-gray-500 text-sm ml-1">(optional)</span>
              </label>
              <input
                {...register("phone", {
                  required: false,
                  minLength: {
                    value: 10,
                    message: "Phone number must be at least 10 digits",
                  },
                  maxLength: {
                    value: 15,
                    message: "Phone number must be at most 15 digits",
                  },
                })}
                placeholder="+1 (555) 555-555"
                className="mt-2 w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="flex items-center">
                Email <span className="text-red-500 ml-1">*</span>
              </label>
              <input
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
                className="mt-2 w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              {errors.email && (
                <p role="alert" className="my-1 text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 items-center justify-center">
            <div className="md:col-span-2">
              <label htmlFor="message" className="flex items-center">
                Message <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
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
                className="mt-2 h-30 w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
              />
            </div>
            <div className="w-full h-40">
              <Card className={cn("bg-background py-0 h-full")}>
                <CardContent className="flex flex-col items-center justify-center my-auto gap-1">
                  <h3 className="text-base font-semibold text-red-500">
                    Important Info
                  </h3>
                  <p className="text-sm text-balance">
                    To provide you with an accurate quote, be sure to include
                    the make and model of the equipment, weight and dimensions
                    if available.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Ship From Section */}
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-2xl font-bold mb-6">Ship From</h2>
          <div>
            <Label htmlFor="shipFromPostalCode" className="flex items-center">
              ZIP Code <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="shipFromPostalCode"
              name="shipFrom.postalCode"
              placeholder="Enter Postal Code"
              required
              className="mt-2"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 items-center justify-between">
            <div>
              <Label htmlFor="shipFromCity" className="flex items-center">
                City <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="shipFromCity"
                name="shipFrom.city"
                placeholder="Enter City"
                required
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="shipFromState" className="flex items-center">
                State <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="shipFromState"
                name="shipFrom.state"
                placeholder="Enter State"
                required
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="shipFromCountry" className="flex items-center">
                Country <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="shipFromCountry"
                name="shipFrom.country"
                placeholder="Country"
                required
                className="mt-2"
              />
            </div>
          </div>
        </div>

        {/* Ship To Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6">Ship To</h2>
          <div>
            <Label htmlFor="shipToPostalCode" className="flex items-center">
              ZIP Code <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="shipToPostalCode"
              name="shipTo.postalCode"
              placeholder="Enter Postal Code"
              required
              className="mt-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center mt-6">
            <div>
              <Label htmlFor="shipToCity" className="flex items-center">
                City <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="shipToCity"
                name="shipTo.city"
                placeholder="Enter City"
                required
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="shipToState" className="flex items-center">
                State <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="shipToState"
                name="shipTo.state"
                placeholder="Enter State"
                required
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="shipToCountry" className="flex items-center">
                Country <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="shipToCountry"
                name="shipTo.country"
                placeholder="Country"
                required
                className="mt-2"
              />
            </div>
          </div>
        </div>

        {/* SMS Agreement */}
        <div className="flex items-center justify-start space-x-2 mt-6">
          <Checkbox required id="agreeToSMS" className="" />
          <Label htmlFor="agreeToSMS" className="text-sm">
            Accept the terms and conditions and allow myself to be contacted by
            call or SMS.
          </Label>
        </div>

        {/* Submit Button */}
        {isSubmitting ? (
          <Button
            disabled={true}
            variant="default"
            className="mt-8 w-full md:w-auto bg-primary-700 text-white"
          >
            <Loader2 className="animate-spin" />
            Submitting...
          </Button>
        ) : (
          <Button
            type="submit"
            className="mt-4 w-full md:w-auto bg-primary-500 hover:bg-primary-700 text-white text-lg py-3 px-7 cursor-pointer"
          >
            Submit
          </Button>
        )}
      </form>
    </>
  );
}
