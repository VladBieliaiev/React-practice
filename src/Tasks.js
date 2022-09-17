import { useState } from "react";

export function Tasks(props) {
   const { name, id, delleteTask, complete, done } = props

   return (
      <div className="todo__item" key={id}>
         <h1 style={{ color: complete && "green" }}>{name}</h1>
         <button onClick={() => done(id)}>Complete</button>
         <button onClick={() => delleteTask(id)}>dell</button>
      </div >
   );
}
