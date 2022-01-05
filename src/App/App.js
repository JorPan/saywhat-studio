import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../Containers/Header/Header";
import Footer from "../Containers/Footer/Footer";
// import Home from "../Pages/Home/Home";
import HomeScreen from "../Pages/Home/HomeScreen";
import Music from "../Pages/Music/Music";
import Media from "../Pages/Media/Media";
import Merch from "../Pages/Merch/Merch";
import Studio from "../Pages/Studio/Studio";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/music" component={Music} />
        <Route path="/media" component={Media} />
        <Route path="/merch" component={Merch} />
        <Route path="/tools" component={Studio} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
