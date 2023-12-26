import "./styles.css";
import Header from "./Header/Header.js";
import ToDoReturn from "./List/ToDoReturn.js";


export default function App() {
  const tasks=["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"];
  return (
    <div className="App">
      <Header />
      <hr />
    
    {tasks.map((task,index)=>(<div key={index}>
      <ToDoReturn value={task}/>
    </div>
    ))}
    
    </div>
  );
}
