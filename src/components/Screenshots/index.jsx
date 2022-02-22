import React from "react";

const Screenshots = () => {
  return (
    <section id="Screenshots" className="">
      <div className="container">
        <span className="angle2"></span>
        <span className="angle"></span>
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-12 wow bounceIn animated headding"
            data-wow-delay=".1s"
          >
            <h2>
              Screen <span>Shots</span>
            </h2>
            <p>
              Display your mobile apps awesome features with icon lists and an
              carousel of each page. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
              veniam, quis nostrud exerci tation.
            </p>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12">
            <div className="row">
              <div
                className="col-xs-12 col-sm-12 col-md-12 wow zoomIn animated textright"
                data-wow-delay=".1s"
              >
                <div className="span12">
                  <div id="owl-demo" className="owl-carousel">
                    <div className="item">
                      <div
                        className="imghover"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        data-whatever="@mdo"
                      >
                        <img src="/assets/img/owl1.jpg" alt="Owl" />
                        <div className="hover-bg">
                          <i className="fa fa-camera camera"></i>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className="imghover"
                        data-toggle="modal"
                        data-target="#exampleModa2"
                        data-whatever="@mdo"
                      >
                        <img src="/assets/img/owl2.jpg" alt="Owl" />
                        <div className="hover-bg">
                          <i className="fa fa-camera camera"></i>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className="imghover"
                        data-toggle="modal"
                        data-target="#exampleModa3"
                        data-whatever="@mdo"
                      >
                        <img src="/assets/img/owl3.jpg" alt="Owl" />
                        <div className="hover-bg">
                          <i className="fa fa-camera camera"></i>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className="imghover"
                        data-toggle="modal"
                        data-target="#exampleModa4"
                        data-whatever="@mdo"
                      >
                        <img src="/assets/img/owl4.jpg" alt="Owl" />
                        <div className="hover-bg">
                          <i className="fa fa-camera camera"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
              >
                <div className="modal-dialog" role="document">
                  <img src="/assets/img/owl1.jpg" alt="Owl" />
                </div>
              </div>

              <div
                className="modal fade"
                id="exampleModa2"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabe2"
              >
                <div className="modal-dialog" role="document">
                  <img src="/assets/img/owl2.jpg" alt="Owl" />
                </div>
              </div>

              <div
                className="modal fade"
                id="exampleModa3"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabe3"
              >
                <div className="modal-dialog" role="document">
                  <img src="/assets/img/owl3.jpg" alt="Owl" />
                </div>
              </div>

              <div
                className="modal fade"
                id="exampleModa4"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabe4"
              >
                <div className="modal-dialog" role="document">
                  <img src="/assets/img/owl4.jpg" alt="Owl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
