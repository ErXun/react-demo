import React from 'react';
import './App.css';
// import ToDoList from './components/ToDoList/ToDoList';
// import SearchGitUsers from './components/SearchGitUsers';
// import StudyRouter from './components/StudyRouter';
// import Demo from './components/Hooks/useState';
// import Demo from './components/Hooks/useEffect';
import Demo from './components/react 扩展/PureComponent';



export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <ToDoList /> */}
        {/* <Axios /> */}
        {/* <SearchGitUsers /> */}
        {/* <StudyRouter /> */}
        <Demo />
      </div>
    )
  }
}


