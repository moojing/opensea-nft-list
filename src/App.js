import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "@mui/material/Container";
import Navbar from "components/Navbar";
import AssetsList from "components/AssetsList";
import AssetDetail from "components/AssetDetail";
import NotFound from "components/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container
        sx={{
          my: 8,
        }}
      >
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
      </Container>
    </div>
  );
}

export default App;
