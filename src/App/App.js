import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../Containers/Header/Header";
import Home from "../Pages/Home/Home";
import Music from "../Pages/Music/Music";
import Media from "../Pages/Media/Media";
import Merch from "../Pages/Merch/Merch";
import Tools from "../Pages/Tools/Tools";

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
