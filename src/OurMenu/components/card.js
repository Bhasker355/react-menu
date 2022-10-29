import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Box,
  IconButton,
} from "@mui/material";

const ItemCard = ({ id, title, category, price, img, desc }) => {
  return (
    <Card
      sx={{
        display: "flex",
        width: "575px",
        backgroundColor: "#f1f5f8",
        mb: "50px",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "100%", height: 150, border: "2px solid #c59d5f" }}
        image={img}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mb: "25px",
              borderBottom: "0.5px solid #617d98",
            }}
          >
            <Typography component="div" fontWeight={600} mb="5px">
              {title}
            </Typography>
            <Typography component="div" fontWeight={600} color="#c59d5f">
              {`$${price}`}
            </Typography>
          </Box>
          <Typography component="div" color="#617d98">
            {desc}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {/* {theme.direction === "rtl" ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )} */}
          </IconButton>
          <IconButton aria-label="play/pause">
            {/* <PlayArrowIcon sx={{ height: 38, width: 38 }} /> */}
          </IconButton>
          <IconButton aria-label="next">
            {/* {theme.direction === "rtl" ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )} */}
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default ItemCard;
