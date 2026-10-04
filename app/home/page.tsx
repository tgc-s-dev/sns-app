import Link from "next/link"

export default function HomePage(){
    return(
     <main className="min-h-screen bg-gray-100 p-8">
        <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow">
            <h1 className="text-3xl font-bold text-gray-900">Mini SNS</h1>

            <p>
                投稿を共有できるシンプルなSNSアプリです
            </p>

            <div className="mt-6 flex gap-4">
                <Link 
                    href="/login" 
                    className="rounded-lg bg-blue-600 px-4 py-3 text-white">
                    ログイン
                </Link>

                <Link 
                    href="/register" 
                    className="rounded-lg bg-gray-200 px-4 py-3 text-gray-900">
                    新規登録
                </Link>

            </div>
        </div>
        
     </main>   
    )
}