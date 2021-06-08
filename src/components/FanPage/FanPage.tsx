import React, { useEffect, useState } from "react";
import { BiCoffeeTogo, BiHappyHeartEyes } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import Loading from "../../resources/utilFunc/Loading/Loading";
import { getUserInfo } from "../../services/api.functions";
import {
  decode_utf8,
  isLoggedIn,
} from "../../resources/utilFunc/ValidationStrings";
import Pagination from "react-js-pagination";
import "./styles/Main.css";
import "./styles/usernameAnimation.css";

import Extras from "./Extras";
import Posts from "./Posts";
import Comments from "./Comments";

const FanPage = ({ userName }: any) => {
  const [defaultPrice, setdefaultPrice] = useState(30);
  const [priceBtnValue, setpriceBtnValue] = useState(defaultPrice);
  const [defalutValueInputCoffeeQuantity, setdefalutValueInputCoffeeQuantity] =
    useState(1);

  const [oneCoffeeState, setoneCoffeeState] = useState(true);
  const [threeCoffeeState, setthreeCoffeeState] = useState(false);
  const [fiveCoffeeState, setfiveCoffeeState] = useState(false);

  const [loading, setloading] = useState(true);

  const [userInfo, setuserInfo] = useState<any>({});
  const [userExtras, setuserExtras] = useState<any>([]);
  const [userComments, setuserComments] = useState<any>([]);
  const [userPosts, setuserPosts] = useState<any>([]);

  //PaginationComments
  const todosPerPage = 8;
  const [activePage, setCurrentPage] = useState(1);
  const indexOfLastTodo = activePage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = userComments.slice(indexOfFirstTodo, indexOfLastTodo);

  const todosPerPagePosts = 5;
  const [activePagePosts, setCurrentPagePosts] = useState(1);
  const indexOfLastTodoPosts = activePagePosts * todosPerPagePosts;
  const indexOfFirstTodoPosts = indexOfLastTodoPosts - todosPerPagePosts;
  const currentTodosPosts = userPosts.slice(
    indexOfFirstTodoPosts,
    indexOfLastTodoPosts
  );

  const handlePageChangePosts = (pageNumber: number) => {
    //console.log(`active page is ${pageNumber}`);
    setCurrentPagePosts(pageNumber);
  };

  const handlePageChange = (pageNumber: number) => {
    //console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber);
  };

  const closeWelcomeAlert = () => {
    document.getElementById("closeBtnWelcomeAlert")!.click();
  };

  const oneCoffeeFunc = () => {
    setoneCoffeeState(true);
    setthreeCoffeeState(false);
    setfiveCoffeeState(false);
    setdefalutValueInputCoffeeQuantity(1);
    setpriceBtnValue(defaultPrice * 1);
  };

  const threeCoffeeFunc = () => {
    setoneCoffeeState(false);
    setthreeCoffeeState(true);
    setfiveCoffeeState(false);
    setdefalutValueInputCoffeeQuantity(3);
    setpriceBtnValue(defaultPrice * 3);
  };

  const fiveCoffeeFunc = () => {
    setoneCoffeeState(false);
    setthreeCoffeeState(false);
    setfiveCoffeeState(true);
    setdefalutValueInputCoffeeQuantity(5);
    setpriceBtnValue(defaultPrice * 5);
  };

  const randomCoffeFunc = (e: any) => {
    const num = e.target.value;
    if (num == 1) {
      oneCoffeeFunc();
    } else if (num == 3) {
      threeCoffeeFunc();
    } else if (num == 5) {
      fiveCoffeeFunc();
    } else {
      setoneCoffeeState(false);
      setthreeCoffeeState(false);
      setfiveCoffeeState(false);
    }
    setdefalutValueInputCoffeeQuantity(num);
    setpriceBtnValue(defaultPrice * num);
  };

  useEffect(() => {
    getUserInfo(userName)
      .then((x) => {
        let extrasArr = [];
        let commentsArr = [];
        let postsArr = [];
        for (const item in x) {
          if (x[item].hasOwnProperty("id_user")) {
            setuserInfo(x[item]);
          } else if (x[item].hasOwnProperty("id_extra")) {
            extrasArr.push(x[item]);
          } else if (x[item].hasOwnProperty("id_users_posts")) {
            postsArr.push(x[item]);
          } else if (x[item].hasOwnProperty("id_payments")) {
            if (x[item].note_fan != "") {
              commentsArr.push(x[item]);
            }
          }
        }

        setuserExtras(extrasArr);
        setuserPosts(postsArr);
        setuserComments(commentsArr);
      })
      .finally(() => {
        setloading(false);
      });
    if (isLoggedIn()) {
      setTimeout(() => {
        closeWelcomeAlert();
      }, 2000); //miliseconds
    }
  }, []);

  return (
    <>
      <div className="bg-light">
        <div className="container h-100">
          <div className="row py-5">
            <div className="col-sm-12">
              {isLoggedIn() ? (
                <div
                  className="alert alert-dark alert-dismissible fade show "
                  role="alert"
                >
                  <strong>
                    <BiCoffeeTogo /> ¡Bienvenido!
                  </strong>{" "}
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    id="closeBtnWelcomeAlert"
                  ></button>
                </div>
              ) : null}
            </div>
            <div className="col-sm-7">
              <div className="container">
                <div className="row text-center">
                  <div className="col-sm-12">
                    <img
                      src="https://freesvg.org/img/abstract-user-flat-4.png"
                      className="img-thumbnail bg-light"
                      width="200"
                    />
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-sm-12 ">
                    <div className="container-animation">
                      <h2 className="container-animation-text">
                        <span>{userName}</span>
                      </h2>
                    </div>
                  </div>
                  <div className="col-sm-12 ">
                    <h5 className="fw-light">
                      {userInfo.creation === undefined
                        ? null
                        : decode_utf8(userInfo.creation)}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 d-flex align-items-center justify-content-center">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title fw-bold">
                    Invítame un cafe, dos o tres, los que quieras{" "}
                    <BiHappyHeartEyes />
                  </h4>

                  <div className="card-text">
                    <div className="container">
                      <div className="row text-center">
                        <div className="col-3">
                          <div className="row">
                            <div className="col-6">
                              <BiCoffeeTogo size={40} />
                            </div>
                            <div className="col-6">
                              <div className="fs-2">=</div>
                            </div>
                          </div>
                        </div>

                        <div className="col-6">
                          <form className="boxed row fw-bold">
                            <div className="col-4">
                              <input
                                type="radio"
                                id="1"
                                name="skills"
                                value="Android Development"
                                checked={oneCoffeeState}
                                onClick={() => oneCoffeeFunc()}
                              />
                              <label htmlFor="1">1</label>
                            </div>

                            <div className="col-4">
                              <input
                                type="radio"
                                id="2"
                                name="skills"
                                value="iOS Development"
                                checked={threeCoffeeState}
                                onClick={() => threeCoffeeFunc()}
                              />
                              <label htmlFor="2">3</label>
                            </div>

                            <div className="col-4">
                              <input
                                type="radio"
                                id="3"
                                name="skills"
                                value="iOS Development"
                                checked={fiveCoffeeState}
                                onClick={() => fiveCoffeeFunc()}
                              />
                              <label htmlFor="3">5</label>
                            </div>
                          </form>
                        </div>

                        <div className="col-3">
                          <input
                            type="number"
                            value={defalutValueInputCoffeeQuantity}
                            className="form-control"
                            min="1"
                            onChange={(e) => randomCoffeFunc(e)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-grid gap-2 mt-2">
                    <button className="btn btn-success" type="button">
                      Apoyar &nbsp;
                      <span className="fw-bold">
                        {priceBtnValue.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="container">
          <div className="row">
            <div className="col topFifty">
              <Loading></Loading>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-dark text-white">
          <div className="container p-5">
            <div className="row text-center">
              <div className="col-sm-2"></div>
              <div className="col-sm-8">
                <div className="card text-dark">
                  <div className="card-body">
                    <h5 className="fw-bold">{decode_utf8(userInfo.about)}</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-2"></div>
            </div>
          </div>
        </div>
      )}
      {loading ? null : (
        <div className="bg-white py-3">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="container">
                  <div className="row">
                    {userExtras.length === 0 ? (
                      <div className="flex-container mt-2">
                        <div className="flex-items">
                          <div className="p-5 mb-4 bg-light rounded-3">
                            <div className="container-fluid py-5">
                              <h3 className="display-5 fw-bold">
                                Gracias por tu apoyo{" "}
                                <FaHeart className="text-danger" />
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        {userExtras.map((x: any, index: number) => {
                          return (
                            <Extras
                              key={index}
                              index={index}
                              title={x.title}
                              quedan={x.quedan}
                              subsciption={x.subsciption}
                              description={x.description}
                              price={x.price}
                            ></Extras>
                          );
                        })}
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="container">
                  {currentTodosPosts.length === 0 ? null : (
                    <>
                      <div className="row">
                        <div className="col">
                          <h5>
                            Ultimas noticias de{" "}
                            <span className="fw-bold">{userName}</span>:
                          </h5>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="card">
                            <div className="card-body">
                              <div className="card-text ">
                                {currentTodosPosts.map(
                                  (x: any, index: number) => {
                                    return (
                                      <Posts
                                        key={index}
                                        index={index}
                                        text={x.text}
                                        date={x.date}
                                      ></Posts>
                                    );
                                  }
                                )}
                                <div className="pagination">
                                  <Pagination
                                    activePage={activePagePosts}
                                    itemsCountPerPage={3}
                                    totalItemsCount={userPosts.length}
                                    pageRangeDisplayed={3}
                                    onChange={handlePageChangePosts}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="row mt-3">
                    <div className="col">
                      <h5>Comentarios de Fans:</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-text ">
                            {
                              <>
                                {currentTodos.length === 0 ? (
                                  <h5 className="fw-bold">
                                    Puedes ser el primero en aparecer aquí
                                  </h5>
                                ) : (
                                  <>
                                    {currentTodos.map(
                                      (x: any, index: number) => {
                                        return (
                                          <Comments
                                            key={index}
                                            index={index}
                                            note_fan={x.note_fan}
                                            date={x.date}
                                          ></Comments>
                                        );
                                      }
                                    )}
                                    <div className="pagination">
                                      <Pagination
                                        activePage={activePage}
                                        itemsCountPerPage={3}
                                        totalItemsCount={userComments.length}
                                        pageRangeDisplayed={3}
                                        onChange={handlePageChange}
                                      />
                                    </div>
                                  </>
                                )}
                              </>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FanPage;
