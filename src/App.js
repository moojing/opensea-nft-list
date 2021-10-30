import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AssetsList from "components/AssetsList";
import AssetDetail from "components/AssetDetail";
import NotFound from "components/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <AssetsList />
          </Route>
          <Route path="/detail/:contractAddress/:tokenId">
            <AssetDetail />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
