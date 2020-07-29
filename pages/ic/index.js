import useSWR from "swr";
import { ListContainer, ListView } from "../../components";
import { extractList, fetcher, boardUrl } from "../../shared/api";

export default function InterestChecks() {
  const { data } = useSWR(boardUrl("132.0"), fetcher, {
    revalidateOnFocus: false
  });
  const listings = extractList(data);

  return (
    <ListContainer>
      <ListView items={listings} />
    </ListContainer>
  );
}
