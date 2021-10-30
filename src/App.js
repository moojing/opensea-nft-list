import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "@mui/material/Container";
import Navbar from "components/Navbar";
import AssetsList from "components/AssetsList";
import AssetDetail from "components/AssetDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Router>
          <Switch>
            <Route exact path="/">
              <AssetsList />
            </Route>
            <Route path="/detail/:tokenId">
              <AssetDetail />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
