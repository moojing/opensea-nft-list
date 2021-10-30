import { useEffect, useState } from "react";
const DEFAULT_WALLET = "0x960de9907a2e2f5363646d48d7fb675cd2892e91";
export default function useWalletAddress() {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          setWalletAddress(result[0]);
        })
        .catch(() => setWalletAddress(DEFAULT_WALLET));
    } else {
      setWalletAddress(DEFAULT_WALLET);
    }
  }, []);

  return walletAddress;
}
