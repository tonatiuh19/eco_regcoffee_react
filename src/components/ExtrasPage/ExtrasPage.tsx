import React, { useEffect, useState } from "react";
import "./styles/main.css";
import Loading from "../../resources/utilFunc/Loading/Loading";
import { getUserExtras } from "../../services/api.functions";
import { GrMoney } from "react-icons/gr";
import { RiSignalWifiErrorFill } from "react-icons/ri";
import ModalAdd from "./ModalAdd";
import { getUserName } from "../../resources/utilFunc/ValidationStrings";
import CardExtra from "./CardExtra";

const ExtrasPage = () => {
  const [extras, setextras] = useState<any>([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    handleExtrasService();
  }, []);

  const handleExtrasService = () => {
    setloading(true);
    getUserExtras(getUserName())
      .then((x) => {
        if (x.constructor === Array) {
          setextras(x);
          setloading(false);
        } else if (x !== 0) {
          seterror(true);
          setloading(false);
        }
      })
      .catch(() => seterror(true))
      .finally(() => {});
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
  } else if (error) {
    return (
      <div className=" pt-3 container-center">
        <div className="flex-container-center">
          <div className="row-center">
            <div className="flex-item-center">
              <h1 className="fw-bold">
                Vuelve a intentar mas tarde <RiSignalWifiErrorFill />
              </h1>
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
          <>
            <div className="py-5 bg-light">
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <h1 className="display-5 fw-bold">Mis extras</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs">
                    <ModalAdd
                      id="2"
                      title="Añadir extra"
                      titleE=""
                      price=""
                      description=""
                      confirmation=""
                      isSubscription=""
                      question=""
                      limit=""
                      buttonClass="btn-success btn-md"
                      onChange={handleExtrasService}
                    ></ModalAdd>

                    <span className="ms-1">
                      <ModalAdd
                        id="4"
                        title="Playera exclusiva"
                        titleE="Playera exclusiva"
                        price="500"
                        description="¡No te puedes perder este articulo exclusivo diseñado exclusivamente para ti!"
                        confirmation="¡Gracias por apoyar! Te estas llevando un excelente producto :)."
                        isSubscription="0"
                        question="Por favor escribeme tu direccion completa para hacerte llegar tu playera:"
                        limit="0"
                        buttonClass="btn-outline-success btn-md"
                        onChange={handleExtrasService}
                      ></ModalAdd>
                    </span>
                    <span className="ms-1">
                      <ModalAdd
                        id="7"
                        title="Acceso a grupo Telegram"
                        titleE="Acceso a grupo de Telegram"
                        price="49"
                        description="Unete a mi grupo único y exclusivo donde comparto trucos y tips diarios para tu vida diaria."
                        confirmation="¡Felicidades! Ahora perteneces a este grupo selecto."
                        isSubscription="1"
                        question="¿Cual es tu nombre de usuario o numero de teléfono de Telegram?"
                        limit="100"
                        buttonClass="btn-outline-success btn-md"
                        onChange={handleExtrasService}
                      ></ModalAdd>
                    </span>
                    <span className="ms-1">
                      <ModalAdd
                        id="8"
                        title="Story en Instagram"
                        titleE="Story en Instagram"
                        price="2499"
                        description="Te presto mi perfil de Instagram para publicar tu producto/servicio y lo puedan ver muchísima gente."
                        confirmation="¡Excelente decision! escribeme un correo electronico con el numero de confirmacion de compra a este correo: micorreo@dominio.com"
                        isSubscription="1"
                        question="¿Cuando quieres que publique la story?"
                        limit="0"
                        buttonClass="btn-outline-success btn-md"
                        onChange={handleExtrasService}
                      ></ModalAdd>
                    </span>
                    <span className="m-1">
                      <ModalAdd
                        id="3"
                        title="Acceso a close friends"
                        titleE="Acceso a mis close friends"
                        price="69"
                        description='Estoy abriendo acceso a mi grupo privado de amigos privados ("Close friends") en instagram por una suscripcion mensual. ¡Es un paraíso para los diseñadores o si solo quieres saber mas de mi!'
                        confirmation="Felicidades! Bienvenido a mi vida privada. Yo mismo te dare acceso ;)"
                        isSubscription="1"
                        question="¿Cual es tu id de usuario para poder incluirte?"
                        limit="0"
                        buttonClass="btn-outline-success btn-md"
                        onChange={handleExtrasService}
                      ></ModalAdd>
                    </span>
                    <span className="ms-1">
                      <ModalAdd
                        id="6"
                        title="Repositorio Git"
                        titleE="Repositorio Git"
                        price="300"
                        description="Te doy acceso a este codigo que podras utlizar donde mas lo necesites."
                        confirmation="Excelente desición :). Enseguida te doy accesso."
                        isSubscription="1"
                        question="¿Cual es tu usuario en github para darte acceso?"
                        limit="15"
                        buttonClass="btn-outline-success btn-md"
                        onChange={handleExtrasService}
                      ></ModalAdd>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3">
              <div className="container">
                <div className="row">
                  {extras.map((x: any, index: number) => {
                    return (
                      <CardExtra
                        content={x}
                        index={index}
                        key={index}
                        onChange={handleExtrasService}
                      ></CardExtra>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
};

export default ExtrasPage;
