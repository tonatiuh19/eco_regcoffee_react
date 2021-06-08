import React, { useState, useEffect } from "react";
import "./styles/toggle.css";
import CurrencyInput, { formatValue } from "react-currency-input-field";
import {
  FaExclamationCircle,
  FaQuestionCircle,
  FaPlusCircle,
} from "react-icons/fa";
import Loading from "../../resources/utilFunc/Loading/Loading";
import { insertExtra } from "../../services/api.functions";

const ModalAdd = (props: any) => {
  const [isSuscription, setisSuscription] = useState(false);
  const [title, settitle] = useState(props.titleE);
  const [price, setprice] = useState<any>(props.price);
  const [description, setdescription] = useState(props.description);
  const [confirmation, setconfirmation] = useState(props.confirmation);
  const [question, setquestion] = useState(props.question);

  const [isLimit, setisLimit] = useState(false);
  const [limit, setlimit] = useState(0);
  const [subscriptionStatus, setsubscriptionStatus] = useState<any>("DEFAULT");

  const [validTitle, setvalidTitle] = useState(false);
  const [validPrice, setvalidPrice] = useState(false);
  const [validDescription, setvalidDescription] = useState(false);
  const [validConfirmation, setvalidConfirmation] = useState(false);

  const [loading, setloading] = useState(false);

  const changeSuscription = (e: any) => {
    if (Number(e.target.value) === 1) {
      setisSuscription(true);
    } else {
      setisSuscription(false);
    }
  };

  useEffect(() => {
    if (Number(props.limit) >= 1) {
      setlimit(Number(props.limit));
      setisLimit(true);

      console.log("");
    } else {
      setlimit(0);
      setisLimit(false);
    }

    if (Number(props.isSubscription) === 1) {
      setsubscriptionStatus(1);
    } else {
      setsubscriptionStatus(0);
    }
  }, []);

  const saveExtra = () => {
    setloading(true);
    if (title.length === 0) {
      setvalidTitle(true);
      setloading(false);
      return;
    } else {
      setvalidTitle(false);
    }

    if (price.length === 0) {
      setvalidPrice(true);
      setloading(false);
      return;
    } else {
      setvalidPrice(false);
    }

    if (description.length === 0) {
      setvalidDescription(true);
      setloading(false);
      return;
    } else {
      setvalidDescription(false);
    }

    if (confirmation.length === 0) {
      setvalidConfirmation(true);
      setloading(false);
      return;
    } else {
      setvalidConfirmation(false);
    }

    insertExtra(
      Number(localStorage.getItem("08191993")),
      title,
      price,
      description,
      confirmation,
      isSuscription ? "1" : "0",
      "",
      limit,
      question
    )
      .then((x) => {
        if (x === 1) {
          document.getElementById("exitModal")!.click();
          props.onChange();
        }
      })
      .finally(() => setloading(false));
  };

  const toggleChange = () => {
    setisLimit(!isLimit);
  };

  return (
    <>
      <button
        className={"btn " + props.buttonClass}
        type="button"
        data-bs-toggle="modal"
        data-bs-target={"#addExtra" + props.id}
      >
        <FaPlusCircle /> {props.title}
      </button>
      <div
        className="modal fade"
        id={"addExtra" + props.id}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="exampleModalLabel">
                {props.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {loading ? (
                <div>
                  <Loading></Loading>
                </div>
              ) : (
                <div className="container">
                  <div className="row mb-3">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="¿Cual es el título de lo que ofreces?"
                        onChange={(e) => settitle(e.target.value)}
                      />
                      {validTitle ? (
                        <span className="badge bg-danger mt-1">
                          <FaExclamationCircle /> Necesitas incluir un titulo
                        </span>
                      ) : null}
                    </div>
                    <div className="col">
                      <CurrencyInput
                        name="input-name"
                        className="form-control"
                        placeholder="¿Cual es el precio?"
                        prefix="$"
                        decimalsLimit={2}
                        onValueChange={(value, name) => setprice(value)}
                      />
                      {validPrice ? (
                        <span className="badge bg-danger mt-1">
                          <FaExclamationCircle /> Necesitas incluir un precio
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        placeholder="¿Que descripción le pondrias?"
                        rows={3}
                        onChange={(e) => setdescription(e.target.value)}
                      ></textarea>
                      {validDescription ? (
                        <span className="badge bg-danger mt-1">
                          <FaExclamationCircle /> Necesitas incluir una
                          descripción
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Escribe una confirmación una vez tu fan concrete la compra"
                        rows={3}
                        onChange={(e) => setconfirmation(e.target.value)}
                      ></textarea>
                      {validConfirmation ? (
                        <span className="badge bg-danger mt-1">
                          <FaExclamationCircle /> Necesitas incluir una
                          confirmación
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-3">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        defaultValue={subscriptionStatus}
                        onChange={(e) => changeSuscription(e)}
                      >
                        <option value="DEFAULT" disabled>
                          ¿Esto es una suscripción mensual?
                        </option>
                        <option value={1}>Si</option>
                        <option value={0}>No</option>
                      </select>
                      {isSuscription ? (
                        <span className="badge bg-success mt-1">
                          <FaExclamationCircle /> Se cobrara mensualmente a tu
                          fan
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Haz una pregunta a tu fan (opcional)"
                        onChange={(e) => setquestion(e.target.value)}
                      />
                      <span className="badge bg-dark mt-1">
                        <FaQuestionCircle /> Esto te servirá por si necesitas
                        saber su dirección, usuario de alguna plataforma o algo
                        en particular
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <hr></hr>
                    <div className="mb-3">
                      <div className="form-check">
                        <label className="form-check-label">
                          ¿Existe algun limite de usuarios?
                        </label>
                        <div className="flipswitch mt-1">
                          <input
                            type="checkbox"
                            id="fs"
                            className="flipswitch-cb"
                            checked={isLimit}
                            name="flipswitch"
                            onChange={() => toggleChange()}
                          />
                          <label htmlFor="fs" className="flipswitch-label">
                            <div className="flipswitch-inner"></div>
                            <div className="flipswitch-switch"></div>
                          </label>
                        </div>
                        {isLimit ? (
                          <CurrencyInput
                            name="input-name"
                            className="form-control mt-1"
                            defaultValue={limit}
                            style={{ width: 100 }}
                            decimalsLimit={0}
                            onChange={(e) => setlimit(Number(e.target.value))}
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => saveExtra()}
              >
                Guardar
              </button>
              <button
                type="button"
                className="exitModal"
                id="exitModal"
                data-bs-dismiss="modal"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAdd;
