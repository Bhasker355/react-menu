import {
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  CardActions,
  CardMedia,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";

const Review = ({ id, imgUrl, name, jobRole, info, surprise, forward, backward }) => {
  return (
    <>
      <Box
        width="800px"
        sx={{
          margin: "50px 0px 50px 0px",
          fontSize: "1.25rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={{ width: "600px" }}>
          <CardContent
            sx={{
              mb: "0px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              image={imgUrl}
              height="150px"
              sx={{
                width: "150px",
                borderRadius: "50%",
                m: "15px 0 20px 0",
              }}
            />
            <Typography
              sx={{ letterSpacing: "2px", mb: "2px", fontWeight: "600" }}
            >
              {name}
            </Typography>
            <Typography
              color="#49a6e9"
              sx={{ mb: "12px", fontSize: "13px", fontWeight: "500" }}
            >
              {jobRole}
            </Typography>
            <Typography color="#617d98">{info}</Typography>
          </CardContent>
          <CardActions
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mb: "15px",
            }}
          >
            <CardActions sx={{ mb: "8px" }}>
              <ArrowBackIosIcon sx={{ color: "#49a6e9", cursor:'pointer' }}  onClick={backward}/>
              <ArrowForwardIosIcon sx={{ color: "#49a6e9",cursor:'pointer' }} onClick={forward} />
            </CardActions>
            <Button
              onClick={surprise}
              size="small"
              sx={{
                textTransform: "capitalize",
                background: "#ebf7ff",
                color: "#49a6e9",
              }}
            >
              Surprise Me
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default Review;
