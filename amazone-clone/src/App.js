import './App.css';
import Header from "./Header"
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("---User Logged in---", authUser);
      if (authUser) {
        //looged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        //logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>
          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
