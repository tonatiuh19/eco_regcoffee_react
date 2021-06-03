import React from "react";
import { FaHeart } from "react-icons/fa";
import Creativity from "../../resources/images/creativity.png";

const SectionMadeWithLove = () => {
  return (
    <>
      <div className="bg-light py-5">
        <div className="container py-5">
          <div className="row text-center">
            <div className="col-sm">
              <h2 className="fw-bolder">De creadores para creadores</h2>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-sm">
              <h2>
                Hecho con <FaHeart className="text-danger" /> para México y
                Latinoamerica.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <img className="imgFullWidth" src={Creativity}></img>
    </>
  );
};

export default SectionMadeWithLove;
