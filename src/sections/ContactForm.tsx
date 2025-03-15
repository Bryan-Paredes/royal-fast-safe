import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
}
export default function ContactForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 md:space-y-4 my-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label
            htmlFor="first_name"
            className="block text-sm font-medium text-foreground mb-2"
          >
            First name
          </Label>
          <Controller
            name="first_name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                id="first_name"
                required
                className="w-full px-4 py-3 bg-dark-deeper border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-foreground"
              />
            )}
          />
        </div>
        <div>
          <Label
            htmlFor="last_name"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Last name
          </Label>
          <Input
            type="text"
            id="last_name"
            name="last_name"
            required
            className="w-full px-4 py-3 bg-dark-deeper border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-foreground"
          />
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
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-dark-deeper border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-foreground"
        />
      </div>

      <div>
        <Label
          htmlFor="phone"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Phone number
        </Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-3 bg-dark-deeper border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-foreground"
        />
      </div>

      <div>
        <Label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-3 bg-dark-deeper border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-foreground"
        />
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
  );
}
