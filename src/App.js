import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import ContactUs from './components/ContactUs';
import News from './components/News';
import AboutUs from './components/AboutUs';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar title="TEXTOPEDIA" aboutText="Contact Us" aboutText2="News" aboutText3='About Us' />

        <div className="container my-3">
          <Switch>
            {/* /users --> Component 1
        /users/home --> Component 2 */}
            <Route exact path="/contactus">
              <ContactUs />
            </Route>

            <Route exact path="/news">
              <News />
            </Route>

            <Route exact path="/aboutus">
              <AboutUs />
            </Route>

            <Route exact path="/">
              <TextForm heading="Enter the text to analyze below" />
            </Route>

          </Switch>
        </div>
        
      </Router>
    </>
  );
}

export default App;