import React, { useEffect, useState } from "react";
import { BiRightArrowCircle } from "react-icons/bi";
import { FaGlassCheers } from "react-icons/fa";
import { ImSad2 } from "react-icons/im";
import CreatorImg from "../../resources/images/creator.png";
import { checkUser } from "../../services/api.functions";
import {
  validateMail,
  deleteSpecialChars,
} from "../../resources/utilFunc/ValidationStrings";
import { insertUser } from "../../services/api.functions";
import "./styles/main.css";
import Loading from "../../resources/utilFunc/Loading/Loading";

const SectionMain = () => {
  const [styleInput, setstyleInput] = useState("form-control");
  const [buttonBeginDisabled, setbuttonBeginDisabled] = useState(true);
  const [alertBegin, setalertBegin] = useState(false);
  const [username, setusername] = useState("");

  const [mailSignUp, setmailSignUp] = useState("");
  const [pwdSignUp, setpwdSignUp] = useState("");
  const [validMailSignUp, setvalidMailSignUp] = useState(false);
  const [stringValidationSignUp, setstringValidationSignUp] = useState("");

  const [loading, setloading] = useState(false);

  const checkingUser = (e: any) => {
    setbuttonBeginDisabled(true);
    const uname = e.target.value;
    setusername(uname);
    checkUser(e.target.value)
      .then((x) => {
        if (x !== 0) {
          setstyleInput("form-control is-invalid");
          setbuttonBeginDisabled(true);
          setalertBegin(true);
        } else {
          setstyleInput("form-control is-valid");
          setbuttonBeginDisabled(false);
          setalertBegin(false);
        }
      })
      .finally();
  };

  const signing = () => {
    if (mailSignUp === "" || pwdSignUp === "") {
      setstringValidationSignUp("Alguno de los campos estan vacios");
      setvalidMailSignUp(true);
      return;
    } else {
      setstringValidationSignUp("");
      setvalidMailSignUp(false);
    }

    if (!validateMail(mailSignUp)) {
      setstringValidationSignUp("Correo inválido");
      setvalidMailSignUp(true);
      return;
    } else {
      setstringValidationSignUp("");
      setvalidMailSignUp(false);
    }
    setloading(true);
    console.log("aqui: ", username);
    insertUser(
      deleteSpecialChars(username.trim()),
      mailSignUp.trim(),
      pwdSignUp.trim()
    )
      .then((x) => {
        console.log(x);
        if (x !== 0) {
          localStorage.setItem("08191993", x[0].id_user);
          localStorage.setItem("08191993UN", x[0].user_name);
          //navigate("/" + username);
        } else if (x === 2) {
          setstringValidationSignUp("Este correo ya se encuentra registrado");
          setvalidMailSignUp(true);
        } else {
          setstringValidationSignUp(
            "Por favor intentalo mas tarde." + " Error: " + x
          );
          setvalidMailSignUp(true);
        }
      })
      .finally(() => {
        document.getElementById("exitSignUp")!.click();
        setloading(false);
      });
  };

  return (
    <>
      <div className="py-5">
        <div className="container pt-2">
          <div className="row ">
            <div className="col-sm-7">
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <h3>A tus fans les va encantar</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <h1 className="fw-bolder">
                      Forma sencilla y significativa de financiar tu trabajo
                      creativo
                    </h1>
                  </div>
                </div>
                <div className="row pt-4">
                  <div className="col-sm">
                    <h5>
                      Puedes aceptar apoyo de tus membresías, webinars, zooms,
                      recibir un cafe, etc. Poder construir una relación directa
                      con tus fans.
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <div className="input-group">
                      <div className="input-group-text">
                        regalameuncafe.com/
                      </div>
                      <input
                        type="text"
                        className={styleInput}
                        onKeyUp={(e) => checkingUser(e)}
                        placeholder="tu nombre aquí"
                      />
                      {buttonBeginDisabled ? (
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#signUp"
                          disabled
                        >
                          Empezar <BiRightArrowCircle></BiRightArrowCircle>
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#signUp"
                          type="button"
                        >
                          Empezar <BiRightArrowCircle></BiRightArrowCircle>
                        </button>
                      )}
                    </div>
                    <p className="fs-6 fw-light mt-1">
                      Es gratis y toma menos de un minuto.{" "}
                      {alertBegin ? (
                        <div className="badge bg-danger text-wrap">
                          El nombre de usuario ya existe <ImSad2 />
                        </div>
                      ) : null}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              {<img src={CreatorImg} className="img-fluid vert-move" />}
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="signUp"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              {loading ? (
                <Loading></Loading>
              ) : (
                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      <form>
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Ingresa tu correo electronico"
                            onChange={(e) => setmailSignUp(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Ingresa una contraseña"
                            onChange={(e) => setpwdSignUp(e.target.value)}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  {validMailSignUp ? (
                    <div className="row text-center">
                      <div id="emailHelp" className="form-text">
                        <button className="btn btn-danger">
                          {stringValidationSignUp}
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
            <div className="modal-footer">
              <div className="container">
                <div className="row text-center">
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => signing()}
                  >
                    <FaGlassCheers className="text-white" /> Empezar
                  </button>
                  <button
                    type="button"
                    className="exitbutton"
                    id="exitSignUp"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="row text-center mt-1">
                  <button
                    type="button"
                    data-bs-target="#iniciarSesion"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    className="btn btn-outline-dark"
                  >
                    ¿Ya tienes cuenta? Inicia Sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionMain;
