import React from "react";
import { Button, Box, Typography } from "@mui/material";

const Refresh = ({ fetchData }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          m: "50px 0px",
        }}
      >
        <Typography variant="h4" fontWeight={700}>
          No Tours Left
        </Typography>
        <Button
          onClick={() => {
            fetchData();
          }}
          variant="contained"
          sx={{ m: "25px 0px" }}
        >
          Refresh
        </Button>
      </Box>
    </>
  );
};

export default Refresh;
