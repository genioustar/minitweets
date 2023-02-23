import useMutation from "@/lib/client/useMutation";
import { useForm } from "react-hook-form";

interface MutationResults {
  ok: boolean;
}

interface PostTweetForm {
  writting: string;
}

export default function CreateTweet() {
  const { register, watch, handleSubmit, reset } = useForm<PostTweetForm>();
  const [enter, { data: loginData }] =
    useMutation<MutationResults>("/api/posts/");
  const onValid = (validForm: PostTweetForm) => {
    // reset();
    console.log(validForm);
    enter(validForm);
  };
  return (
    <div className="w-full mx-auto max-w-xl mt-16">
      <form
        className="flex flex-col item-center mt-8 space-y-2"
        onSubmit={handleSubmit(onValid)}
      >
        <label htmlFor="tweet" className="font-medium text-gray-700">
          트위터작성
        </label>
        <textarea
          id="tweet"
          className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white"
        ></textarea>
        <div>
          <button className="border border-gray-300 bg-gray-50 text-gray-500 w-full mt-4 rounded-md py-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white">
            트위터 작성
          </button>
        </div>
      </form>
    </div>
  );
}
