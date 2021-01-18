import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoute from "./Components/PublicRoute";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Components/Dashboard";
import LoginForm from "./Components/LoginForm";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PrivateRoute
            restricted={false}
            component={Dashboard}
            path="/Dashboard"
            exact
          />
          <PublicRoute
            restricted={true}
            component={LoginForm}
            path="/LoginForm"
            exact
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
