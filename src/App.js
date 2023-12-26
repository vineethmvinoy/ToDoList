import "./styles.css";
import Header from "./Header/Header.js";
import ToDoReturn from "./List/ToDoReturn.js";
import { useState } from "react";

export default function App() {
  const [tasks,setTasks]=useState(["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"]);
  return (
    <div className="App">
      <Header />
      <hr />
    {tasks?
    (
    tasks.map((task,index)=>(<div key={index}>
      <ToDoReturn value={task}/>
    </div>
    ))
    ):(<h3 className="Header">"Nothing to do buddy. Sleep!"</h3>)}
    <div className="Header">
    <button onClick={()=>{
      setTasks(null);
    }} >Empty</button>
    </div>
    
    </div>
  );
}
