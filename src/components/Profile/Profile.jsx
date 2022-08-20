import React from 'react'
import css from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    debugger;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state}/>
        </div>
    );
}

export default Profile;