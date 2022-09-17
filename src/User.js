import { useState } from "react";

export function Job() {
   const [task, setTask] = useState([])
   const [taskValue, setTaskValue] = useState('');




   const addTask = () => {
      setTask([
         ...task,
         taskValue
      ])
   }

   const delleteTask = (taskItem) => {
      setTask(task.filter((index) => index !== taskItem))
   }

   console.log(task);
   return (
      <div className="todo">
         <div className="add">
            <input onChange={(e) => setTaskValue(e.target.value)} />
            <button onClick={addTask}> Add Task </button>
         </div>
         <div >
            {task.map((i, index) => <div ><h1>{i}</h1><button onClick={() => delleteTask(index)}>dell</button></div>)}
         </div>
      </div >
   );
}
