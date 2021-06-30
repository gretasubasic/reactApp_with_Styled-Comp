import React from 'react';
import GlobalStyles from "./GlobalStyles"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Navbar, InfoSection, BenefitSection, PricingPage} from "./components";
import Home from "./pages/HomePage/Home";
import About from "./pages/About/About";
import SignUp from "./pages/SignUp/SignUp"
import  Pricing from "./pages/Pricing/Pricing"


function App() {
  return (
    <Router>
      <GlobalStyles />
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/pricing" exact component={Pricing} />
      <Route path="/sign-up" exact component={SignUp} />



    </Switch>
    
    </Router>
   
    
  );
}

export default App;
