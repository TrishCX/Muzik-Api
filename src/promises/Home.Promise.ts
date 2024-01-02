interface IData {
  name?: string;
  description?: string;
  id?: string;
  image?: string;
}

export async function HomePromise(fetches: any): Promise<IData[]> {
  const promise = await Promise.all(fetches);
  return promise as IData[];
}
