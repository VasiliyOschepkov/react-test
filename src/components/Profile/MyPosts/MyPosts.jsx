import React from 'react'
import css from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi 1'},
        {id: 2, message: 'Hi 2'},
        {id: 3, message: 'Hi 3'}
    ]

    let postsElements = posts.map(p => <Post message={p.message}/>);

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
                { postsElements }
            </div>

        </div>
    );
}

export default MyPosts;