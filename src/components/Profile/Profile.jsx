import React from 'react'
import css from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://klike.net/uploads/posts/2019-07/1562069979_20.jpg"/>
            </div>

            <div>
                ava + discription
            </div>

            <textarea/>
            <button>Add</button>
            <button>Other</button>

            <MyPosts/>
        </div>
    );
}

export default Profile;