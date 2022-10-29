import React, { useEffect, useState } from "react";
import { Box, Typography, Container, Button } from "@mui/material";

const BirthdayRem = () => {
  const birthDayPers = [
    {
      id:1,
      name: "Bertie Yates",
      age: "29 years",
      imgUrl:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    },
    {
      id:2,
      name: "Hester Hogan",
      age: "32 years",
      imgUrl:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
    },
    {
      id:3,
      name: "Larry Little",
      age: "36  years",
      imgUrl:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    },
    {
      id:4,
      name: "Sean Walsh",
      age: "34  years",
      imgUrl:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    },
    {
      id:5,
      name: "Lola Gardner",
      age: "29 years",
      imgUrl:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    },
  ];
  const [birthDays, setBirthDays] = useState(birthDayPers);
  const clearAll = () => {
    setBirthDays([]);
  };

  const content = birthDays.map((per) => (
    <div  key={birthDays.id}>
    <Container
   
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: "25px",
      }}
    >
      <img
        style={{
          objectFit: "cover",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
        }}
        src={per.imgUrl}
      />
      <Container>
        <Typography fontWeight={600}>{per.name}</Typography>
        <Typography>{per.age}</Typography>
      </Container>
    </Container></div>
  ));
console.log('hello')
  return (
    <Box
      sx={{
        p: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        sx={{
          width: "450px",
          backgroundColor: "white",
          p: "25px",
        }}
      >
        <Container>
          <Typography variant="h4" sx={{ mb: "30px" }}>
            {birthDays.length} birthdays today
          </Typography>
        </Container>
        <div>{content}</div>

        {/* <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              objectFit: "cover",
              width: "75px",
              height: "75px",
              borderRadius: "50%",
            }}
            src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
          />
          <Container>
            <Typography fontWeight={600}>Bertie Yates</Typography>
            <Typography>29 years</Typography>
          </Container>
        </Container> */}
        <Container>
          <Button
            variant="contained"
            color="error"
            sx={{ width: "100%" }}
            onClick={clearAll}
          >
            Clear All
          </Button>
        </Container>
      </Container>
    </Box>
  );
};

export default BirthdayRem;
