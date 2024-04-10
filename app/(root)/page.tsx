import Cart from "@/components/(root)/Cart";
import HomeContent from "@/components/(root)/HomeContent";
import PopularCategory from "@/components/(root)/PopularCategory";
import React from "react";

const Home = () => {
  console.log("server");

  return (
    <div>
      <HomeContent />
      <PopularCategory />

    </div>
  );
};

export default Home;
