import React from 'react';
import './App.scss';
import Navigation from './Navigation';
import Content from './Content';

const App = () => {
  return (
    <div className="app">
      <div className="fade-top"></div>
      <div className="appWrapper">
        <Navigation />
        <Content />
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default App;
