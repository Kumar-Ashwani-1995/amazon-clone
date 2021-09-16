import './App.css';
import Header from "./Header"
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { useEffect } from 'react';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import OrderPlaced from './OrderPlaced';
import { FooterContainer } from './footer'


function App() {
  const [{}, dispatch] = useStateValue();

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
          <Route path="/payment">
            <Header></Header>
            <Payment></Payment>
          </Route>
          <Route path="/placedOrderPage">
            <Header></Header>
            <OrderPlaced></OrderPlaced>
            <FooterContainer></FooterContainer>
          </Route>
          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
            <FooterContainer></FooterContainer>
          </Route>
          <Route path="/">
            <Header></Header>
            <Home></Home>
            <FooterContainer></FooterContainer>
          </Route>
          
        </Switch>

      </div>
    </Router>
  );
}

export default App;
