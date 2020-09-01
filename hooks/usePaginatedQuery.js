import React, { useState } from "react";
import useSWR from "swr";
import { extractList, fetcher, boardUrl } from "../shared/api";

export default function usePaginatedQuery(board) {
  const [page, setPage] = useState(0);

  const nextPage = () => setPage(page + 50);
  const previousPage = () => setPage(page - 50);

  const { data: response } = useSWR(boardUrl(board, page), fetcher, {
    revalidateOnFocus: false
  });

  const data = extractList(response);

  return {
    data,
    page,
    nextPage,
    previousPage: page > 0 ? previousPage : null
  };
}
