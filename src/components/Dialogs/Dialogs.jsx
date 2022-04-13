import React from 'react';
import s from "./Dialogs.module.css";
import TextMessage from './Message/Message';
import User from './User/User';


const Dialogs = (probs) => {
    let state = probs.messagePage

    let dialogElements = state.dialogs.map(dialog => <User name={dialog.name} key = {dialog.id} id={dialog.id} />);
    let messageElements = state.messages.map(message => <TextMessage key = {message.id} text={message.text} />);
    let newMessageBody = state.newMessageBody;

   
    let onSendMessageClick = () => {
        probs.sendMessage();}

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        probs.updateNewMessageBody(body);}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter new message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>SEND</button></div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;


