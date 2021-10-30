import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function NotFound() {
  return (
    <Paper sx={{ p: 4 }}>
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
        Page NotFound
      </Typography>
    </Paper>
  );
}

export default NotFound;
