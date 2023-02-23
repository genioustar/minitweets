import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/server/client";

interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

export default async function GetTweets(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  console.log(req);
  if (req.method === "GET") {
    const tweets = await client.post.findMany();
    res.json({
      ok: true,
      tweets,
    });
  }
}
