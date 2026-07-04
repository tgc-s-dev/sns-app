import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-gray-900">Mini SNS</h1>
        <p className="mt-4 text-gray-600">
          投稿を共有できるシンプルなSNSアプリです。
        </p>
        <div className="mt-4 flex gap-4">
           <Link href="/login" className="bg-blue-500 p-3 rounded-lg text-white">ログイン</Link> 
           <Link href="/register" className="bg-gray-200 p-3 rounded-lg text-black">新規登録</Link>   
        </div>

         
      </div>
    </main>
  );
}