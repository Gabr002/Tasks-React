import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid' 

import Tasks from './components/Tasks';
import './App.css'
import AddTask from './components/AddTask';

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
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks 
          tasks={tasks} 
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      </div>
    </>
  );
}

export default App;