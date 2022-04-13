import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../state/messageReducer';
import Dialogs from './Dialogs';


// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             { store => {
//                  let onSendMessageClick = () => {
//                      store.dispatch(sendMessageCreator());
//                 }
               
//                 let onNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body));
//                 }
//     return <Dialogs updateNewMessageBody = {onNewMessageChange}
//                 sendMessageCreator = {onSendMessageClick}
//                 messagePage = {store.getState().messagePage}/>
//             }
//         }
//         </StoreContext.Consumer>
//     )};



let mapStateToProps = (state) =>{
    return {
        messagePage: state.messagePage}};

let mapDistachToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())},
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))}}};

const DialogsContainer = connect(mapStateToProps, mapDistachToProps) (Dialogs)

export default DialogsContainer;


