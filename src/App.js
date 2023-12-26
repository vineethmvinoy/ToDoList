import "./styles.css";
import Header from "./Header/Header.js";
import ToDoReturn from "./List/ToDoReturn.js";


export default function App() {
  return (
    <div className="App">
      <Header />
      <hr />
    <div className="Header"><ToDoReturn value="Nothing to do buddy. Sleep!!"/></div>
    </div>
  );
}
