import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

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