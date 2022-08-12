import React from 'react'
import css from './Post.module.css'

const Post = (props) => {
    return (
        <div className={css.item}>
            <img className={css.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXe5dPpZU6fFDVUvBBRs9k8w4E4l75GYjJEOkMR65N&s"/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;