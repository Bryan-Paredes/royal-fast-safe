import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast, Toaster } from "sonner";
import confetti from "canvas-confetti";

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
    formState: { isSubmitting, errors },
  } = useForm<FormData>();

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
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-foreground mb-2"
            >
              First Name
            </label>
            <input
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
              aria-invalid={errors.firstName ? "true" : "false"}
              className="w-full px-4 py-3 bg-dark-deeper border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-foreground"
            />
            {errors.firstName && (
              <p role="alert" className="text-red-500">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Last name
            </label>
            <input
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
              aria-invalid={errors.lastName ? "true" : "false"}
              className="w-full px-4 py-3 bg-dark-deeper border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-foreground"
            />
            {errors.lastName && (
              <p role="alert" className="text-red-500">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Email
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
            aria-invalid={errors.email ? "true" : "false"}
            className="w-full px-4 py-3 bg-dark-deeper border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-foreground"
          />
          {errors.email && (
            <p role="alert" className="text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Phone number
          </label>
          <input
            {...register("phone", {
              required: {
                value: true,
                message: "Phone number is required",
              },
              minLength: {
                value: 5,
                message: "Minimum length is 5 characters",
              },
              maxLength: {
                value: 8,
                message: "Maximum length is 8 characters",
              },
              // pattern: {
              //   value: /^((\\+1)?\\s?\\(\\d{3}\\)\\s?\\d{3}\\-\\d{4})?$/,
              //   message: "Invalid phone number",
              // },
            })}
            aria-invalid={errors.phone ? "true" : "false"}
            className="w-full px-4 py-3 bg-dark-deeper border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-foreground"
          />
          {errors.phone && (
            <p role="alert" className="text-red-500">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Message
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
            aria-invalid={errors.message ? "true" : "false"}
            rows={4}
            className="w-full px-4 py-3 bg-dark-deeper border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-50  text-foreground resize-none"
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
