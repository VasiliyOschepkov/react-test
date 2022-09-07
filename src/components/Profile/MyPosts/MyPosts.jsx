import React from 'react'
import css from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
debugger;
    let postsElements = props.state.posts.map(p => <Post message={p.message}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
        newPostElement.current.value = "";
    }

    let changePost = () => {
        props.updateValuePost(newPostElement.current.value);
    }

    return (
        <div className={css.myPostsBlock}>
            <h3>My Posts</h3>

            <div>
                <textarea onChange={changePost} ref={newPostElement} value={props.state.postValue}/>
                <div>
                    <button onClick={addPost}>Add</button>
                </div>
            </div>

            <div className={css.posts}>
                { postsElements }
            </div>

        </div>
    );
}

export default MyPosts;