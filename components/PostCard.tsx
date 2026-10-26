import type { Post } from "@/types/post";
import { useState } from "react";

type PostCardProps = {
    post: Post;
    onDelete:(postId:number) => void;
}

export default function PostCard({ post, onDelete }:PostCardProps){

    const [isEditing,setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState("");

    function handleToggleEdit(){
        setEditContent(post.content);
        setIsEditing(!isEditing);
    }


    return(
        <article className="rounded-xl bg-white p-6 shadow">
            <div className="flex items-center justify-between">
                <p className="font-bold text-gray-900">{post.userName}</p>
                <time className="text-sm text-gray-500">{post.createdAt}</time>
            </div>

            {isEditing ? (
                <textarea 
                aria-label="投稿内容の編集"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                rows={4}
                className="mt-4 w-full rounded-lg border border-gray-300 p-3 text-gray-900"
                />
            ) : (
                <p className="mt-4 whitespace-pre-wrap text-gray-800"> 
                    {post.content}
                </p>
            )}
            <div className="mt-5 flex items-center gap-3">
                <button 
                type="button"
                onClick={() => onDelete(post.id)}
                className="rounded-lg bg-gray-200 px-3 py-2 text-sm font-bold text-gray-700"
                >
                    削除
                </button>
                <button
                type="button"
                onClick={handleToggleEdit}
                className="rounded-lg bg-gray-200 px-3 py-2 text-sm font-bold text-gray-700"
                >
                    {isEditing ? "キャンセル" : "編集"}
                </button>
            </div>
        </article>
    )
}