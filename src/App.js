import React, {useState} from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/Search";
import SearchPage from "./pages/SearchPage";
import Firstpage from "./pages/Firstpage";
import WebSocketComponent from "./components/WebSocketComponent/WebSocketComponent";

function App() {
  const [change, setChange]=useState(false)
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            {/* {!(change) ?
              <WebSocketComponent change={change} setChange={setChange} />
              :
              <Firstpage />
            } */}
            <div style={{display:"flex"}}>
              <WebSocketComponent change={change} setChange={setChange} />
              {change ?
                <Home />
              :
                ""
              }

            </div>
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// https://developers.google.com/custom-search/v1/using_rest
// https://cse.google.com/cse/create/new
