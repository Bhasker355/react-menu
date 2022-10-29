import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

const Questions = ({ id, title, info }) => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    setShow(!show);
    // e.target.style.display = "none";
  };
  return (
    <Container
      sx={{
        width: { md: "85%", sm: "85%", xs: "85%" },
        border: "1px solid #eae6eb",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        m: "50px",
        mt: { md: "50px", sm: "0px", xs: "0px" },
        ml: { md: "20px", sm: "20px", xs: "20px" },
      }}
    >
      <Container
        sx={{
          m: "10px 0px",
          p: "0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            letterSpacing: "1px",
            fontWeight: "600",
          }}
        >
          {title}
        </Typography>
        <Typography
          onClick={handleClick}
          key={id}
          p="0px"
          m="0px"
          sx={{
            fontWeight: "600",
            fontSize: "1.25rem",
            backgroundColor: "gray",
            p: "0px 8px 0px 8px",
            borderRadius: "50%",
            ml: "5px",
            cursor: "pointer",
          }}
        >
          {show ? "-" : "+"}
        </Typography>
      </Container>

      {show && (
        <AccordionDetails>
          <Typography>{info}</Typography>
        </AccordionDetails>
      )}
    </Container>
  );
};

export default Questions;
