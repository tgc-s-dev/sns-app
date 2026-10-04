import type { Post } from "@/types/post";

type PostCardProps = {
    post: Post;
}

export default function PostCard({ post }:PostCardProps){
    return(
        <article className="rounded-xl bg-white p-6 shadow">
            <div className="flex items-center justify-between">
                <p className="font-bold text-gray-900">{post.userName}</p>
                <time className="text-sm text-gray-500">{post.createdAt}</time>
            </div>

            <p className="mt-4 whitespace-pre-wrap text-gray-800" >
                {post.content}
            </p>

            <div className="mt-5 flex items-center gap-3">
                <button 
                type="button"
                className="rounded-lg bg-gray-200 px-3 py-2 text-sm font-bold text-gray-700"
                >
                    削除
                </button>
            </div>
        </article>
    )
}