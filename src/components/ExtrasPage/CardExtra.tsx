import React, { useState } from "react";
import "@popperjs/core";
import ModalEdit from "./ModalEdit";
import { decode_utf8 } from "../../resources/utilFunc/ValidationStrings";
import ModalDelete from "./ModalDelete";

const CardExtra = (props: any) => {
  const handleExtrasService = () => {
    props.onChange();
  };

  return (
    <>
      <div className="col-sm-6">
        <div className="card m-1">
          <div className="card-body">
            <div className="float-end">
              <ModalEdit
                id={props.index}
                title={"Editar: " + decode_utf8(props.content.title)}
                titleE={decode_utf8(props.content.title)}
                price={props.content.price}
                description={decode_utf8(props.content.description)}
                confirmation={decode_utf8(props.content.confirmation)}
                isSubscription={props.content.subsciption}
                question={decode_utf8(props.content.question)}
                limit={props.content.limit_slots}
                onChange={handleExtrasService}
                id_extra={props.content.id_extra}
              ></ModalEdit>
              <ModalDelete
                onChange={handleExtrasService}
                id_extra={props.content.id_extra}
                title={
                  "¿Estas seguro de eliminar: " +
                  decode_utf8(props.content.title) +
                  "?"
                }
              ></ModalDelete>
            </div>
            <h5 className="card-title fw-bold">
              {decode_utf8(props.content.title)}
            </h5>
            {props.content.active === 3 ? (
              <span className="badge bg-danger">Pendiente de aprobación</span>
            ) : null}

            {props.content.limit_slots >= 1 ? (
              <span className="badge bg-warning text-dark ms-1">
                Lugares: {props.content.limit_slots}
              </span>
            ) : null}

            {props.content.subsciption === 1 ? (
              <span className="badge bg-dark ms-1">Suscripcion</span>
            ) : null}

            <p className="card-text">
              {decode_utf8(props.content.description)}
            </p>

            <button className="btn btn-primary">Entrar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardExtra;
