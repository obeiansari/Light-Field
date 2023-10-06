import React, { useState, useEffect } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import MainContent from './components/main-content/MainContent';
const App = (props) => {
  return (
    <>
      <div className='App'>
       <Sidebar/>
        <div className='right-bar'>
          <Header/>
          <MainContent/>
        </div>
      </div>
    </>
  );
}

export default App;