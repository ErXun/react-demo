import React from 'react';
import './App.css';
// import ToDoList from './components/ToDoList/ToDoList';
import SearchGitUsers from './components/SearchGitUsers';



export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <ToDoList /> */}
        {/* <Axios /> */}
        <SearchGitUsers />
      </div>
    )
  }
}


