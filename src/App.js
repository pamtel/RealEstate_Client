import "./App.css";
import Navbar from "./components/Header/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import ForSale from "./components/Pages/ForSale";
import ToRent from "./components/Pages/ToRent";
import SellProperty from "./components/Pages/SellProperty";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/forSale" component={ForSale} />
            <Route exact path="/toRent" component={ToRent} />
            <Route exact path="/sellProperty" component={SellProperty} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
