import useUser from "@/lib/client/useUser";
import { Post, User } from "@prisma/client";
import Link from "next/link";
import useSWR from "swr";

interface TweetsWithUser extends Post {
  user: User;
}

interface TweetsResponse {
  ok: boolean;
  tweets: TweetsWithUser[];
}

export default () => {
  // const { data } = useSWR("/api/tweets");
  // console.log(data);
  const { user } = useUser(); // 이거 user, isLoading 안쓰지만 하는건 useUser에서 로그인 여부 확인해주고 안되어있으면 로그인하라고 보냄
  const { data } = useSWR<TweetsResponse>("/api/tweets"); // useSWR이 데이터를 가져올때 어떤 타입을 가져오는지 알려주기 위해서 <>에 interface를 넣는다!
  console.log(data?.tweets);
  return (
    <div className="w-full mx-auto max-w-xl mt-16">
      <div className="flex flex-col">
        {data?.tweets?.map((tweet) => (
          <Link href={`/tweet/${tweet.id}`}>
            <div key={tweet.id} className="border">
              <div className="flex justify-start items-center pl-2">
                <div className="border my-2 bg-gray-800 w-20 h-20 border-gray-800 rounded-full"></div>
                <div className="pl-4 space-y-2">
                  <p>{tweet.user.name}</p>
                  <p>{tweet.writting}</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="flex items-center space-x-0.5 text-sm text-gray-600">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                  <span>1</span>
                </div>
                <div className="flex items-center space-x-0.5 text-sm text-gray-600">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                  <span>2</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="fixed bottom-5 right-5">
        <Link href={"/tweet"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
