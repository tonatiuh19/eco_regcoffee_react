import React from "react";
import Moment from "moment";
import { BiCalendar } from "react-icons/bi";
import "moment/locale/es";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";

const CardPost = (props: any) => {
  Moment.locale("es");

  const handlePostService = () => {
    props.onChange();
  };

  return (
    <div className="card mt-1">
      <div className="card-body">
        <div key={props.index}>
          <span className="fst-italic ">{props.text}</span>

          <p className="fw-light" style={{ fontSize: 12 }}>
            <BiCalendar /> {Moment(props.date).format("LLLL")}
          </p>
        </div>
        <div className="float-end">
          <ModalEdit
            text={props.text}
            idPost={props.idPost}
            onChange={handlePostService}
          ></ModalEdit>
          <ModalDelete
            idPost={props.idPost}
            onChange={handlePostService}
          ></ModalDelete>
        </div>
      </div>
    </div>
  );
};

export default CardPost;
