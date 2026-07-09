"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("内容を確認しました");
}

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow">
        <h1 className="text-2xl font-bold text-gray-900">新規登録</h1>

        <p className="mt-4 text-gray-600">
          ユーザー名、メールアドレス、パスワードを入力してください。
        </p>

        <form 
          className="mt-8 space-y-4 text-black"
          onSubmit={handleSubmit}
        >
          {message && (<p className="mt-4 rounded-lg bg-green-100 p-3 text-sm font-bold text-green-700">{message}</p>)}

          <div>
            <label className="block text-sm font-bold text-gray-700" htmlFor="register-userName">
              ユーザー名
            </label>

            <input
              id="register-userName"
              required
              name="name"
              type="text"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2"
              placeholder="ユーザー名を入力"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700" htmlFor="register-email">
              メールアドレス
            </label>

            <input
              id="register-email"
              required
              name="email"
              autoComplete="email"
              type="email"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700" htmlFor="register-password">
              パスワード
            </label>

            <input
              id="register-password"
              required
              name="password"
              autoComplete="new-password"
              type="password"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2"
              placeholder="パスワードを入力"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 font-bold text-white"
          >
            登録する
          </button>
        </form>

        <div className="mt-6 rounded-lg bg-gray-100 p-4 text-sm text-gray-700">
          <p>ユーザー名: {name}</p>
          <p>メールアドレス: {email}</p>
        </div>
      </div>
    </main>
  );
}

