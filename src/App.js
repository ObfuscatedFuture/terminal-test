import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassForm from './components/ClassForm';
import StyledButton from './components/StyledButton';
import DropDown from './components/DropDown';
import { useState } from 'react';

export default function App() {
  const [count, setValue] = React.useState(2);

  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
      <div className="App">
        <h1> Class Selector </h1>
        <ClassForm count={count}/>
        <DropDown handleChange={handleChange}/>
        <StyledButton text="Generate"/>
      </div>
  );
}