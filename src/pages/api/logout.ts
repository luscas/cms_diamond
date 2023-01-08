import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.removeHeader("diamond_token=; Path=/");
  res.redirect(307, "/").end();
}
