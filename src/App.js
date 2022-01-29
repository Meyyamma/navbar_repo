import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/indexj";
import About from "./components/Pages/about";
import Service from "./components/Pages/services";
import ContactUs from "./components/Pages/contact-us";
import SignUp from "./components/Pages/sign-up";
import SignIn from "./components/Pages/sign-in";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About}/>
        <Route path="/services" component={Service}/>
        <Route path="/contact-us" component={ContactUs}/>
        <Route path="/sign-up" component={SignUp}/>
        <Route path="/sign-in" component={SignIn}/>
      </Switch>
    </Router>
  );
}

export default App;
