import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
    const [tasks, setTasks] = useState([]);
    const newTask = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const currentTasks = [...tasks];

        const Task = newTask.current.value;

        if (Task) {
            currentTasks.push(Task);
            setTasks(currentTasks);
        } else {
            console.log("empty taks");
        }
    };
    return (
        <>
            <h1>TODO List</h1>

            <form onSubmit={handleSubmit}>
                <input ref={newTask} type="text" placeholder="New Task" />
                <input type="submit" />
            </form>

            <h2>Tasks</h2>
            <ul>
                {tasks.map((val, index) => (
                    <li key={index}>{val}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
