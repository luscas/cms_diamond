import type { NextApiRequest, NextApiResponse } from "next";

import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await axios.get(
    "https://www.habbo.com.br/habbo-imaging/avatar/hr-830-31.hd-180-1.ch-267-1408.lg-3864.ha-3775.cc-3863-1408%2Cs-2.g-1.d-2.h-2.a-0%2Cb4ccbf4447261624105388d485101a96.png"
  );

  res.setHeader(
    "Cache-Control",
    `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
  );
  res.setHeader("Content-Type", "image/png;chartset=utf-8");
  res.send(response.data);
}
