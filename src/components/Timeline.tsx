import { Timeline } from "@/components/ui/timeline";
import { TimelineData } from "@/data/timeline";

export function TimelineSection() {
  return (
    <div className="w-full">
      <Timeline data={TimelineData} />
    </div>
  );
}
