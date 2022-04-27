import React from 'react';
import styles from '../Header/Header.module.css';
import headerIcon from '../../assets/images.png';


const Header = () => {
    return <div className={styles.backcolor}>
        <span><img className={styles.headerIcon} src={headerIcon} alt="" /></span>
        <span><h1 className={styles.headerText}>FilmoTeka</h1></span>
    </div>
}

export default Header;