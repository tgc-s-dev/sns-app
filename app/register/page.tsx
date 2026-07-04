export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow">
        <h1 className="text-2xl font-bold text-gray-900">新規登録</h1>

        <p className="mt-4 text-gray-600">
          ユーザー名、メールアドレス、パスワードを入力してください。
        </p>

        <form className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700">
              ユーザー名
            </label>

            <input 
              required
              type="text"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2"
              placeholder="ユーザー名を入力"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700">
              メールアドレス
            </label>

            <input 
              required
              type="email"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2"
              placeholder="example@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700">
              パスワード
            </label>

            <input required
              type="password"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2"
              placeholder="パスワードを入力"
            />
          </div>

          <button 
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 font-bold text-white"
          >
            登録する
          </button>
        </form>
      </div>
    </main>
  );
}