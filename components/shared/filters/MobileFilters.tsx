"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import Button from "@/components/shared/Button";
import IconButton from "@/components/shared/IconButton";
import Filter from "@/components/shared/filters/Filter";

import { Color, Size } from "@/interfaces";

export interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters = ({ sizes, colors }: MobileFiltersProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <aside>
      <Button
        onClick={handleClick}
        className="flex items-center gap-2 lg:hidden"
      >
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        as="section"
        className="relative z-40 lg:hidden"
        onClose={handleClick}
      >
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />

        <div className="fixed flex inset-0">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={handleClick} />
            </div>

            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </aside>
  );
};

export default MobileFilters;
