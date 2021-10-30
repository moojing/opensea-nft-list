import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "components/Navbar";
import Container from "@mui/material/Container";

// import styles from "./AssetDetail.module.scss";
function AssetDetail() {
  const { contractAddress, tokenId } = useParams();
  console.log("tokenId :", tokenId);
  console.log("contractAddress :", contractAddress);
  return (
    <>
      <Navbar />
      <Container
        sx={{
          my: 8,
        }}
      >
        AssetDetail
      </Container>
    </>
  );
}
AssetDetail.propTypes = {};
export default AssetDetail;
