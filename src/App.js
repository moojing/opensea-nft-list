import "./App.css";
import Container from "@mui/material/Container";
import Navbar from "components/Navbar";
import AssetsList from "components/AssetsList";
import AssetDetail from "components/AssetDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <AssetsList />
        <AssetDetail />
      </Container>
    </div>
  );
}

export default App;
