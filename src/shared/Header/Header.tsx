import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Logo from "../../resources/images/logo_full_grap.png";
import LogoGold from "../../resources/images/logo_full.png";
import "./styles/Header.css";
import { signIn, checkUser, insertUser } from "../../services/api.functions";
import Loading from "../../resources/utilFunc/Loading/Loading";
import { FaToggleOff, FaTools, FaUserAstronaut } from "react-icons/fa";
import { ClearSession } from "../../resources/utilFunc/ClearSession";
import {
  validateMail,
  deleteSpecialChars,
} from "../../resources/utilFunc/ValidationStrings";
import { ImSad2 } from "react-icons/im";

const Header = () => {
  const history = useHistory();
  const [navBarTheme, setNavBarTheme] = useState(
    "navbar fixed-top navbar-expand-lg navbar-light bg-light"
  );
  const [logo, setLogo] = useState(Logo);
  const [loggedIn, setLoggedIn] = useState(false);
  const [validMailSignIn, setvalidMailSignIn] = useState(false);
  const [stringValidationSignIn, setstringValidationSignIn] = useState("");
  const [validMailSignUp, setvalidMailSignUp] = useState(false);
  const [stringValidationSignUp, setstringValidationSignUp] = useState("");

  const [mailSignIn, setmailSignIn] = useState("");
  const [pwdSignIn, setpwdSignIn] = useState("");

  const [mailSignUp, setmailSignUp] = useState("");
  const [pwdSignUp, setpwdSignUp] = useState("");

  const [loading, setloading] = useState(false);

  const [username, setusername] = useState<string | null>("");

  const [styleInput, setstyleInput] = useState("form-control");
  const [buttonBeginDisabled, setbuttonBeginDisabled] = useState(true);
  const [alertBegin, setalertBegin] = useState(false);
  const [usernameSignUp, setusernameSignUp] = useState("");

  const signing = (type: number) => {
    if (type === 1) {
      if (mailSignIn === "" || pwdSignIn === "") {
        setstringValidationSignIn("Alguno de los campos estan vacios");
        setvalidMailSignIn(true);
        return;
      } else {
        setstringValidationSignIn("");
        setvalidMailSignIn(false);
      }

      if (!validateMail(mailSignIn)) {
        setstringValidationSignIn("Correo inválido");
        setvalidMailSignIn(true);
        return;
      } else {
        setstringValidationSignIn("");
        setvalidMailSignIn(false);
      }
      setloading(true);
      signIn(mailSignIn, pwdSignIn)
        .then((x) => {
          if (x !== 0 && typeof x === "string") {
            setvalidMailSignIn(true);
            setstringValidationSignIn(x);
            setloading(false);
          } else if (Array.isArray(x)) {
            setstringValidationSignIn("");
            setvalidMailSignIn(false);
            localStorage.setItem("08191993", x[0].id_user);
            localStorage.setItem("08191993UN", x[0].user_name);
            document.getElementById("exitSignIn")!.click();
            history.push("/" + x[0].user_name);
            setloading(false);
          } else if (x === 0) {
            setstringValidationSignIn("Correo o contraseña incorrectos");
            setvalidMailSignIn(true);
            setloading(false);
          }
        })
        .finally(() => {
          session();
        });
    } else {
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

      insertUser(
        deleteSpecialChars(usernameSignUp.trim()),
        mailSignUp.trim(),
        pwdSignUp.trim()
      )
        .then((x) => {
          if (x !== 0) {
            console.log(x);
            localStorage.setItem("08191993", x[0].id_user);
            localStorage.setItem("08191993UN", x[0].user_name);
            history.push("/" + usernameSignUp);
            document.getElementById("exitSignUp")!.click();
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
          setloading(false);
        });
    }
  };

  const checkingUser = (e: any) => {
    setbuttonBeginDisabled(true);
    const uname = e.target.value;
    setusernameSignUp(uname);
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

  const session = () => {
    const loggedInUser = localStorage.getItem("08191993");

    if (loggedInUser) {
      setLoggedIn(true);
      setusername(localStorage.getItem("08191993UN"));
    } else {
      setLoggedIn(false);
    }
  };

  const pathIncludes = (word: any) => {
    return window.location.href.includes(word)
      ? "nav-item-hover btn btn-outline-dark"
      : "nav-item-hover btn btn-light";
  };

  useEffect(() => {
    session();
  });
  return (
    <>
      <header style={{ position: "absolute" }}>
        <nav className={navBarTheme}>
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <img src={logo} width="200" className="img-fluid" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="btn btn-light" href="#">
                    Explora creadores
                  </a>
                </li>
                {loggedIn ? (
                  <>
                    <li className="nav-item">
                      <a
                        className={pathIncludes("posts")}
                        aria-current="page"
                        href=""
                        onClick={() => history.push("/posts")}
                      >
                        Mis posts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={pathIncludes("extras")}
                        aria-current="page"
                        href=""
                        onClick={() => history.push("/extras")}
                      >
                        Mis extras
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className={pathIncludes(username)}
                        aria-current="page"
                        href=""
                        onClick={() => history.push("/" + username)}
                      >
                        Mi página
                      </a>
                    </li>
                    <li className="nav-item dropdown dropstart">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <FaUserAstronaut />
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Mi cuenta
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Mis pagos
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <FaTools /> Soporte
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href=""
                            onClick={() => {
                              localStorage.clear();
                              history.push("/");
                            }}
                          >
                            <FaToggleOff /> Cerrar sesión
                          </a>
                        </li>
                      </ul>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <button
                        className="btn btn-outline-dark"
                        data-bs-toggle="modal"
                        data-bs-target="#iniciarSesion"
                      >
                        Entrar
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="btn btn-light"
                        data-bs-toggle="modal"
                        data-bs-target="#creaTuCuenta"
                      >
                        Registrate
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div
        className="modal fade"
        id="iniciarSesion"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
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
                            onChange={(e) => setmailSignIn(e.target.value)}
                            value={mailSignIn}
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Ingresa tu contraseña"
                            onChange={(e) => setpwdSignIn(e.target.value)}
                            value={pwdSignIn}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  {validMailSignIn ? (
                    <div className="row text-center">
                      <div id="emailHelp" className="form-text">
                        <button className="btn btn-danger">
                          {stringValidationSignIn}
                        </button>
                      </div>
                    </div>
                  ) : null}

                  <div className="row text-center">
                    <div className="col-sm">
                      <a href="#" className="btn btn-light btn-sm">
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <div className="container">
                <div className="row text-center">
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => signing(1)}
                  >
                    Entrar
                  </button>
                  <button
                    type="button"
                    className="exitbutton"
                    id="exitSignIn"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="row text-center mt-1">
                  <button
                    type="button"
                    data-bs-target="#creaTuCuenta"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    className="btn btn-outline-dark"
                  >
                    Crea tu cuenta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="creaTuCuenta"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="container">
                {loading ? (
                  <Loading></Loading>
                ) : (
                  <div className="row">
                    <div className="col-sm">
                      <form>
                        <div className="mb-3">
                          <div className="input-group">
                            <div className="input-group-text">
                              regalameuncafe.com/
                            </div>
                            <input
                              type="text"
                              placeholder="tu nombre aquí"
                              className={styleInput}
                              onKeyUp={(e) => checkingUser(e)}
                            />
                          </div>
                          {alertBegin ? (
                            <div className="badge bg-danger text-wrap">
                              El nombre de usuario ya existe <ImSad2 />
                            </div>
                          ) : null}
                        </div>

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
                )}

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
            </div>
            <div className="modal-footer">
              <div className="container">
                <div className="row text-center">
                  {buttonBeginDisabled ? (
                    <button
                      type="button"
                      className="btn btn-dark"
                      disabled
                      onClick={() => signing(2)}
                    >
                      Empezar
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => signing(2)}
                    >
                      Empezar
                    </button>
                  )}
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
                  <button
                    type="button"
                    className="exitbutton"
                    id="exitSignUp"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
