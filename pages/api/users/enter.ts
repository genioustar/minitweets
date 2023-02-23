import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/server/client";

interface ResponseType {
  ok: boolean;
  [key: string]: any;
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
