import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
const LoginForm = (props) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const handleUserName = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    if (
      localStorage.getItem("username") === "vraj1910" &&
      localStorage.getItem("password") === "123"
    ) {
      props.history.push("/Dashboard");
    } else {
      alert("Sorry");
    }
  };
  useEffect(() => {
    window.localStorage.setItem("username", username);
    window.localStorage.setItem("password", password);
  });
  return (
    <div>
      <h1>Login Page</h1>
      <TextField
        variant="outlined"
        name={username}
        color="primary"
        label="UserName"
        onChange={handleUserName}
      />
      <TextField
        variant="outlined"
        name={password}
        color="primary"
        label="Password"
        onChange={handlePassword}
      />
      <Button
        type="submit"
        variant="outlined"
        color="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};
export default LoginForm;
