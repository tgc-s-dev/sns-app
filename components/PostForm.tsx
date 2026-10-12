"use client";

import { useState } from "react";
import type { SyntheticEvent } from "react";

type PostFormProps = {
    onSubmit:(content: string) => void;
};

 
 
export default function PostForm({ onSubmit }: PostFormProps){
    const [content,setContent] = useState("");

    function handleSubmit(e:SyntheticEvent<HTMLFormElement>){

            e.preventDefault();
            const trimmedContent = content.trim();
            if (trimmedContent === "") return;
            onSubmit(trimmedContent);
            setContent("");
        
    }

    return (
        <form className="mt-4" onSubmit={handleSubmit}>
            <label htmlFor="post-content" 
            className="block text-sm font-bold text-gray-700">
                新しい投稿
            </label>

            <textarea 
            name="content" 
            id="post-content"
            rows={4}
            placeholder="いま何をしていますか"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-2 w-full rounded-lg border border-gray-300 p-3 text-gray-900"
            />
            <p className="mt-2 text-sm text-gray-500">
                {content.length}文字
            </p>


            <button
            type="submit"
            disabled={content.trim() === ""}
            className="mt-3 rounded-lg bg-blue-600 px-4 py-2 font-bold text-white disabled:opacity-50"
            >
                投稿する
            </button>
        </form>
    )
}