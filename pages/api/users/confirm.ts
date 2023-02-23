import withHandler from "@/lib/server/withHandler";
import { withApiSession } from "@/lib/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/server/client";

/**
 * 유저가 로그인을 위해 db에 로그인 정보와 비교하는 부분!
 */
interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email, password } = req.body;
  const loginData = await client?.user.findFirst({
    where: {
      email,
    },
  });
  console.log(loginData);
  console.log(password);
  if (loginData?.password === password) {
    req.session.user = {
      id: Number(loginData?.id),
    };
    await req.session.save();
    return res.json({
      ok: true,
    });
  } else {
    res.status(404).json({ ok: false, error: "비밀번호를 확인해주세요" });
  }
}

export default withApiSession(withHandler({ methods: ["POST"], handler }));
