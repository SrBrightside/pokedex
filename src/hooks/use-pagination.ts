"use client";
import { useRouter, useSearchParams } from "next/navigation";

const usePagination = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = +(searchParams.get("page") ?? 1);
  const offset = (page - 1) * 9;

  const navigateToPage = (newPage: number) => {
    router.push(`/pokedex?page=${newPage}`);
  };

  const handlePrevPageClick = () => {
    navigateToPage(page - 1);
  };

  const handleNextPageClick = () => {
    navigateToPage(page + 1);
  };

  return {
    handlePrevPageClick,
    handleNextPageClick,
    page,
    offset,
  };
};

export default usePagination;
