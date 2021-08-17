import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Switch>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/music" component={Music} />
        <Route path="/media" component={Media} />
        <Route path="/merch" component={Merch} />
        <Route path="/tools" component={Tools} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
