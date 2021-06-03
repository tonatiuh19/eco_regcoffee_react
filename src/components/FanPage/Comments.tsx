import React, { useEffect, useState } from "react";
import Moment from "moment";
import { BiCalendar } from "react-icons/bi";
import "moment/locale/es";

const Comments = (props: any) => {
	Moment.locale("es");
	return (
		<div key={props.index}>
			<span className="fst-italic">{props.note_fan}</span>

			<p className="fw-light" style={{ fontSize: 12 }}>
				<BiCalendar /> {Moment(props.date).format("LLLL")}
			</p>
		</div>
	);
};

export default Comments;
