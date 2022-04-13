import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./../Dialogs.module.css";

const User = (probs) =>{
    return <div className={s.dialog}>
        <NavLink to={"/dialogs/" + probs.id}>{probs.name}</NavLink>
        </div>;
}

export default User;


