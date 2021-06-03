import React from "react";
import { BiRightArrowCircle } from "react-icons/bi";

const SectionDescriptionGallery = () => {
	return (
		<div className="bg-dark text-white py-5">
			<div className="container py-5">
				<div className="row text-center">
					<div className="col-sm-12">
						<h5 className="fs-5">Eleva tus ingresos</h5>
						<h2 className="fw-bolder">
							Incluye Extras, la forma creativa de vender y ofrecer mas de tu
							servicios
						</h2>
					</div>
				</div>
				<div className="row text-center">
					<h5 className="fs-5 ">Como por ejemplo:</h5>
					<div className="row row-cols-1 row-cols-md-2 g-4 text-dark text-start mt-n3">
						<div className="col">
							<div className="card">
								<div className="card-body">
									<h6 className="card-title fw-bolder">
										<BiRightArrowCircle /> Consulta 1:1
									</h6>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card">
								<div className="card-body">
									<h6 className="card-title fw-bolder">
										<BiRightArrowCircle /> Acceso a tus close friends con
										subscripcion por mes
									</h6>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card">
								<div className="card-body">
									<h6 className="card-title fw-bolder">
										<BiRightArrowCircle /> Acceso a un grupo privado de
										Wtsp/Telegram
									</h6>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card">
								<div className="card-body">
									<h6 className="card-title fw-bolder">
										<BiRightArrowCircle /> Post en twitter
									</h6>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card">
								<div className="card-body">
									<h6 className="card-title fw-bolder">
										<BiRightArrowCircle /> Story en instagram
									</h6>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card">
								<div className="card-body">
									<h6 className="card-title fw-bolder">
										<BiRightArrowCircle /> Ebooks
									</h6>
								</div>
							</div>
						</div>
					</div>
					<div className="row row-cols-1 row-cols-md g-4 text-dark">
						<div className="col">
							<div className="card">
								<div className="card-body">
									<h6 className="card-title fw-bolder">
										<BiRightArrowCircle /> Y lo que a ti se te ocurra...
									</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionDescriptionGallery;
