"use client";

import { FC } from "react";
import { Button } from "./ui/button";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";
import usePagination from "@/hooks/use-pagination";
import { FlexCenter } from "./ui/flex";

interface PaginationControlsProps {
  hasPrevPage: boolean;
  hasNextPage: boolean;
  itemsCount: number;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasPrevPage,
  hasNextPage,
  itemsCount,
}) => {
  const { page, handlePrevPageClick, handleNextPageClick } = usePagination();

  return (
    <FlexCenter className="gap-8 mt-8">
      <Button
        variant="icon"
        size="icon"
        disabled={!hasPrevPage}
        onClick={handlePrevPageClick}
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </Button>

      <div>
        {page} / {Math.ceil(itemsCount / 9)}
      </div>

      <Button
        variant="icon"
        size="icon"
        disabled={!hasNextPage}
        onClick={handleNextPageClick}
      >
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
    </FlexCenter>
  );
};

export default PaginationControls;
