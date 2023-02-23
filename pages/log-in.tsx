import useMutation from "@/lib/client/useMutation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface LoginInfo {
  ok: boolean;
  [key: string]: any;
}

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit, reset } = useForm<LoginForm>();
  const [confirm, { data }] = useMutation<LoginInfo>("/api/users/confirm"); // 비밀번호를 get요청으로 보내면 안되니 post로 보낸다.
  const onValid = (validForm: LoginForm) => {
    reset();
    confirm(validForm);
  };
  console.log(data);
  const router = useRouter();
  useEffect(() => {
    if (data?.ok) {
      router.push("/");
    }
  });
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
          {...register("email", { required: true })}
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
          {...register("password", { required: true })}
          required
        />
        {data?.error || ""}
        <div className="font-bold text-xl">
          <button className="border border-gray-300 bg-gray-50 text-gray-500 w-full mt-4 rounded-md py-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
