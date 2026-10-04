import Link from "next/link";
import type { Post } from "@/types/post";
import PostCard from "@/components/PostCard";

// 仮データ
const posts: Post[] = [
  {
    id: 1,
    userName: "test",
    content: "Mini SNSを作り始めました",
    createdAt: "2026年9月09日"
  },
  {
    id: 2,
    userName: "test",
    content: "ex",
    createdAt: "2026年10月10日"
   
  },
];

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-2xl items-center justify-between p-4">
          <Link href="/posts" className="text-xl font-bold text-gray-900">
            Mini SNS
          </Link>
          <button
            type="button"
            className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-bold text-gray-900"
          >
            ログアウト
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-2xl p-4">
        <section className="rounded-xl bg-white p-6 shadow">
          <h1 className="text-2xl font-bold text-gray-900">投稿一覧</h1>

          <form className="mt-4">
            <label
              htmlFor="post-content"
              className="block text-sm font-bold text-gray-700"
            >
              新しい投稿
            </label>

            <textarea
              id="post-content"
              name="content"
              rows={4}
              placeholder="いま何をしていますか？"
              className="mt-2 w-full rounded-lg border border-gray-300 p-3 text-gray-900"
            />

            <button
              type="submit"
              className="mt-3 rounded-lg bg-blue-600 px-4 py-2 font-bold text-white"
            >
              投稿する
            </button>
          </form>
        </section>

        <section className="mt-6 space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post}/>
          ))}
        </section>
      </main>
    </div>
  );
}