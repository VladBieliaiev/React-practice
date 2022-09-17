import { useState } from "react";
import { Tasks } from "./Tasks";

export function Todo() {
   const [task, setTask] = useState([])
   const [taskValue, setTaskValue] = useState('');




   const addTask = () => {
      setTask([
         ...task,
         {
            id: task.length + 1,
            name: taskValue,
            complete: false,
         }
      ])
   }

   const delleteTask = (id) => {
      setTask(task.filter((i) => i.id !== id))
   }

   const done = (id) => {
      setTask(task.map(task => {
         if (task.id === id) {
            return { ...task, complete: true }
         }
         else {
            return task
         }
      }))
   }

   console.log(task);
   return (
      <div className="todo">
         <div className="todo__add">
            <input onChange={(e) => setTaskValue(e.target.value)} />
            <button onClick={addTask}> Add Task </button>
         </div>
         <div className="todo__list">
            {task.map(i => {
               return <Tasks
                  name={i.name}
                  id={i.id}
                  complete={i.complete}
                  delleteTask={delleteTask}
                  done={done} />
            })}
         </div>
      </div >
   );
}
