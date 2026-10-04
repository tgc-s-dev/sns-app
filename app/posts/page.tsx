import Link from "next/link";

type Post = {
  id: number;
  userName: string;
  content: string;
  createdAt: string;
  likesCount: number;
};

const posts: Post[] = [
  {
    id: 1,
    userName: "田中太郎",
    content: "Mini SNSを作り始めました!",
    createdAt: "2026年7月12日",
    likesCount: 3,
  },
  {
    id: 2,
    userName: "鈴木花子",
    content: "Next.jsのルーティングを学習中です。",
    createdAt: "2026年7月11日",
    likesCount: 5,
  },
];

export default function PostsPage() {
  return (
    <main className="min-h-screen bg-gray-100">
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
            <article key={post.id} className="rounded-xl bg-white p-6 shadow">
              <div className="flex items-center justify-between">
                <p className="font-bold text-gray-900">{post.userName}</p>
                <time className="text-sm text-gray-500">{post.createdAt}</time>
              </div>

              <p className="mt-4 whitespace-pre-wrap text-gray-800">
                {post.content}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <button
                  type="button"
                  className="rounded-lg bg-pink-100 px-3 py-2 text-sm font-bold text-pink-700"
                >
                  いいね {post.likesCount}
                </button>

                <button
                  type="button"
                  className="rounded-lg bg-gray-200 px-3 py-2 text-sm font-bold text-gray-700"
                >
                  削除
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </main>
  );
}