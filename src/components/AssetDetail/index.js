import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiFetchAssetDetail } from "apis";
import Navbar from "components/Navbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShowMoreText from "react-show-more-text";
import styles from "./AssetDetail.module.scss";

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
      <Container
        maxWidth="sm"
        sx={{
          my: 4,
        }}
      >
        <Card sx={{ boxShadow: 0 }}>
          <CardMedia
            component="img"
            image={assetDetail.imageUrl}
            alt={assetDetail.name}
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
              {assetDetail.name}
            </Typography>

            <ShowMoreText
              lines={3}
              more={
                <Button variant="outlined" size="small">
                  Show More
                </Button>
              }
              less={
                <Button variant="outlined" size="small">
                  Show Less
                </Button>
              }
              anchorClass={styles.anchor}
              expanded={false}
              truncatedEndingComponent={"... "}
            >
              {assetDetail.description}
            </ShowMoreText>
          </CardContent>
          <Button variant="contained" href={assetDetail.permalink} fullWidth>
            Permalink
          </Button>
        </Card>
      </Container>
    </>
  );
}
AssetDetail.propTypes = {};
export default AssetDetail;
