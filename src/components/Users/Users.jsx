import * as axios from 'axios';
import React from 'react';
import styles from './users.module.css';
import photoIcon from '../../assets/images/icon.png';

let  Users = (probs) => {
    
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${probs.currentPage}&count=${probs.pageSize}`)
        .then(response => {
        probs.setUser(response.data.items);
        probs.setTotalUsersCount(response.data.totalCount)
        });
    let onPageChanged = (pageNumber) => {
                        probs.setCurrentPage(pageNumber);
                        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${probs.pageSize}`)
                            .then(response => {
                                probs.setUser(response.data.items);
                            });
                    }
    let pagesCount = Math.ceil (probs.totalUsersCount / probs.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
  
  
  return <div>
      <div>
        {pages.map ( p => {
         return <span className={probs.currentPage === p && styles.selectedPage} onClick={ () => {onPageChanged(p)}}
         >{p}</span> 
        })}
        </div>
     { probs.users.map(u => <div key={u.id}>
          <span>
                            <div><img src={u.photos.small != null ? u.photos.small : photoIcon} className={styles.userPhoto} /></div>
                            <div>
                                {u.followed ? <button onClick={() => { probs.unfollow(u.id) }}>UNFOLLOW</button>
                                    : <button onClick={() => { probs.follow(u.id) }}>FOLLOW</button>}
        
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                                <div>{u.id}</div>
                            </span>
                            <span>
                                <div>{'u.location.city'}</div>
                                <div>{'u.location.country'}</div>
                            </span>
                        </span>
                    </div>)
                }
  </div>
}

export default Users;
