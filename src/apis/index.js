import axios from "axios";

const BASE_URL = "https://api.opensea.io";

export const apiFetchAssets = ({ offset = 0, limit = 20, walletAddress }) =>
  axios({
    method: "get",
    url: `${BASE_URL}/api/v1/assets`,
    params: {
      format: "json",
      owner: walletAddress,
      offset,
      limit,
    },
  }).then((res) => res.data);

export const apiFetchAssetDetail = (contractAddress, tokenId) =>
  axios({
    method: "get",
    url: `${BASE_URL}/api/v1/asset/${contractAddress}/${tokenId}`,
  }).then((res) => res.data);
