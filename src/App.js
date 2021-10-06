import React from 'react';
import './App.css';
import { ChatWidjet } from './components/chat';
import { Landing } from './components/landing/Landing';
import { Navbar } from './components/navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <ChatWidjet />
    </div>
  );
}

export default App;
