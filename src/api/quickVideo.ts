import Youtube from "youtube-sr";
import { getExactYearFromRelativeString } from "../extractors";

export type Video = {
  title?: string;
  id?: string;
  thumbnailURL?: string;
  duration?: string;
  durationInMS?: number | null;
  exactYear?: number | null;
  labeledYear?: string | undefined;
  channel?: string;
};

export async function quickVideo(term: string) {
  const response = await Youtube.search(`${term}`, {
    type: "video",
  });
  const array: Video[] = [];
  for (const video of response) {
    const year = getExactYearFromRelativeString(
      video.uploadedAt?.toString() as string
    );

    array.push({
      title: video?.title,
      id: video?.id,
      thumbnailURL: video.thumbnail?.url + `"`,
      duration: video.durationFormatted,
      durationInMS: video.duration,
      exactYear: year,
      labeledYear: video.uploadedAt?.toString(),
      channel: video?.channel?.name,
    });
  }
  return array;
}
