import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/server/client";

/**
 * 유저가 create-account를 했을때 유저정보를 User table에 create하는 부분
 */
interface ResponseType {
  ok: boolean;
}

export default async function Enter(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email, name, password } = req.body;
  console.log(email, name, password);
  const loginData = await client?.user.create({
    data: {
      email,
      name,
      password,
    },
  });
  console.log(loginData);
  return res.json({
    ok: true,
  });
}
