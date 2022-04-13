import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (probs) =>{
  let postElements = 
  probs.posts.map (p  => <Post message={p.message}  count={p.count} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    probs.addPost();
    // probs.dispatch (addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    probs.updateNewPostText(text);
    // let action = {type:'UPDATE-NEW-POST-Text', newText:text};
    // let action = updateNewPostTextCreator(text)
    // probs.dispatch (action)
  }


    return (
        <div className={s.post}>
          <h3>My Posts</h3>
          <div className={s.newPost}>
            <div>
              <textarea onChange = {onPostChange} ref = {newPostElement} value = {probs.newPostText} placeholder='New post'/>
            </div>
            <div>
              <button onClick = {onAddPost}>Add post</button>
            </div>
          </div>
        <div className = {s.posts}>
          {postElements}
        </div>
          
        </div>
    );
}

export default MyPosts;