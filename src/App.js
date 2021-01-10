import React from 'react';
import './App.css';
// import ToDoList from './components/ToDoList/ToDoList';
import Axios from './components/Axios/Axios';



export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <ToDoList /> */}
        <Axios />
      </div>
    )
  }
}


