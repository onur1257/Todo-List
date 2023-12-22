import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([])

  const  createTask=(title,taskDesc)=>{
    const createTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999), // Fix the missing 'id' key and the colon ':'
        title,
        taskDesc
      }
    ];

setTasks(createTasks);

    
};
const deleteTaskById =(id) =>{
  const afterDeletingTasks=tasks.filter((task)=>{
   
    return task.id !==id;
  } );
  setTasks(afterDeletingTasks);
};
const editTaskByID =(id,updatedTitle,updatedTaskDesc) =>{
  const updatedTasks=tasks.map((task)=>{
   if(task.id===id)
   {
    return {id,title:updatedTitle,taskDesc:updatedTaskDesc}
   }

   return task;
 
  } );
  setTasks(updatedTasks);
};



  return (
    <div className="App">
     <TaskCreate  onCreate={createTask} />
     <h1>GÖREVLER</h1>
     <TaskList  tasks= {tasks}   onDelete={deleteTaskById} onUpdate={editTaskByID}/>
    </div>
  );
}

export default App;

