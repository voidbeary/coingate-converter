// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fetch("https://api.coingate.com/v2/rates/trader/buy", {
    mode: "no-cors",
  }).then((response) =>
    response.json().then((body) => {
      res.status(200).json(body);
    })
  );
}
