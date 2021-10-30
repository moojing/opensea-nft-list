import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Navbar from "components/Navbar";
import Container from "@mui/material/Container";

import useScrollBottom from "hooks/useScrollBottom";
import { apiFetchAssets } from "apis";
function AssetsList() {
  const history = useHistory();
  const [noMoreAssets, setNoMoreAssets] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [assetsList, setAssetsList] = useState([]);
  useEffect(() => {
    apiFetchAssets({ offset: currentPage, limit: 2 }).then(({ assets }) => {
      if (!assets.length) setNoMoreAssets(true);

      setAssetsList((prev) => [...prev, ...assets]);
    });
  }, [currentPage]);

  const onClickCard = (contractAddress, tokenId) => () => {
    history.push(`/detail/${contractAddress}/${tokenId}`);
  };

  const onScrollBottom = useCallback(() => {
    if (noMoreAssets) return;
    setCurrentPage((prev) => prev + 1);
  }, [noMoreAssets]);

  useScrollBottom(onScrollBottom);

  const renderAssetCard = ({
    id,
    image_url,
    name,
    asset_contract,
    token_id,
  }) => {
    const contractAddress = asset_contract.address;
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
        <Card
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
