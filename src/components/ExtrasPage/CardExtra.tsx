import React from "react";
import "@popperjs/core";
import { HiTrash } from "react-icons/hi";
import { TiPencil } from "react-icons/ti";

const CardExtra = ({ content }: any) => {
  return (
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
          <div className="float-end">
            <button
              className="btn btn-outline-warning btn-sm"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Editar"
            >
              <TiPencil />
            </button>
            <button
              className="btn btn-outline-danger btn-sm ms-1"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Eliminar"
            >
              <HiTrash />
            </button>
          </div>
          <h5 className="card-title">{content.title}</h5>
          {content.limit_slots >= 1 ? (
            <span className="badge bg-warning text-dark">
              Lugares: {content.limit_slots}
            </span>
          ) : null}

          {content.subsciption === 1 ? (
            <span className="badge bg-dark">Suscripcion</span>
          ) : null}

          <p className="card-text">{content.description}</p>

          <button className="btn btn-primary">Entrar</button>
        </div>
      </div>
    </div>
  );
};

export default CardExtra;
