import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Navbar from "components/Navbar";
import Container from "@mui/material/Container";

import { apiFetchAssets } from "apis";
// import styles from "./AssetsList.scss";
function AssetsList() {
  const history = useHistory();
  const [assetsList, setAssetsList] = useState([]);
  useEffect(() => {
    apiFetchAssets({ offset: 0, limit: 6 }).then(({ assets }) => {
      console.log(assets);
      setAssetsList(assets);
    });
  }, []);

  const onClickCard = (contractAddress, tokenId) => () => {
    history.push(`/detail/${contractAddress}/${tokenId}`);
  };

  const renderAssetCard = ({
    id,
    image_url,
    name,
    asset_contract,
    token_id,
  }) => {
    const contractAddress = asset_contract.address;
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
          key={id}
          sx={{ cursor: "pointer" }}
          onClick={onClickCard(contractAddress, token_id)}
        >
          <CardMedia
            component="img"
            height="200"
            image={image_url}
            alt={name}
          />
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{
                minHeight: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      <Navbar />
      <Container
        sx={{
          my: 8,
        }}
      >
        <Grid container columnSpacing={4} rowSpacing={4}>
          {assetsList.map(renderAssetCard)}
        </Grid>
      </Container>
    </>
  );
}
AssetsList.propTypes = {};
export default AssetsList;
