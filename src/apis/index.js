import axios from "axios";

const BASE_URL = "https://api.opensea.io";
const WALLET_ADDRESS = "0x960DE9907A2e2f5363646d48D7FB675Cd2892e91";

export const apiFetchAssets = ({ offset, limit }) =>
  axios({
    method: "get",
    url: `${BASE_URL}/api/v1/assets`,
    params: {
      format: "json",
      owner: WALLET_ADDRESS,
      offset,
      limit,
    },
  });

export const apiFetchAssetDetail = (tokenId) =>
  axios({
    method: "get",
    url: `${BASE_URL}/api/v1/asset/${WALLET_ADDRESS}/${tokenId}`,
  });