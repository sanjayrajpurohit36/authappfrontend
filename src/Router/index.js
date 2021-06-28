import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "components/Navbar";
import Contact from "components/Contact";
import Home from "components/Home";
import Login from "components/Login";
import Signup from "components/Signup";
import About from "components/About";

const Routes = () => {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Router>
    </>
  );
};

export default Routes;
