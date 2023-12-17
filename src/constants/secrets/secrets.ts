function ARTIST_SEARCH(term: string) {
  const URL: string = `https://api-partner.spotify.com/pathfinder/v1/query?operationName=searchArtists&variables=%7B%22searchTerm%22%3A%22${term}%22%2C%22offset%22%3A0%2C%22limit%22%3A30%2C%22numberOfTopResults%22%3A20%2C%22includeAudiobooks%22%3Atrue%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%224e7cdd33163874d9db5e08e6fabc51ac3a1c7f3588f4190fc04c5b863f6b82bd%22%7D%7D`;
  return URL;
}
function ARTIST_GET(id: string) {
  const URL: string = `https://api-partner.spotify.com/pathfinder/v1/query?operationName=queryArtistOverview&variables=%7B%22uri%22%3A%22spotify%3Aartist%3A${id}%22%2C%22locale%22%3A%22%22%2C%22includePrerelease%22%3Atrue%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%223a747b83568580814534e662a2569a6978ac3ad2e449ff751a859abe05dec995%22%7D%7D`;
  return URL;
}

export const END_POINTS = {
  ARTIST_SEARCH,
  ARTIST_GET,
};
