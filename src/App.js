import "./App.css";
import Navbar from "./components/Header/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ForSale from "./Pages/ForSale";
import ToRent from "./Pages/ToRent";
import SellProperty from "./Pages/SellProperty";
import Contact from "./Pages/Contact";

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
