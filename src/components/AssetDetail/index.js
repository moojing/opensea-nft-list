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
        <Card>
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

            <p>
              {assetDetail.description} Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Officia voluptatum accusantium beatae quibusdam,
              recusandae iste sint a illo exercitationem repudiandae deleniti
              incidunt minima expedita quia iure minus sequi? Optio, non. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Officia
              voluptatum accusantium beatae quibusdam, recusandae iste sint a
              illo exercitationem repudiandae deleniti incidunt minima expedita
              quia iure minus sequi? Optio, non. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Officia voluptatum accusantium
              beatae quibusdam, recusandae iste sint a illo exercitationem
              repudiandae deleniti incidunt minima expedita quia iure minus
              sequi? Optio, non. itationem repudiandae deleniti incidunt minima
              expedita quia iure minus sequi? Optio, non. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Officia voluptatum accusantium
              beatae quibusdam, recusandae iste sint a illo exercitationem
              repudiandae deleniti incidunt minima expedita quia iure minus
              sequi? Optio, non itationem repudiandae deleniti incidunt minima
              expedita quia iure minus sequi? Optio, non. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Officia voluptatum accusantium
              beatae quibusdam, recusandae iste sint a illo exercitationem
              repudiandae deleniti incidunt minima expedita quia iure minus
              sequi? Optio, non
            </p>
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
