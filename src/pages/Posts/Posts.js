import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {

    const [posts,setPosts]=useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            setPosts(res.data);
            // console.log(posts);
        })
    },[posts]);

    return (
        <div>
            {posts.map(post=><Post
            post={post}
            key={post.id}
            ></Post>)}
        </div>
    );
};
export default Posts;

