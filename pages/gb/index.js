import { ListContainer, ListView, Pagination } from "../../components";
import usePaginatedQuery from "../../hooks/usePaginatedQuery";

export default function GroupBuys() {
  const board = "70";
  const { data, page, previousPage, nextPage } = usePaginatedQuery(board);

  return (
    <ListContainer>
      <Pagination {...{ page, nextPage, previousPage }} />
      <ListView items={data} />
    </ListContainer>
  );
}
