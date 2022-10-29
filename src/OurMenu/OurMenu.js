import { Link, Typography, BrowserRouter } from "@mui/material";
import { margin } from "@mui/system";
import ItemCard from "./components/card";
import React, { useEffect, useState } from "react";
import menu from "./data";
import "./OurMenu.css";

const OurMenu = () => {
  const flexDisCol = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const flexDisRow = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  const linkSty = {
    color: "white",
    borderRadius: "5px",
    fontSize: "1.10rem",
    padding: "5px 12px",
    margin: "5px 10px",
    cursor: "pointer",
    backgroundColor: "#c59d5f",
  };
  const linkStyHover = {
    backgroundColor: "#c59d5f",
    color: "#c59d5f",
    borderRadius: "2px",
  };

  const allCatgories = ["all", ...new Set(menu.map((item) => item.category))];

  console.log(allCatgories);
  const [menuItems, setMenuItems] = useState(menu);
  const [categoryies, setCategoryies] = useState(allCatgories);

  // const handleClickBreak = () => {
  //   handleClick("breakfast");
  //   console.log('breakfast')
  // };

  // const handleClickLunch = () => {
  //   handleClick("lunch");
  //   console.log('lunch')
  // };
  // const handleClickShake = () => {
  //   handleClick("shakes");
  //   console.log('shakes')
  // };

  const handleClick = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
    // setCategory(category);
  };

  // useEffect(() => {
  //   handleClick();
  // }, [category]);

  return (
    <div>
      <div style={{ ...flexDisCol, marginTop: "80px" }}>
        <Typography fontSize="2.5rem" fontWeight={600}>
          Our Menu
        </Typography>
        <Typography
          sx={{ width: "5rem", border: "2px solid #c59d5f" }}
        ></Typography>
      </div>
      <div style={{ ...flexDisRow, margin: "25px 0px" }}>
        {categoryies.map((cat, i) => (
          <Link
            key={i}
            className="linkHov"
            underline="none"
            sx={{ ...linkSty }}
            onClick={() => {
              handleClick(cat);
            }}
          >
            {cat}
          </Link>
        ))}
        {/* <Link
          className="linkHov"
          underline="none"
          sx={{ ...linkSty }}
          onClick={() => {
            setMenuItems(menu);
          }}
        >
          All
        </Link>

        <Link
          className="linkHov"
          underline="none"
          sx={{ ...linkSty }}
          // onClick={handleClickBreak}
          onClick={() => {
            handleClick("breakfast");
          }}
        >
          Breakfast
        </Link>

        <Link
          className="linkHov"
          underline="none"
          sx={{ ...linkSty }}
          // onClick={handleClickLunch}
          onClick={() => {
            handleClick("lunch");
          }}
        >
          Lunch
        </Link>

        <Link
          className="linkHov"
          underline="none"
          sx={{ ...linkSty }}
          // onClick={handleClickShake}
          onClick={() => {
            handleClick("shakes");
          }}
        >
          Shakes
        </Link> */}
      </div>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {menuItems.map((menuItem) => (
          <ItemCard key={menuItem.id} {...menuItem} />
        ))}
      </div>
    </div>
  );
};

export default OurMenu;
