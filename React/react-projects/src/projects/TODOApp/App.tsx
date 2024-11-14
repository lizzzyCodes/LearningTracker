// this todo app should have a 
// strikthrough
// add to our list when we add a new item in our todo
// on click should we delete it? or jut strike throug?
// edit the todo thing 
// delete 
// all will be stored in an array
import { useState } from "react";
import Task from "./Task";
export default function App () {
    const [task, setTask] = useState([]); // task update the task by adding to overall array 
    const [ediTask, onEditTask] = useState(String) // maybe a string? 
    const [removeTask, onDeleteTask] = useState([]); // array which actually maybe on delete 
    
    return (
        <div>
            <p> Main App Here</p>
            <button>Add task</button>
            <Task/>
        </div>
    )
}
