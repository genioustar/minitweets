/**
 * iron-session을 활용해서 confirm.tsx의 handler(여기서는 fn)를 통해서 session 만듬!
 */
import { withIronSessionApiRoute } from "iron-session/next";

// declare를 쓰는건 변수, 상수, 함수, 클래스 가 어딘가에 이미 선언되어있음을 말해주는거!
declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const cookieOptions = {
  cookieName: "tweetsession",
  password: "123u98dhfpkkqkwejpr9u23490ukj;ojsdaifjsij1293j9w8eyr98yfakdjl", // !를 마지막에 붙여주어 무조건 값이 있다는 것을 말함!
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
