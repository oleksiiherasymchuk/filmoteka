import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (probs) => {
  return <div>
    <ProfileInfo />
    <MyPostsContainer store = {probs.store} />
  </div>
}

export default Profile;