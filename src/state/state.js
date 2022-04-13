// import messageReducer from "./messageReducer";
// import profileReducer from "./profileReducer";
// import sidebarReducer from "./sidebarReducer";

// let store = {
//   _state: {
//     profilePage: {
//       posts: [
//         { id: 1, message: "how are u", count: 16 },
//         { id: 2, message: "hello", count: 1 },
//         { id: 3, message: "med", count: 100 }
//       ],
//       newPostText: ""
//     },
//     messagePage: {
//       dialogs: [
//         { id: 1, name: "Jeka" },
//         { id: 2, name: "Alex" },
//         { id: 3, name: "Vlad" },
//         { id: 4, name: "Slava" },
//         { id: 5, name: "Vova" }
//       ],
//       messages: [
//         { id: 1, text: "Hi" },
//         { id: 2, text: "Allo" },
//         { id: 3, text: "10" },
//         { id: 4, text: "football" }
//       ],
//       newMessageBody: "",
//     },
//     sidebar:{}
//   },
//   _callSubscribers () {
//     console.log('State changed');
//   },

//   getState () {
//     return this._state
//   },
//   subscribe (observer) {
//     this._callSubscribers  = observer},

//   dispatch (action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.messagePage = messageReducer(this._state.messagePage, action);
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//     this._callSubscribers(this._state);
//     }
// }

// export default store;
// window.store = store;