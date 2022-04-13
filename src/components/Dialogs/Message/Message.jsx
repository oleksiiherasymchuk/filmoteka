import React from 'react';
import s from "./../Dialogs.module.css";


const TextMessage = (probs) =>{
    return <div className={s.dialog}>{probs.text}</div>
}

export default TextMessage;


