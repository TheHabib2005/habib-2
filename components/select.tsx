import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sortByMenu } from "@/utils/constant";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[130px]">
        <SelectValue placeholder="Sort-By" defaultValue={"habib"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {sortByMenu.map((element, index) => (
            <SelectItem key={index} value={element}>
              {element}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
