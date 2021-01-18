import { Button, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { isLogin } from "./Utils";
const Home = (props) => {
  const islogin = isLogin();
  const logout = () => {
    localStorage.removeItem("username");
    props.history.push("/LoginForm");
  };
  return (
    <div>
      <Typography>Welcome to the Home</Typography>
      {islogin ? (
        <div>
          <Typography>{localStorage.getItem("username")}</Typography>
          <Button type="submit" onClick={logout}>
            logout
          </Button>
        </div>
      ) : (
        <Link to="/LoginForm">Login</Link>
      )}
    </div>
  );
};
export default Home;
