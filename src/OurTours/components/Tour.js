import React, { useState } from "react";

import {
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

const Tour = ({ tour, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <Card sx={{ maxWidth: 625, mb: "35px" }}>
      <CardMedia
        component="img"
        height="325px"
        alt="green iguana"
        image={tour.image}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "15px 0px 20px 0px",
          }}
        >
          <Typography fontWeight={600} letterSpacing="1px">
            {tour.name}
          </Typography>
          <Typography
            letterSpacing="1px"
            fontWeight={600}
            sx={{
              p: "5px 5px",
              color: "#49a6e9",
              backgroundColor: "#ebf7ff",
            }}
          >
            $1,995
          </Typography>
        </section>
        <Typography>
          {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
          <Button
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "Read More" : "Show Less"}
          </Button>
        </Typography>
        {/* <Typography
              variant="body2"
              color="text.secondary"
              letterSpacing="1px"
            >
              
            </Typography> */}
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => {
            removeTour(tour.id);
          }}
          variant="outlined"
          color="error"
          sx={{ mb: "20px" }}
        >
          Not Interested
        </Button>
      </CardActions>
    </Card>
  );
};

export default Tour;
