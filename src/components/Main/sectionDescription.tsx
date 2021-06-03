import React from "react";
import { RiHandHeartFill, RiNumbersFill } from "react-icons/ri";
import { FaHandsHelping, FaHeartbeat } from "react-icons/fa";

const SectionDescription = () => {
	return (
		<>
			<div className="bg-light py-5">
				<div className="container py-5">
					<div className="row">
						<div className="col-sm text-center">
							<RiNumbersFill fontSize="3.5em" />
							<h4 className="fw-bolder">Control total</h4>
							<h5 className="fs-5 pt-2">
								Tienes el 100% de propiedad de tus seguidores. Nunca les
								enviamos correos electrónicos y puede exportar la lista cuando
								lo desees.
							</h5>
						</div>
						<div className="col-sm text-center">
							<RiHandHeartFill fontSize="3.5em" />
							<h4 className="fw-bolder">Conciente a los tuyos</h4>
							<h5 className="fs-5 pt-2">
								Comienza una suscripción para tus fans. material exclusivo,
								apoyo mensual, acceso a código, etc.
							</h5>
						</div>
						<div className="col-sm text-center">
							<FaHandsHelping fontSize="3.5em" />
							<h4 className="fw-bolder">Servicio insuperable</h4>
							<h5 className="fs-5 pt-2">
								Puedes hablar siempre con un humano para que te ayude, o si solo
								quieres un consejo para arrancar a toda velocidad.
							</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="py-5 bg-dark text-white">
				<div className="container">
					<div className="row text-center">
						<div className="col-sm">
							<FaHeartbeat fontSize="4.5em" />
							<h2 className="fw-bolder py-3">
								Dale a tu audiencia una forma fácil de agradecer
							</h2>

							<h5 className="px-5 fs-5">
								Brinda una forma de respaldar tu trabajo. Con solo un par de
								clicks, tus fans pueden apoyar tu creatividad, mas aparte dejar
								un mensaje.
								<p className="fw-bolder">
									Ni siquiera tienen que crear una cuenta.
								</p>
							</h5>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SectionDescription;
