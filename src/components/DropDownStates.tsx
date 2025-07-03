import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropDownStatesData } from "@/data/header";

export function DropDownStates({ className }: { className: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`${className}`}>
        Nation Wide
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>STATES</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {DropDownStatesData.map((state) => (
          <DropdownMenuItem
            key={state.title}
            className="cursor-pointer capitalize hover:text-white text-base"
          >
            <a href={state.href}>{state.title}</a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
