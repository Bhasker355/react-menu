import React, { useState } from "react";
import Tour from "./Tour";
import { Typography, Box } from "@mui/material";
import { Container } from "@mui/system";

const Tours = ({ tours, removeTour }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth="fluid"
        sx={{
          mb: "50px",
          pt: "75px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" fontWeight={700}>
          Our Tours
        </Typography>
        <Typography
          fontWeight={600}
          sx={{
            mt: "8px",
            borderBottom: "4px solid #49a6e9",
            width: "80px",
          }}
        ></Typography>
      </Container>

      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </Box>
  );
};

export default Tours;
