const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    dialogs: [
        { id: 1, name: "Jeka" },
        { id: 2, name: "Alex" },
        { id: 3, name: "Vlad" },
        { id: 4, name: "Slava" },
        { id: 5, name: "Vova" }
      ],
      messages: [
        { id: 1, text: "Hi" },
        { id: 2, text: "Allo" },
        { id: 3, text: "10" },
        { id: 4, text: "football" }
      ],
      newMessageBody: "",
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: 
            return {
                ...state,
                newMessageBody: action.body
            };  
        case SEND_MESSAGE: 
            let body = state.newMessageBody;
            return {
                ...state, 
                newMessageBody: ' ',
                messages: [...state.messages, {id:5, text: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
      
export default messageReducer;