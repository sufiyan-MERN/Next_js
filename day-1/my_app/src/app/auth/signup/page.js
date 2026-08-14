export default function Signup(){
    return <div>
        <h1>Signup</h1>
        <label> Username:
        <input type="text" placeholder="enter your username" className="username"/>
        </label>
          <label> Email:
        <input  type="email" placeholder="enter your email" className="email"/>
        </label>
        <label> Password:
        <input type="password" placeholder="enter your password" className="password"/>
        </label> <br/>
        <button>submit</button>
    </div>
}