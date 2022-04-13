import React from 'react';
import { connect } from 'react-redux';
import {followAC, unfollowAC, setUserAC, setCurrentPageAC, setTotalUsersCountAC } from '../../state/usersReducer';
import Users from './Users';
import UsersC from './UsersC';

let mapStateToProps = (state) =>{
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage}};

let mapDistachToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))},
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))},
        setUser: (users) => {
            dispatch(setUserAC(users))},
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))},
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))}
       }};

const UsersContainer = connect(mapStateToProps, mapDistachToProps) (Users)

export default UsersContainer;

// {follow, unfollow, setUser,setCurrentPage, setTotalUsersCount}