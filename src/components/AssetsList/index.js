import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { apiFetchAssets } from "apis";
// import styles from "./AssetsList.scss";
function AssetsList() {
  const [assetsList, setAssetsList] = useState([]);
  useEffect(() => {
    apiFetchAssets({ offset: 0, limit: 2 }).then(({ assets }) => {
      console.log(assets);
      setAssetsList(assets);
    });
  }, []);

  const renderAssetCard = ({ id, image_url, name }) => {
    return (
      <Card sx={{ maxWidth: 320 }} key={id}>
        <CardMedia component="img" height="200" image={image_url} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  return <div>{assetsList.map(renderAssetCard)}</div>;
}
AssetsList.propTypes = {};
export default AssetsList;
