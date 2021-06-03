import React from "react";
import SectionDescription from "./sectionDescription";
import SectionDescriptionGallery from "./sectionDescriptionGallery";
import SectionDescriptionTwo from "./sectionDescriptionTwo";
import SectionMadeWithLove from "./sectionMadeWithLove";
import SectionMain from "./sectionMain";
import { useHistory, useParams } from "react-router-dom";
import FanPage from "../FanPage/FanPage";
import { Helmet } from "react-helmet";

const Start = () => {
  const { user }: any = useParams();
  console.log("user: ", user);

  if (user === undefined) {
    return (
      <div>
        <Helmet>
          <title>Regalame un Café</title>
        </Helmet>
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
        <Helmet>
          <title>Regalame un Café | {user}</title>
        </Helmet>
        <FanPage userName={user}></FanPage>
      </div>
    );
  }
};

export default Start;
