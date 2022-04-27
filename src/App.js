import React from 'react';
import styles from './App.css';
import Header from './components/Header/Header';
import Movies from './components/Movie/Movies';

const App = () => {

  return (
  <div className={styles.content}>
      <Header />
      <Movies/>
    </div>
  )}
export default App;
