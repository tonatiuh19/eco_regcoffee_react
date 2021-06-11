import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Loading from "../../resources/utilFunc/Loading/Loading";
import { insertPost } from "../../services/api.functions";
import { geIdtUser } from "../../resources/utilFunc/ValidationStrings";

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
  },
};

const ModalAdd = (props: any) => {
  const [loading, setloading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [message, setmessage] = useState(props.text);
  const [validMessage, setvalidMessage] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const publishing = () => {
    setloading(true);
    if (message.length === 0) {
      setvalidMessage(true);
      setloading(false);
      return;
    } else {
      setvalidMessage(false);
    }

    insertPost(geIdtUser(), message)
      .then((x) => {
        if (x === 1) {
          setIsOpen(false);
          props.onChange();
        }
      })
      .finally(() => setloading(false));
  };

  return (
    <>
      <button
        className={"btn " + props.buttonClass}
        type="button"
        onClick={() => setIsOpen(true)}
      >
        Publicar post
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="container">
          <div className="row mb-3">
            <div className="col-sm">
              <h3 className="modal-title fw-bold" id="exampleModalLabel">
                {props.title}
              </h3>
            </div>
          </div>

          {loading ? (
            <div className="row text-center">
              <div className="col-sm">
                <Loading></Loading>
              </div>
            </div>
          ) : (
            <>
              <div className="row">
                <div className="col-sm">
                  <div className="mb-3">
                    <label className="form-label">¿Que traes en mente?</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      defaultValue={message}
                      onChange={(e) => setmessage(e.target.value)}
                    ></textarea>
                    {validMessage ? (
                      <span className="badge bg-danger mt-1">
                        Necesitas incluir un mensaje
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="row text-end">
                <div className="col-sm">
                  <button
                    className="btn btn-danger"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="btn btn-success ms-2"
                    onClick={() => publishing()}
                  >
                    Publicar
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ModalAdd;
