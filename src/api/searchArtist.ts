import { searchArtistFetcher } from "../fetchers/index.fetcher";

export async function searchArtist(term: string) {
  const response = await searchArtistFetcher(term);
  return response;
}
