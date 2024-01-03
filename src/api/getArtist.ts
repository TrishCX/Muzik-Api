import { getArtistFetcher } from "../fetchers/index.fetcher";

export async function getArtist(id: string) {
  const response = await getArtistFetcher(id);
  return response;
}
