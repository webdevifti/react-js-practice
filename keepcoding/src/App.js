
import './App.css';
import React from 'react';
import Clock from './components/Clock';
import Header from './components/Header';

export default class App extends React.Component{
  render(){
    return (
        <Header />,
        <Clock test="এখন সময়" />
      );
  }
  
}


