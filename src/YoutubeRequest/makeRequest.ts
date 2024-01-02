import { makeContext } from "../context";

export async function makeRequest(url: string, body?: any) {
  const context = makeContext({
    clientName: "WEB_REMIX",
    clientVersion: "0.1",
  });

  const req = await fetch(url, {
    body: JSON.stringify({
      ...context,
      ...body,
    }),
    method: "POST",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      origin: "https://music.youtube.com",
    },
  });

  const res = await req.json();
  return res;
}
