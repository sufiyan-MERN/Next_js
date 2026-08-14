"use client"

import { useEffect, useState } from "react";

export default function todos() {
  useEffect(() => {
    fetchTodo();
  }, []);
  const [data, setDatat] = useState(null);
  async function fetchTodo() {
    const response = await fetch("https://dummyjson.com/todos");
    const data = await response.json();
    console.log(data);
    setDatat(data.todos)
  }

  if(data==null){
    return <div>
        loading...
    </div>
  }
  return (
    <div>
      <h1>todo page</h1>
      {data.map((todoObj)=>{
        return <TodoComponent key={todoObj.id}  prop={todoObj} />
      })}
    </div>
  );
}

function TodoComponent({prop}){
    const {userId,id,todo,completed}=prop
    return <div 
     style={{
        backgroundColor: "beige",
        border: "1px solid black",
        display: "flex",
        justifyContent:"space-between",
        flexWrap: "wrap",
      }}>
         <div>{userId}</div> 
      {/* <div>{id}</div> */}
      <div>{todo}</div>
      <div>{completed}</div>
    </div>
}