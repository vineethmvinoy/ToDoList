import "./styles.css";
import Header from "./Header/Header.js";

import { useState } from "react";


export default function App() {
  const [tasks, setTasks] = useState([                     //Setting states to have the name and its status of completion in state assignment
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
  function ToDoReturn({id,task}){                                //Function That mainly return tasks as buttons & updates the state of tasks as completed 
    const [taskDone,setTaskDone]=useState(task.completed);      //or not ,also  updates text to have the line through or not.
    const styles = {
      textDecoration: taskDone ? 'line-through' : 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer', 
    };
    function handleClick(){                //We use two states one having the whole name and completed steps other only having the completed values
      setTaskDone(!taskDone);             //Using the both states we find the tasks that has been checked when pressed and updates its state in both  
      const tempTasks=tasks.slice();     //places
      for(let i=0;i<tempTasks.length;i++)
      {
        if(tempTasks[i].name===task.name)
          tempTasks[i].completed=!taskDone;
      }
      setTasks(tempTasks);
    }
    return (
      <button id={id} style={styles}  onClick={handleClick}>{task.name}</button> //returning buttons
     );
  }
  return (
    <div className="App">
      <Header />
      <hr />
    <div className="Header">{tasks.length!=0?                    //Condition to check if tasks list is empty or not if empty display new text
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
