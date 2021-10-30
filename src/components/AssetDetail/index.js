import React from "react";
import { useParams } from "react-router-dom";
// import styles from "./AssetDetail.module.scss";
function AssetDetail() {
  const { contractAddress, tokenId } = useParams();
  console.log("tokenId :", tokenId);
  console.log("contractAddress :", contractAddress);
  return <div> AssetDetail </div>;
}
AssetDetail.propTypes = {};
export default AssetDetail;
