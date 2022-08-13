import React from 'react'
import css from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={css.nav}>

            <div className={`${css.item} ${css.active}`}>
                <a href="/profile">
                    Profile
                </a>
            </div>

            <div className={css.item}>
                <a href="/dialog">
                    Message
                </a>
            </div>

            <div className={css.item}>
                <a href='/news'>
                    News
                </a>
            </div>

            <div className={css.item}>
                <a href='/music'>
                    Music
                </a>
            </div>

            <div className={css.item}>
                <a href='/settings'>
                    Settings
                </a>
            </div>

        </div>
    );
}

export default Navbar;