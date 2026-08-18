export default async function Dashboard(){
    const response = await fetch("http://localhost:3000/api/v1/users")
    const data= await response.json()
    console.log(data.data[0]);
    
    return <div>
        <h1>DASHBOARD</h1>
        <h1>current users of your application: </h1>
        <UserComponenet value={details}/>
    </div>
}

function UserComponenet({details}){
    return <div>
        <h1>{details.username}</h1>
        <h1> {details.email} </h1>
    </div>
}