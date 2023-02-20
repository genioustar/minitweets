export default function Login() {
  return (
    <div className="w-full mx-auto max-w-xl mt-16">
      <div className="flex justify-center ">
        <h1 className="text-lime-500 font-bold text-4xl">Mini Tweets Login</h1>
      </div>
      <div className="flex flex-col item-center">
        <label htmlFor="email">email</label>
        <input id="email" className="border"></input>
        <label htmlFor="password">비밀번호</label>
        <input id="password" className="border"></input>

        <button>로그인</button>
      </div>
    </div>
  );
}
