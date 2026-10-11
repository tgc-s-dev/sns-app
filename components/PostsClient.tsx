"use client";

import {useState} from "react";
import type {Post} from "@/types/post";
import PostCard from "@/components/PostCard"
import PostForm from "@/components/PostForm"

type PostClientProps = {
    initialPosts:Post[];
}

export default function PostClient({ initialPosts } : PostClientProps){
    const [posts] = useState<Post[]>(initialPosts);

return(
    <>
    <section className="rounded-xl bg-white p-6 shadow">
        <h1 className="text-2xl font-bold text-gray-900">投稿一覧</h1>
        <PostForm />
    </section>

    <section className="mt-6 space-y-4">
        {posts.map((post) => (
            <PostCard key={post.id} post={post} />
        ))}
    </section>
    </>                         
    );
}
