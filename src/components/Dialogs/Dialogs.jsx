import React from 'react'
import css from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                <DialogsItem id='1' name='Vasiliy'/>
                <DialogsItem id='1' name='Roma'/>
                <DialogsItem id='1' name='Dima'/>
                <DialogsItem id='1' name='Gala'/>
            </div>

            <div className={css.messages}>
                <Message value='Hi'/>
                <Message value='Yo'/>
                <Message value='What are you doing?'/>
            </div>
        </div>
    );
}

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={css.dialog + ' ' + css.active}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={css.message}>
            {props.value}
        </div>
    );
}

export default Dialogs;