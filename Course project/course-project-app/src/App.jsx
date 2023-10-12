import React from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Calendar from './components/Calendar/Calendar';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Calendar />
    </div>
  );
}

export default App;
