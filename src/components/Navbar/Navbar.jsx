import React from 'react'
import css from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={css.nav}>

            <div className={css.item}>
                <NavLink to="/profile" className={navData => navData.isActive ? css.active : css.item}>
                    Profile
                </NavLink>
            </div>

            <div className={css.item}>
                <NavLink to="/dialogs" className={navData => navData.isActive ? css.active : css.item}>
                    Message
                </NavLink>
            </div>

            <div className={css.item}>
                <NavLink to='/news' className={navData => navData.isActive ? css.active : css.item}>
                    News
                </NavLink>
            </div>

            <div className={css.item}>
                <NavLink to='/music' className={({isActive}) => (isActive ? css.active : css.item)}>
                    Music
                </NavLink>
            </div>

            <div className={css.item}>
                <NavLink to='/settings' className={navData => navData.isActive ? css.active : css.item}>
                    Settings
                </NavLink>
            </div>

        </div>
    );
}

export default Navbar;