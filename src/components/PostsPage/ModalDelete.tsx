import React, { useState } from "react";
import { HiTrash } from "react-icons/hi";
import Loading from "../../resources/utilFunc/Loading/Loading";
import Modal from "react-modal";
import { deactivatePost } from "../../services/api.functions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalDelete = (props: any) => {
  const [loading, setloading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const deactivating = () => {
    setloading(true);
    deactivatePost(props.idPost)
      .then((x) => {
        if (x === 1) {
          setIsOpen(false);
          props.onChange();
        }
      })
      .finally(() => setloading(false));
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="btn btn-outline-danger btn-sm ms-1"
        onClick={() => setIsOpen(true)}
      >
        <HiTrash />
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
              <h5 className="modal-title" id="exampleModalLabel">
                ¿Estas seguro de querer elminar este post?
              </h5>
            </div>
          </div>
          <div className="row text-center">
            {loading ? (
              <div>
                <Loading></Loading>
              </div>
            ) : (
              <>
                <div className="col-sm-6">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setIsOpen(false)}
                  >
                    Me equivoqué
                  </button>
                </div>
                <div className="col-sm-6">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deactivating()}
                  >
                    Eliminar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalDelete;
