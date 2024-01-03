import { fetchHomeContent } from "../content/index";
import { fetchSections, type IResponse } from "../sections";

interface Props {
  genreId?: string;
  nextOffSet?: number | 0;
}
export async function home(props?: Props) {
  const sectionsArray: IResponse[] = [];

  const fetches = await fetchHomeContent(props?.genreId as string);

  for (const sectionId of fetches.ids) {
    const sections = await fetchSections(sectionId, props?.nextOffSet);
    sectionsArray.push(sections);
  }
  return sectionsArray;
}
