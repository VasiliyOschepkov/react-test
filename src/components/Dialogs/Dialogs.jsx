import React from 'react'
import css from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Vasiliy'},
        {id: 2, name: 'Roma'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Gala'}
    ]

    let messages = [
        {id:1, message:'Hi'},
        {id:2, message:'Yo'},
        {id:3, message:'What are you doing?'}
    ]

    let dialogsElement = dialogs.map(d => <DialogsItem id={d.id} name={d.name}/>);
    let messagesElement = messages.map(m =>  <Message value={m.message}/>);

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                { dialogsElement }
            </div>

            <div className={css.messages}>
                { messagesElement }
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