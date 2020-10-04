import Head from "next/head";
import { ListContainer, ListView, Pagination } from "../../components";
import usePaginatedQuery from "../../hooks/usePaginatedQuery";

export default function GroupBuys() {
  const board = "70";
  const { data, page, previousPage, nextPage } = usePaginatedQuery(board);

  return (
    <ListContainer>
      <Head>
        <title>Group Buys</title>
      </Head>
      <Pagination {...{ page, nextPage, previousPage }} />
      <ListView items={data} />
      <Pagination {...{ page, nextPage, previousPage }} />
    </ListContainer>
  );
}
