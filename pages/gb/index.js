import useSWR from "swr";
import { ListContainer, ListView } from "../../components";
import { extractList, fetcher, boardUrl } from "../../shared/api";

export default function GroupBuys() {
  const { data } = useSWR(boardUrl("70.0"), fetcher, {
    revalidateOnFocus: false
  });
  const listings = extractList(data);

  return (
    <ListContainer>
      <ListView items={listings} />
    </ListContainer>
  );
}
