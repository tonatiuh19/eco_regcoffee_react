import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="flex-container-s">
            <div className="flex-items-s col-sm">
              <div className="col-sm">
                <h5 className="fs-5">Escribenos:</h5>
              </div>
              <a href="#" className="btn btn-outline-light">
                <FaFacebookF />
              </a>
              <a href="#" className="btn btn-outline-light">
                <FaInstagram />
              </a>
              <a href="#" className="btn btn-outline-light">
                <FiMail />
              </a>
            </div>
            <div className="flex-items-s">
              <div className="row">
                <a className="btn btn-link text-white" href="#">
                  Terminos y condiciones
                </a>
              </div>
              <div className="row">
                <a className="btn btn-link text-white" href="#">
                  Aviso de privacidad
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
