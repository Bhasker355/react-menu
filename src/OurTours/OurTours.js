import React, { useEffect, useState } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";
import Refresh from "./Refresh";
// import ShowMoreText from "react-show-more-text";
// import  ExpandLess  from "@material-ui/icons/ExpandLess";
// import ExpandMore from "@material-ui/icons/ExpandMore"

const OurTours = () => {
  const [loading, setloading] = useState(true);
  const [tours, setTours] = useState([]);
  const [newTour, setNewtour] = useState([]);
  const url = "https://course-api.com/react-tours-project";

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  // const refresh = () => {
  //   fetchData();
  // };

  const fetchData = async () => {
    setloading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setloading(false);
      setTours(tours);
    } catch (error) {
      setloading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : tours.length === 0 ? (
        <Refresh fetchData={fetchData} />
      ) : (
        <Tours tours={tours} removeTour={removeTour} />
      )}
    </>
  );
};

export default OurTours;
