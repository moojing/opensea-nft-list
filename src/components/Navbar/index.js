import * as React from "react";
import { string, bool } from "prop-types";
import { useHistory } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";

export default function Navbar({ showBackIcon, title }) {
  const history = useHistory();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {showBackIcon && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
              onClick={() => history.goBack()}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title || "NFT List Demo"}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

Navbar.propTypes = {
  title: string,
  showBackIcon: bool,
};

Navbar.defaultProps = {
  title: "",
  showBackIcon: false,
};
