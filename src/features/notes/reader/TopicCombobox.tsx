import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Chapter } from "../types";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export interface TopicComboboxProps {
  chapters: readonly Chapter[];
  currentChapter?: Chapter;
  onSelect: (page: number) => void;
  unitLabel?: string;
  className?: string;
}

export default function TopicCombobox({
  chapters,
  currentChapter,
  onSelect,
  unitLabel = "page",
  className,
}: TopicComboboxProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between rounded-xl border border-line bg-white px-3 py-2 text-[0.88rem] font-normal text-ink shadow-2xs hover:bg-paper hover:text-ink focus-visible:ring-1 focus-visible:ring-ring h-auto",
            className
          )}
        >
          <span className="truncate text-left">
            {currentChapter ? currentChapter.title : "Select topic..."}
          </span>
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-[min(22rem,calc(100vw-2rem))] p-0 rounded-xl border border-line bg-white shadow-xl"
      >
        <Command>
          <CommandInput placeholder="Search topic or number..." />
          <CommandList className="max-h-64 overflow-y-auto p-1">
            <CommandEmpty className="py-6 text-center text-sm text-ink-2">
              No topic found.
            </CommandEmpty>
            <CommandGroup>
              {chapters.map((c) => {
                const isSelected = currentChapter?.page === c.page;
                return (
                  <CommandItem
                    key={`${c.page}-${c.title}`}
                    value={`${c.title} ${unitLabel} ${c.page}`}
                    onSelect={() => {
                      onSelect(c.page);
                      setOpen(false);
                    }}
                    className={cn(
                      "flex cursor-pointer items-center justify-between rounded-lg px-2.5 py-2 text-[0.85rem] text-ink transition-colors hover:bg-paper aria-selected:bg-paper",
                      isSelected && "font-semibold text-green-ink bg-green-tint/60"
                    )}
                  >
                    <div className="flex flex-col min-w-0 pr-2">
                      <span className="truncate">{c.title}</span>
                      <span className="text-[0.72rem] text-ink-2">
                        {unitLabel === "section" ? "Section" : "Page"} {c.page}
                      </span>
                    </div>
                    <Check
                      className={cn(
                        "size-4 shrink-0 text-green-ink",
                        isSelected ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
