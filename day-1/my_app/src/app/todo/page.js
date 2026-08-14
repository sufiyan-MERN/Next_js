export default async function Todo() {
    const response= await fetch("https://dummyjson.com/todos")
    const data= await response.json()
    // console.log(data);


  return (
    <div>
      <h1>todo page</h1>
       <div style={{
        "display":"flex",
        "justifyContent":"space-between"
       }}>
        <h3>UserID </h3>
       <h3 style={{
        "marginRight":"720px"
       }}> Todos</h3>
       </div>
      {data.todos.map((todoObj)=>{
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
      <div> {userId}
        </div> 
      {/* <div>{id}</div> */}
      <div> {todo}</div>
      <div>{completed}</div>
      
    </div>
}