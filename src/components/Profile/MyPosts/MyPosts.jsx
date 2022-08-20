import React from 'react'
import css from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
debugger;
    let postsElements = props.state.posts.map(p => <Post message={p.message}/>);

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