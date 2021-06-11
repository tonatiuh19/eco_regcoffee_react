import React, { useEffect, useState } from "react";
import SectionDescription from "./sectionDescription";
import SectionDescriptionGallery from "./sectionDescriptionGallery";
import SectionDescriptionTwo from "./sectionDescriptionTwo";
import SectionMadeWithLove from "./sectionMadeWithLove";
import SectionMain from "./sectionMain";
import { useHistory, useParams } from "react-router-dom";
import FanPage from "../FanPage/FanPage";
import { Helmet } from "react-helmet";
import { userExist } from "../../services/api.functions";
import { isLoggedIn } from "../../resources/utilFunc/ValidationStrings";
import ExtrasPage from "../ExtrasPage/ExtrasPage";
import PostsPage from "../PostsPage/PostsPage";

const Start = () => {
  const { user }: any = useParams();
  const [routeUserValid, setRouteValid] = useState(false);
  const [isLogged, setisLogged] = useState(false);

  useEffect(() => {
    userExist(user).then((x) => {
      if (x === 1) {
        setRouteValid(true);
      }
    });

    if (isLoggedIn()) {
      setisLogged(true);
    }
  }, []);

  if (isLogged) {
    if (user !== undefined) {
      <Helmet>
        <title>Regalame un Café | {user}</title>
      </Helmet>;
    } else {
      <Helmet>
        <title>Regalame un Café</title>
      </Helmet>;
    }
    switch (user) {
      case "extras":
        return (
          <div>
            <ExtrasPage></ExtrasPage>
          </div>
        );
      case "posts":
        return (
          <div>
            <PostsPage></PostsPage>
          </div>
        );
      case undefined:
        console.log("entrando");
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
      default:
        return (
          <div>
            <Helmet>
              <title>Regalame un Café | {user}</title>
            </Helmet>
            <FanPage userName={user}></FanPage>
          </div>
        );
    }
  } else {
    if (routeUserValid) {
      return (
        <div>
          <Helmet>
            <title>Regalame un Café | {user}</title>
          </Helmet>
          ;<FanPage userName={user}></FanPage>
        </div>
      );
    } else {
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
    }
  }
};

export default Start;
