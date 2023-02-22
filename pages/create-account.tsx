import { useForm } from "react-hook-form";

export default function CreateAccount() {
  interface EnterForm {
    email: string;
    name: string;
    password: string;
    confirm: string;
  }
  const { register, watch, handleSubmit } = useForm<EnterForm>();
  const onValid = (data: EnterForm) => {
    console.log(data);
  };
  return (
    <div className="w-full mx-auto max-w-xl mt-16">
      <h1 className="text-center text-lime-500 font-bold text-4xl">
        Mini Tweets Login
      </h1>
      <form
        className="flex flex-col item-center mt-8 space-y-2"
        onSubmit={handleSubmit(onValid)}
      >
        <label htmlFor="email" className="font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="rounded-md border border-gray-300 bg-gray-50 px-3 text-gray-500 transition-color duration-200"
          placeholder="이메일 입력"
          {...register("confirm", { required: true })}
          required
        />
        <label htmlFor="name" className="font-medium text-gray-700">
          Nic Name
        </label>
        <input
          type="text"
          id="name"
          className="rounded-md border border-gray-300 bg-gray-50 px-3 text-gray-500 transition-color duration-200"
          placeholder="Nic Name 입력"
          {...(register("name"), { required: true })}
          required
        />
        <label htmlFor="password" className="font-medium text-gray-700">
          비밀번호
        </label>
        <input
          type="password"
          id="password"
          className="rounded-md border border-gray-300 bg-gray-50 px-3 text-gray-500 transition-color duration-200"
          placeholder="비밀번호 입력"
          {...register("confirm", { required: true })}
          required
        ></input>
        <label htmlFor="confirm" className="font-medium text-gray-700">
          비밀번호 확인
        </label>
        <input
          type="password"
          id="confirm"
          className="rounded-md border border-gray-300 bg-gray-50 px-3 text-gray-500 transition-color duration-200"
          placeholder="비밀번호 재입력"
          {...register("confirm", {
            required: true,
            validate: (val: string) => {
              if (watch("password") != val) {
                return "Your passwords do no match";
              }
            },
          })}
          required
        ></input>
        <div>
          <button className="border border-gray-300 bg-gray-50 text-gray-500 w-full mt-4 rounded-md py-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white">
            회원 가입
          </button>
        </div>
      </form>
    </div>
  );
}
