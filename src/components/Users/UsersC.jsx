import * as axios from 'axios';
import React from 'react';
import styles from './users.module.css';
import photoIcon from '../../assets/images/icon.png';

class UsersC extends React.Component {
    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
        .then(response => {
        this.probs.setUser(response.data.items);
        });
    }
    render () {
        return <div>
     { this.probs.users.map(u => <div key={u.id}>
          <span>
                            <div><img src={u.photos.small != null ? u.photos.small : photoIcon} className={styles.userPhoto} /></div>
                            <div>
                                {u.followed ? <button onClick={() => { this.probs.unfollow(u.id) }}>UNFOLLOW</button>
                                    : <button onClick={() => { this.probs.follow(u.id) }}>FOLLOW</button>}
        
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
}

export default UsersC;
// class Users extends React.Component {
//     componentDidMount(){
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.probs.currentPage}&count=${this.probs.pageSize}`)
//                 .then(response => {
//                      this.probs.setUser(response.data.items);
//                      this.probs.setTotalUsersCount(response.data.totalCount)
//                });
//     }

//     onPageChanged = (pageNumber) => {
//                 this.probs.setCurrentPage(pageNumber);
//                 axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.probs.pageSize}`)
//                     .then(response => {
//                         this.probs.setUser(response.data.items);
//                     });
//             }
//     render (){
//         let pagesCount = Math.ceil (this.probs.totalUsersCount / this.probs.pageSize);
//         let pages = [];
//         for (let i = 1; i <= pagesCount; i++) {
//             pages.push(i);
//             }
        
//         return <div>
//                <div>
//                     {
//                     this.probs.pages.map ( p => {
//                         return <span className={this.probs.currentPage === p && styles.selectedPage}
//                         onClick={() => {this.onPageChanged(p)}}>{p}</span> 
//                     })}
//                 </div>
//                 {
//                    this.probs.users.map(u => <div key={u.id}>
//                         <span>
//                             <div><img src={u.photoUrl} className={styles.userPhoto} /></div>
//                             <div>
//                                 {u.followed ? <button onClick={() => { this.probs.unfollow(u.id) }}>UNFOLLOW</button>
//                                     : <button onClick={() => { this.probs.follow(u.id) }}>FOLLOW</button>}
        
//                             </div>
//                         </span>
//                         <span>
//                             <span>
//                                 <div>{u.name}</div>
//                                 <div>{u.status}</div>
//                                 <div>{u.id}</div>
//                             </span>
//                             <span>
//                                 <div>{'u.location.city'}</div>
//                                 <div>{'u.location.country'}</div>
//                             </span>
//                         </span>
//                     </div>)
//                 }
//             </div>
//     }
// }
