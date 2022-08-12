import React from 'react'
import css from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <Post message='Hi 1'/>
            <Post message='Hi 2'/>
            <Post message='Hi 3'/>
        </div>
    );
}

export default MyPosts;