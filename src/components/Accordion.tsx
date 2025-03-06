import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionComponent() {
  return (
    <div className="max-w-3xl mx-auto my-10 w-full flex flex-col items-center">
      <h4 className="text-center text-base/7 font-semibold text-accent">
        Frequently Asked Questions
      </h4>
      <Accordion type="single" collapsible className="space-y-2 my-5 w-full">
        <AccordionItem
          value="item-1"
          className="border rounded-2xl p-3 hover:bg-gray-200 dark:hover:bg-gray-900 transition-colors cursor-pointer"
        >
          <AccordionTrigger className="!border-b-0 hover:no-underline text-lg font-medium cursor-pointer px-2">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="border rounded-2xl p-3 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
        >
          <AccordionTrigger className="!border-b-0 hover:no-underline text-lg font-medium cursor-pointer px-2">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="border rounded-2xl p-3 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
        >
          <AccordionTrigger className="!border-b-0 hover:no-underline text-lg font-medium cursor-pointer px-2">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
