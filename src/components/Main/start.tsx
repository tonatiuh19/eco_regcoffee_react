import React from "react";
import SectionDescription from "./sectionDescription";
import SectionDescriptionGallery from "./sectionDescriptionGallery";
import SectionDescriptionTwo from "./sectionDescriptionTwo";
import SectionMadeWithLove from "./sectionMadeWithLove";
import SectionMain from "./sectionMain";
import { useHistory, useParams } from "react-router-dom";
import FanPage from "../FanPage/FanPage";

const Start = () => {
  const { user }: any = useParams();
  console.log("user: ", user);

  if (user === undefined) {
    return (
      <div>
        <SectionMain></SectionMain>
        <SectionDescription></SectionDescription>
        <SectionDescriptionTwo></SectionDescriptionTwo>
        <SectionDescriptionGallery></SectionDescriptionGallery>
        <SectionMadeWithLove></SectionMadeWithLove>
      </div>
    );
  } else {
    return (
      <div>
        <FanPage userName={user}></FanPage>
      </div>
    );
  }
};

export default Start;
