import React from "react";
import linkFacebook from "../../resources/images/link_facebook.png";
import linkInstagram from "../../resources/images/link_instagram.png";
import linkYoutube from "../../resources/images/link_youtube.png";
import Carousel, {
  slidesToShowPlugin,
  slidesToScrollPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  FaFacebookSquare,
  FaGithub,
  FaYoutube,
  FaDailymotion,
  FaGoogle,
  FaPodcast,
  FaBitbucket,
} from "react-icons/fa";
import { GrInstagram, GrSpotify } from "react-icons/gr";
import { IoLogoTiktok } from "react-icons/io5";
import { BiRightArrowCircle } from "react-icons/bi";

const SectionDescriptionTwo = () => {
  return (
    <div className="bg-light py-5">
      <div className="container py-5">
        <div className="row ">
          <div className="flex-container">
            <div className="flex-items col-sm-7">
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <img
                      src={linkFacebook}
                      className="img-thumbnail border border-dark"
                    />
                  </div>
                  <div className="col-sm">
                    <img
                      src={linkInstagram}
                      className="img-thumbnail border border-dark"
                    />
                  </div>
                  <div className="col-sm">
                    <img
                      src={linkYoutube}
                      className="img-thumbnail border border-dark"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-items col-sm-5">
              <h2 className="fw-bolder pt-3">
                Incluye tu link en todas partes
              </h2>
              <h5 className="fs-5 py-3">
                Dale la oportunidad a tu audiencia de agradecerte en todos
                lados, en todos los sitios donde tienes presencia.
              </h5>
              <div className="list-group bg-light">
                <h5 className="fw-bolder">
                  <BiRightArrowCircle /> Simple
                </h5>
                <h5 className="fw-bolder">
                  <BiRightArrowCircle /> Rapido
                </h5>
                <h5 className="fw-bolder">
                  <BiRightArrowCircle /> Ergonomico UI/UX
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row text-center">
          <div className="col-sm">
            <h2 className="fw-bolder py-3">Donde mas lo necesites</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4 text-secondary">
            <Carousel
              plugins={[
                "centered",
                "infinite",
                {
                  resolve: autoplayPlugin,
                  options: {
                    interval: 2000,
                  },
                },
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 3,
                  },
                },
                {
                  resolve: slidesToScrollPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ]}
              animationSpeed={1000}
            >
              <FaFacebookSquare fontSize="3.5em" />
              <GrInstagram fontSize="3.5em" />
              <FaGithub fontSize="3.5em" />
              <FaYoutube fontSize="3.5em" />
              <FaDailymotion fontSize="3.5em" />
              <FaGoogle fontSize="3.5em" />
              <FaPodcast fontSize="3.5em" />
              <GrSpotify fontSize="3.5em" />
              <IoLogoTiktok fontSize="3.5em" />
              <FaBitbucket fontSize="3.5em" />
            </Carousel>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionDescriptionTwo;
