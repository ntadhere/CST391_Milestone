import React from "react";
import Carousel from "./Carousel";

const HomePage = ({ blogList }) => {
  return (
      <Carousel blogList={blogList} />
  );
};

export default HomePage;
