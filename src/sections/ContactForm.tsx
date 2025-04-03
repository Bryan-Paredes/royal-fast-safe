import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast, Toaster } from "sonner";
import confetti from "canvas-confetti";
import { usePhoneFormatter } from "@/hooks/usePhoneFormatter";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<FormData>();

  const { handlePhoneChange } = usePhoneFormatter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");
        confetti();
        reset();
      }
    } catch (error) {
      toast.error("Error submitting form please try again!");
    }
  };

  return (
    <div>
      <Toaster richColors />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 md:space-y-4 my-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label
              htmlFor="firstName"
              className="block text-sm font-medium text-foreground mb-2"
            >
              First Name
            </Label>
            <Input
              {...register("firstName", {
                required: "First name is required",
                minLength: {
                  value: 3,
                  message: "Minimum length is 3 characters",
                },
                maxLength: {
                  value: 15,
                  message: "Maximum length is 15 characters",
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Only letters are allowed",
                },
              })}
              placeholder="John"
              aria-invalid={errors.firstName ? "true" : "false"}
              className="w-full px-4 py-3"
            />
            {errors.firstName && (
              <p role="alert" className="text-red-500">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <Label
              htmlFor="last_name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Last name
            </Label>
            <Input
              {...register("lastName", {
                required: "Last name is required",
                minLength: {
                  value: 3,
                  message: "Minimum length is 3 characters",
                },
                maxLength: {
                  value: 15,
                  message: "Maximum length is 15 characters",
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Only letters are allowed",
                },
              })}
              placeholder="Doe"
              aria-invalid={errors.lastName ? "true" : "false"}
              className="w-full px-4 py-3"
            />
            {errors.lastName && (
              <p role="alert" className="text-red-500">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <Label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
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
            placeholder="john.doe@example.com"
            aria-invalid={errors.email ? "true" : "false"}
            className="w-full px-4 py-3"
          />
          {errors.email && (
            <p role="alert" className="text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <Label
            htmlFor="phone"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Phone number
          </Label>
          <Input
            {...register("phone", {
              required: {
                value: true,
                message: "Phone number is required",
              },
            })}
            onChange={(e) =>
              setValue("phone", handlePhoneChange(e.target.value))
            }
            placeholder="555-555-5555"
            aria-invalid={errors.phone ? "true" : "false"}
            className="w-full px-4 py-3"
          />
          {errors.phone && (
            <p role="alert" className="text-red-500">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <Label
            htmlFor="message"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Message
          </Label>
          <Textarea
            {...register("message", {
              required: "Message is required",
            })}
            placeholder="Enter your message"
            aria-invalid={errors.message ? "true" : "false"}
            rows={4}
            className="w-full px-4 py-3"
          />
          {errors.message && (
            <p role="alert" className="text-red-500 mt-5">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="flex justify-start">
          <Button
            disabled={isSubmitting}
            size={"lg"}
            type="submit"
            className="px-6 py-3 bg-primary-500 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-300 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              "Send message"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
