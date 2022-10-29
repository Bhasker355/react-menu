import React, { useState } from "react";
import Review from "./components/Review";
import data from "./components/data";

const Ourreviews = () => {
  const [index, setIndex] = useState(0);

  const forward = () => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const backward = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const surprise = () => {
    let ran = Math.floor(Math.random() * data.length);
    console.log(ran);

    if (ran === index) {
      ran = Math.floor(Math.random() * data.length);
    }
    setIndex(ran);
  };
  return (
    <>
      <div
        style={{
          margin: "50px 0px 50px 0px",
          fontSize: "1.25rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginBottom: "0px" }}>Our Reviews</h1>
        <div style={{ width: "80px", borderBottom: "4px solid #49a6e9" }}></div>
        <Review
          id={data[index].id}
          imgUrl={data[index].imgUrl}
          name={data[index].name}
          jobRole={data[index].jobRole}
          info={data[index].info}
          surprise={surprise}
          forward={forward}
          backward={backward}
        />
      </div>
    </>
  );
};

export default Ourreviews;
