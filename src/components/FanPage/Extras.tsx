import React from "react";
import { decode_utf8 } from "../../resources/utilFunc/ValidationStrings";

const Extras = (props: any) => {
  const lugaresRender = (lugares: number, subscripcion: number) => {
    if (lugares === 0) {
      if (subscripcion === 1) {
        return (
          <div className="row text-start">
            <div className="col-sm-12">
              <div className="badge bg-secondary text-wrap">Agotado</div>
              <div className="badge bg-dark text-wrap ms-1">Suscripción</div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="row text-start">
            <div className="col-sm-12">
              <div className="badge bg-secondary text-wrap">Agotado</div>
            </div>
          </div>
        );
      }
    } else if (lugares === 1) {
      if (subscripcion === 1) {
        return (
          <div className="row text-start">
            <div className="col-sm-12">
              <div className="badge bg-warning text-wrap">
                Queda el ultimo lugar
              </div>
              <div className="badge bg-dark text-wrap ms-1">Suscripción</div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="row text-start">
            <div className="col-sm-12">
              <div className="badge bg-warning text-wrap">
                Queda el ultimo lugar
              </div>
            </div>
          </div>
        );
      }
    } else {
      if (subscripcion === 1) {
        return (
          <div className="row text-start">
            <div className="col-sm-12">
              <div className="badge bg-dark text-wrap">
                Quedan : {lugares} lugares
              </div>
              <div className="badge bg-dark text-wrap ms-1">Suscripción</div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="row text-start">
            <div className="col-sm-12">
              <div className="badge bg-warning text-wrap">
                Quedan : {lugares} lugares
              </div>
            </div>
          </div>
        );
      }
    }
  };

  return (
    <div className="col-6 p-1" key={props.index}>
      <div className="card d-flex flex-column bg-light h-100">
        <div className="card-body d-flex flex-column h-100">
          <h5 className="card-title fw-bold">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {lugaresRender(props.quedan, props.subsciption)}
          </h6>
          <p className="card-text">{decode_utf8(props.description)}</p>
          <div className="d-grid gap-2 mt-2 ">
            <button
              className="align-self-end btn btn-success btn-sm mt-auto"
              type="button"
            >
              Comprar &nbsp;
              <span className="fw-bold">
                {props.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extras;
