import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiFetchAssetDetail } from "apis";
import Navbar from "components/Navbar";
import Container from "@mui/material/Container";

// import styles from "./AssetDetail.module.scss";
function AssetDetail() {
  const { contractAddress, tokenId } = useParams();
  const [assetDetail, setAssetDetail] = useState({
    imageUrl: "",
    name: "",
    description: "",
    permalink: "",
    collectionName: "",
  });

  useEffect(() => {
    apiFetchAssetDetail(contractAddress, tokenId).then((data) => {
      console.log(data);
      const { image_url, name, description, permalink, collection } = data;
      setAssetDetail({
        imageUrl: image_url,
        name,
        description,
        permalink,
        collectionName: collection.name,
      });
    });
  }, [contractAddress, tokenId]);

  return (
    <>
      <Navbar showBackIcon title={assetDetail.collectionName} />
      <Container maxWidth="sm">Detail</Container>
    </>
  );
}
AssetDetail.propTypes = {};
export default AssetDetail;
