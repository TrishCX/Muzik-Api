import { fetchCanvas } from "../canvas";

export async function canvas(id: string): Promise<string | void | undefined> {
  const url = (await fetchCanvas(id)) as string;
  return url;
}
