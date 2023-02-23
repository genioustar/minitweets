import withHandler from "@/lib/server/withHandler";
import { withApiSession } from "@/lib/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    body: { writting },
    session: { user },
  } = req;
  console.log(writting);
  console.log(user);
  const createTweet = await client?.post.create({
    data: {
      writting,
      user: {
        connect: {
          id: user?.id,
        },
      },
    },
  });
  res.json({
    ok: true,
    createTweet,
  });
}
export default withApiSession(withHandler({ methods: ["POST"], handler }));
