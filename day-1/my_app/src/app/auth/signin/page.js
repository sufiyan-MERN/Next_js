import "./signin.css";

export default function Signin() {
  return (
    <div className="signin-container">
      <div className="signin-card">
        <h1>Signin</h1>
        <label>
          {" "}
          email:
          <input
            type="email"
            placeholder="enter your email"
            className="email"
          />
        </label>
        <label>
          {" "}
          Password:
          <input
            type="password"
            placeholder="enter your password"
            className="password  "
          />
        </label>{" "}
        <br></br>
        <button>submit</button>
      </div>
    </div>
  );
}
