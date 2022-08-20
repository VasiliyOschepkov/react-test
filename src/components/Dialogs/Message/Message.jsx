import React from 'react'
import css from './../Dialogs.module.css'


const Message = (props) => {
    return (
        <div className={css.message}>
            {props.value}
        </div>
    );
}

export default Message;