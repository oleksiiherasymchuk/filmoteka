import { addPostActionCreator, updateNewPostTextCreator } from '../../../state/profileReducer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import React from 'react';

// const MyPostsContainer = () =>{
//   return (
//     <StoreContext.Consumer>
//       {store => {
//         let state = store.getState();

//         let AddPost = () => {
//           store.dispatch (addPostActionCreator());
//   }

//         let onPostChange = (text) => {
//           let action = updateNewPostTextCreator(text)
//           store.dispatch(action)
//   }
//   return <MyPosts updateNewPostText = {onPostChange} 
//               addPost = {AddPost} 
//               posts = {state.profilePage.posts} 
//               newPostText = {state.profilePage.newPostText}/>
//           }
//         }
//       </StoreContext.Consumer>
//     );
// }
let mapStateToProps = (state) =>{
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText}};

let mapDistachToProps = (dispatch) => {
  return {
    updateNewPostText: (text) =>{
      let action = updateNewPostTextCreator(text)
      dispatch(action)},
    addPost: () => {
      dispatch (addPostActionCreator())}}};

const MyPostsContainer = connect(mapStateToProps, mapDistachToProps) (MyPosts)


export default MyPostsContainer;