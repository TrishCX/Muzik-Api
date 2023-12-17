import type { Authorization, FetchProps } from "../typings/index";
import { getAccessToken } from "../helpers";

export class RequestExtender {
  public async authorization(): Promise<Authorization> {
    const { accessToken } = await getAccessToken();
    return {
      Authorization: `Bearer ${accessToken}`,
    };
  }
  public async fetch(props: FetchProps) {
    const request = await fetch(props.url, {
      method: props.method || "GET",
      headers: { ...props.auth },
    });
    const response = await request.json();
    return response as any;
  }
}
