export default function LoginPage(){
    return(
        <main className="min-h-screen bg-gray-100 p-8">
            <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow">
                <h1 className="text-2xl font-bold text-gray-900">ログイン</h1>
                <p className="mt-4 text-gray-600">
                    メールアドレスとパスワードを入力してください
                </p>

                <form className="mt-8 space-y-4">
                    <div>
                        <label className="block text-sm font-bold px-4 py-2 text-black" htmlFor="login-email">
                            メールアドレス
                        </label>
                        <input 
                        id="login-email"
                        required 
                        name="email"
                        autoComplete="email"
                        type="email" 
                        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2" placeholder="example@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold px-4 py-2 text-black" htmlFor="password">
                            パスワード
                            </label>
                        <input 
                        id="password"
                        name="password"
                        autoComplete="current-password"
                        required
                        type="password" 
                        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2" placeholder="パスワードを入力" 
                        />
                    </div>

                    <button type="submit" className="w-full rounded-lg bg-blue-600 px-4 py-2 font-bold  text-white">
                        ログイン
                    </button>
                </form>
            </div>

        </main>

    );
}