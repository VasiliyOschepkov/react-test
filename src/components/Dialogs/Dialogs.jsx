import React from 'react'
import css from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map(d => <DialogsItem id={d.id} name={d.name}/>);
    let messagesElement = props.state.messages.map(m =>  <Message value={m.message}/>);

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

export default Dialogs;