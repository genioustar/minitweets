export default function CreateAccount() {
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
        <label htmlFor="confirm">비밀번호 확인</label>
        <input id="confirm" className="border"></input>
        <button>회원 가입</button>
      </div>
    </div>
  );
}
