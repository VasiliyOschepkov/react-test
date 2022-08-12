import React from 'react'
import css from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={css.nav}>
            <div className={`${css.item} ${css.active}`}>
                <a>Profile</a>
            </div>
            <div className={css.item}>
                <a>Message</a>
            </div>
            <div className={css.item}>
                <a>Musik</a>
            </div>
            <div className={css.item}>
                <a>Settings</a>
            </div>
        </div>
    );
}

export default Navbar;