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
            <div className="body">
            <Header></Header>
            <Payment></Payment>
            </div>
            <FooterContainer></FooterContainer>
          </Route>
          <Route path="/placedOrderPage">
            <div className="body">
            <Header></Header>
            <OrderPlaced></OrderPlaced>
            </div>
            <FooterContainer></FooterContainer>
          </Route>
          <Route path="/checkout">
            <div className="body">
            <Header></Header>
            <Checkout></Checkout>
            </div>
            <FooterContainer></FooterContainer>
          </Route>
          <Route path="/">
            <div className="body">
            <Header></Header>
            <Home></Home>
            </div>
            <FooterContainer></FooterContainer>

          </Route>
          
        </Switch>

      </div>
    </Router>
  );
}

export default App;
