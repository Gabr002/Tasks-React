import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid' 
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';

import './App.css'

const App = () => {
  // let message = "Hello World!";
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      completed: false
    },
    {
      id: 2,
      title: 'Ler Livros',
      completed: true
    }
  ]);

  const handleTaskClick = (TaskId) => {
    const newTasks = tasks.map (task => {
      if(task.id === TaskId) return { ...task, completed: !task.completed}

      return task;
    });

    setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, 
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (TaskId) => {
    const newTasks = tasks.filter(task => task.id !== TaskId)

    setTasks(newTasks);
  }
  
  return(
    <Router>
      <div className="container">
        <Header />   
        <Route 
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks 
                tasks={tasks} 
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />
      </div>
    </Router>
  );
}

export default App;