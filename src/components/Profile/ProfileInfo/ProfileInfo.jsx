import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return <div className={s.content}>
    <div>
      <img src="https://cdn.pixabay.com/photo/2016/04/13/19/23/binary-1327501_960_720.jpg" />
    </div>
    <div className={s.description}>
      ava +description
    </div>
  </div>
}

export default ProfileInfo;