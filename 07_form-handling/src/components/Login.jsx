import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const userForm = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setUser({
      username: "",
      password: "",
    });
    console.log(user);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={userForm}
          autoComplete="off"
        />

        <label>password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={userForm}
          autoComplete="off"
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
