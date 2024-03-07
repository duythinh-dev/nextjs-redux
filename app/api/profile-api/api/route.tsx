import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  const theme = request.cookies.get("theme");

  cookies().set("resultsPerPage", "20");

  console.log("theme :", theme);
  console.log("cookies :", cookies().get("resultsPerPage"));

  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));

  return new Response("<h1>Hello my fen - this is API type HTML</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-cookie": "theme=dark",
    },
  });
}
