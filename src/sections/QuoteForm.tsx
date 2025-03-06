import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useShippingQuote } from "@/hooks/useShippingQuote";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Toaster } from "sonner";

export default function ShippingForm() {
  // Usar el custom hook para manejar la lógica del formulario
  const {
    formData,
    handleChange,
    handleCheckboxChange,
    handleSubmit,
    isLoading,
  } = useShippingQuote();

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto mt-24 p-8 space-y-8"
    >
      <Toaster richColors />
      <div className="flex items-center justify-start gap-2 hover:-translate-x-1 hover:text-primary-600 w-fit transition-transform duration-200 cursor-pointer">
        <ArrowLeft className="h-5 w-5" />
        <span>Go Back</span>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-6">Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Label htmlFor="name" className="flex items-center">
              Your Name <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="flex items-center">
              Phone Number
              <span className="text-gray-500 text-sm ml-1">(optional)</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 555-555"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email" className="flex items-center">
              Email <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
              required
              className="mt-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 items-center justify-center">
          <div className="md:col-span-2">
            <Label htmlFor="message" className="flex items-center">
              Message <span className="text-red-500 ml-1">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your Message"
              required
              className="mt-2 h-32"
            />
          </div>
          <div>
            <Card className="bg-background py-0">
              <CardContent className="py-4">
                <h3 className="text-base font-semibold text-red-500">
                  Important Info
                </h3>
                <p className="text-sm text-balance">
                  To provide you with an accurate quote, be sure to include the
                  make and model of the equipment, weight and dimensions if
                  available.
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
            value={formData.shipFrom.postalCode}
            onChange={handleChange}
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
              value={formData.shipFrom.city}
              onChange={handleChange}
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
              value={formData.shipFrom.state}
              onChange={handleChange}
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
              value={formData.shipFrom.country}
              onChange={handleChange}
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
            value={formData.shipTo.postalCode}
            onChange={handleChange}
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
              value={formData.shipTo.city}
              onChange={handleChange}
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
              value={formData.shipTo.state}
              onChange={handleChange}
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
              value={formData.shipTo.country}
              onChange={handleChange}
              placeholder="Country"
              required
              className="mt-2"
            />
          </div>
        </div>
      </div>

      {/* SMS Agreement */}
      <div className="flex items-center justify-start space-x-2 mt-6">
        <Checkbox
          required
          id="agreeToSMS"
          checked={formData.agreeToSMS}
          onCheckedChange={handleCheckboxChange}
          className=""
        />
        <Label htmlFor="agreeToSMS" className="text-sm">
          Accept the terms and conditions and allow myself to be contacted by
          call or SMS.
        </Label>
      </div>

      {/* Submit Button */}
      {isLoading ? (
        <Button
          disabled={true}
          variant="default"
          className="mt-8 w-full md:w-auto bg-primary-700 text-white"
        >
          <Loader2 className="animate-spin" />
          Loading...
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
  );
}
