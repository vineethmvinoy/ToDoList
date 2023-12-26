import "./styles.css";
import Header from "./Header/Header.js";

import { useState } from "react";


export default function App() {
  const [tasks, setTasks] = useState([
    { name: "Read SpringBoot", completed: false },
    { name: "Complete assignments", completed: false },
    { name: "Prepare breakfast", completed: false },
    { name: "Sleep for 2 hours", completed: false },
    { name: "Take a shower", completed: false }
  ]);
  function handleRemoveClick() {
    setTasks(tasks => tasks.filter(task => !task.completed));
    console.log(tasks);
  }
  function ToDoReturn({id,task}){
    const [taskDone,setTaskDone]=useState(task.completed);
    const styles = {
      textDecoration: taskDone ? 'line-through' : 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer', 
    };
    function handleClick(){
      setTaskDone(!taskDone);
      const tempTasks=tasks.slice();
      for(let i=0;i<tempTasks.length;i++)
      {
        if(tempTasks[i].name===task.name)
          tempTasks[i].completed=!taskDone;
      }
      setTasks(tempTasks);
    }
    return (
      <button id={id} style={styles}  onClick={handleClick}>{task.name}</button>
     );
  }
  return (
    <div className="App">
      <Header />
      <hr />
    <div className="Header">{tasks.length!=0?
    (
    tasks.map((task,index)=>(<div key={index}>
      <ToDoReturn key={index} id={index} task={task}/>
    </div>
    ))
    ):(<h3 className="Header">"Nothing to do buddy. Sleep!"</h3>)}
    </div>
    
    <div className="Header">
    <button onClick={handleRemoveClick} >Remove Completed</button>
    </div>
    </div>
  );
}
