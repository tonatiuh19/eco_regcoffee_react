import React from "react";
import { BiCoffeeTogo } from "react-icons/bi";
import "./Loading.css";

const Loading = () => {
	return (
		<div className="container">
			<div className="row text-center">
				<div className="col align-self-center">
					<BiCoffeeTogo className="icon-spin" fontSize="1.5em" />
				</div>
			</div>
		</div>
	);
};

export default Loading;
