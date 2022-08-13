import React from 'react'
import css from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={css.myPostsBlock}>
            <h3>My Posts</h3>

            <div>
                <textarea/>
                <div>
                    <button>Add</button>
                </div>
            </div>

            <div className={css.posts}>
                <Post message='Hi 1'/>
                <Post message='Hi 2'/>
                <Post message='Hi 3'/>
            </div>

        </div>
    );
}

export default MyPosts;