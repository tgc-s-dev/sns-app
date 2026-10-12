"use client";

import {useState} from "react";
import type {Post} from "@/types/post";
import PostCard from "@/components/PostCard"
import PostForm from "@/components/PostForm"

type PostClientProps = {
    initialPosts:Post[];
}

export default function PostClient({ initialPosts } : PostClientProps){
    const [posts,setPosts] = useState<Post[]>(initialPosts);

    function handleAddPost(content:string){
        const createdAt = new Date().toLocaleString("ja-jp");

        setPosts((currentPosts) => {
            const newPost: Post = {
                id: Math.max(0,...currentPosts.map((post) => post.id)) + 1,
                userName:"test",
                content,
                createdAt,
            };
            return [newPost, ...currentPosts];
        });
    }

return(
    <>
    <section className="rounded-xl bg-white p-6 shadow">
        <h1 className="text-2xl font-bold text-gray-900">投稿一覧</h1>
        <PostForm onSubmit={handleAddPost} />
    </section>

    <section className="mt-6 space-y-4">
        {posts.map((post) => (
            <PostCard key={post.id} post={post} />
        ))}
    </section>
    </>                         
    );
}
