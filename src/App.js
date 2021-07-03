import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import ForSale from "./Pages/ForSale";
import ToRent from "./Pages/ToRent";
import SellProperty from "./Pages/SellProperty";
import Contact from "./Pages/Contact";

function App() {
  let location = useLocation();
  return (
    <Layout>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route path="/forSale" component={ForSale} />
        <Route path="/toRent" component={ToRent} />
        <Route path="/sellProperty" component={SellProperty} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Layout>
  );
}

export default App;
