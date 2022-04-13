const ADD_POST = 'ADD-POST';
const update_New_Post_Text = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: "how are u", count: 16 },
        { id: 2, message: "hello", count: 1 },
        { id: 3, message: "med", count: 100 }
      ],
      newPostText: ""
    }

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                count: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        } 
        case update_New_Post_Text:{
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
        }
    }
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: update_New_Post_Text , newText:text})

export default profileReducer;