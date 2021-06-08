import React, { useEffect, useState } from "react";
import "./styles/main.css";
import Loading from "../../resources/utilFunc/Loading/Loading";
import { getUserExtras } from "../../services/api.functions";
import { GrMoney } from "react-icons/gr";
import ModalAdd from "./ModalAdd";
import { getUserName } from "../../resources/utilFunc/ValidationStrings";

const ExtrasPage = () => {
  const [extras, setextras] = useState([]);
  const [loading, setloading] = useState(true);
  //Form new extra

  useEffect(() => {
    handleExtrasService();
  }, []);

  const handleExtrasService = () => {
    setloading(true);
    getUserExtras(getUserName())
      .then((x) => {
        if (x !== 0) {
          setextras(x);
        }
      })
      .finally(() => {
        setloading(false);
      });
  };

  if (loading) {
    return (
      <div className=" pt-3 container-center">
        <div className="flex-container-center">
          <div className="row-center">
            <div className="flex-item-center">
              <Loading></Loading>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        {extras.length === 0 ? (
          <>
            <div className=" pt-3 container-center">
              <div className="flex-container-center">
                <div className="row-center">
                  <div className="flex-item-center">
                    <div className="p-5 mb-4 rounded-3">
                      <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">
                          Genera mas ingresos <GrMoney />
                        </h1>
                        <p className="col-md-8 fs-4">
                          Aún no tienes ningun extra. Añade algo mas a tu página
                          como acceso a tus close friends, acceso a
                          documentación exclusiva, e-book, consultas 1:1,
                          suscripciones,... lo que a ti se te ocurra.
                        </p>
                        <ModalAdd
                          id="1"
                          title="Añadir extra"
                          titleE=""
                          price=""
                          description=""
                          confirmation=""
                          isSubscription="0"
                          question=""
                          limit="0"
                          buttonClass="btn-success btn-lg"
                          onChange={handleExtrasService}
                        ></ModalAdd>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="py-5 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <h1 className="display-5 fw-bold">Mis extras</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <ModalAdd
                    id="2"
                    title="Añadir extra"
                    titleE=""
                    price=""
                    description=""
                    confirmation=""
                    isSubscription="0"
                    question=""
                    limit="15"
                    buttonClass="btn-success btn-md"
                    onChange={handleExtrasService}
                  ></ModalAdd>
                  <span className="ms-1">
                    <ModalAdd
                      id="3"
                      title="Consulta 1:1"
                      titleE=""
                      price=""
                      description=""
                      confirmation=""
                      isSubscription="1"
                      question=""
                      limit="15"
                      buttonClass="btn-outline-success btn-md"
                      onChange={handleExtrasService}
                    ></ModalAdd>
                  </span>
                  <span className="ms-1">
                    <ModalAdd
                      id="4"
                      title="Consulta 1:1"
                      titleE=""
                      price=""
                      description=""
                      confirmation=""
                      isSubscription="1"
                      question=""
                      limit="15"
                      buttonClass="btn-outline-success btn-md"
                      onChange={handleExtrasService}
                    ></ModalAdd>
                  </span>
                  <span className="ms-1">
                    <ModalAdd
                      id="5"
                      title="Consulta 1:1"
                      titleE=""
                      price=""
                      description=""
                      confirmation=""
                      isSubscription="1"
                      question=""
                      limit="15"
                      buttonClass="btn-outline-success btn-md"
                      onChange={handleExtrasService}
                    ></ModalAdd>
                  </span>
                  <span className="ms-1">
                    <ModalAdd
                      id="6"
                      title="Consulta 1:1"
                      titleE=""
                      price=""
                      description=""
                      confirmation=""
                      isSubscription="1"
                      question=""
                      limit="15"
                      buttonClass="btn-outline-success btn-md"
                      onChange={handleExtrasService}
                    ></ModalAdd>
                  </span>
                  <span className="ms-1">
                    <ModalAdd
                      id="7"
                      title="Consulta 1:1"
                      titleE=""
                      price=""
                      description=""
                      confirmation=""
                      isSubscription="1"
                      question=""
                      limit="15"
                      buttonClass="btn-outline-success btn-md"
                      onChange={handleExtrasService}
                    ></ModalAdd>
                  </span>
                  <span className="ms-1">
                    <ModalAdd
                      id="8"
                      title="Consulta 1:1"
                      titleE=""
                      price=""
                      description=""
                      confirmation=""
                      isSubscription="1"
                      question=""
                      limit="15"
                      buttonClass="btn-outline-success btn-md"
                      onChange={handleExtrasService}
                    ></ModalAdd>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
};

export default ExtrasPage;
