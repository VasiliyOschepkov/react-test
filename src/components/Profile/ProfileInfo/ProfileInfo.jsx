import React from 'react'
import css from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://klike.net/uploads/posts/2019-07/1562069979_20.jpg"/>
            </div>

            <div  className={css.discription}>
                ava + discription
            </div>
        </div>
    );
}

export default ProfileInfo;