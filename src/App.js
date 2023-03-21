import './App.css';
import Header from './Header';
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import React, { useEffect } from "react";
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from './Fotter';
import Orders from './Orders';

const promise = loadStripe("pk_test_51MYkNdIy2aWgJDqBeETBYDcMDyNfFMrAqBhZBf0LJytIeJGieALSqPqs1rWNbUdrVPWGwNqRYtItmIVetrpDBKJq00Vgxt53Fy")
function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />

          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Header/>
                <Payment />
              </Elements>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;