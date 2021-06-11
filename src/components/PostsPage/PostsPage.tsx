import React, { useState, useEffect } from "react";
import { FaRegNewspaper } from "react-icons/fa";
import ModalAdd from "./ModalAdd";
import "./styles/main.css";
import { getUserPosts } from "../../services/api.functions";
import { getUserName } from "../../resources/utilFunc/ValidationStrings";
import { RiSignalWifiErrorFill } from "react-icons/ri";
import Loading from "../../resources/utilFunc/Loading/Loading";

const PostsPage = () => {
  const [posts, setposts] = useState<any>([]);
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    handlePostsService();
  }, []);

  const handlePostsService = () => {
    setloading(true);
    getUserPosts(getUserName())
      .then((x) => {
        console.log(x);
        if (x.constructor === Array) {
          setposts(x);
          setloading(false);
        } else if (x !== 0) {
          seterror(true);
          setloading(false);
        } else {
          setloading(false);
        }
      })
      .finally();
  };

  if (loading) {
    return (
      <div className=" pt-3 container-center">
        <div className="flex-container-center">
          <div className="row-center">
            <div className="flex-item-center">
              <Loading></Loading>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div className=" pt-3 container-center">
        <div className="flex-container-center">
          <div className="row-center">
            <div className="flex-item-center">
              <h1 className="fw-bold">
                Vuelve a intentar mas tarde <RiSignalWifiErrorFill />
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        {posts.length === 0 ? (
          <div className=" pt-3 container-center">
            <div className="flex-container-center">
              <div className="row-center">
                <div className="flex-item-center">
                  <div className="p-5 mb-4 rounded-3">
                    <div className="container-fluid py-5">
                      <h1 className="display-5 fw-bold">
                        Pon al tanto a tus fans <FaRegNewspaper />
                      </h1>
                      <p className="col-md-8 fs-4">
                        Puedes incluir mensajes en tu pagina y asi tus fans no
                        perderán ninguna noticia tuya. Notas, mensajes, usuario
                        en redes sociales, lo que a ti se te ocurra.
                      </p>
                      <ModalAdd
                        buttonClass="btn-success btn-lg"
                        title="Nuevo post"
                        text=""
                        onChange={handlePostsService}
                      ></ModalAdd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>Hola</div>
        )}
      </>
    );
  }
};

export default PostsPage;