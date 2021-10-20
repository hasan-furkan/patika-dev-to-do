
import './App.css';
import InputBox from './components/InputBox';
import List from './components/List';
import {useEffect, useState} from "react";
function App() {
  const [task, setTask] = useState([])

  useEffect(() => {
    console.log(task);

  }, [task])

  return (
    <div className="App">
    <InputBox addTask={setTask} task={task}/>
    <List task={task} />
    </div>
  );
}

export default App;
