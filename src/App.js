import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (probs) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path='/Profile' render = { () => 
          <Profile store = {probs.store} /> } />

          <Route path='/Dialogs' render={ () => 
          <DialogsContainer store = {probs.store} /> } />

          <Route path='/News' render = { () => <News /> } />

          <Route path='/Music' render = { () => <Music /> } />
          
          <Route path='/Settings' render = { () => <Settings /> } />

          <Route path='/Users' render = { () => <UsersContainer /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
