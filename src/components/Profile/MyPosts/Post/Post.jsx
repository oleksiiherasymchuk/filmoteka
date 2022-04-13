import React from 'react';
import s from "./Post.module.css";

const Post = (probs) =>{
    return (
        <div className={s.item}>
          {probs.message}
          <div>
            <span count="15">Like</span>
            <span> {probs.count}</span> 
          </div>
        </div>       
    );
}

export default Post;