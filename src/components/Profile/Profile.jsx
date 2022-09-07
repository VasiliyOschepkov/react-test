import React from 'react'
import css from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateValuePost} from "../../redux/state";

const Profile = (props) => {
    debugger;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                state={props.state}
                addPost={props.addPost}
                updateValuePost={props.updateValuePost}
            />
        </div>
    );
}

export default Profile;