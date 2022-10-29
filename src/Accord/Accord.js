import {
  Box,
  Typography,
  Container,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import React, { useState } from "react";
import questions from "./data";
import Questions from "./Questions";

export const Accord = () => {
  let flexDi = {
    display: "flex",

    backgroundColor: "white",
    justifyContent: "center",
    flexDirection: { md: "row", sm: "column", xs: "column" },
    width: { md: "875px", sm: "85%", xs: "450px" },
  };

  // const [id, title, info] = useState(data);
  return (
    <Box m="100px auto 0px auto" sx={flexDi}>
      <Typography
        sx={{
          fontSize: { md: "1.75rem", xs: "1.25rem" },
          fontWeight: "600",
          width: { md: "300px" },
          m: "25px",
          ml: { md: "30px", sm: "30px", xs: "20px" },
        }}
      >
        Questions And Answers About Login
      </Typography>

      <div>
        {questions.map((data) => (
          <Questions id={data.id} title={data.title} info={data.info} />
        ))}
      </div>
    </Box>
  );
};
