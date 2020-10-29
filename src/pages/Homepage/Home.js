import React from "react";
import { InfoSection } from "../../components/navbar";
import { homeObjOne, homeObjTwo, homeObjTree, homeObjFour } from "./Data";
const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjTree} />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
