import React from "react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="parallax">
      <div className="container">
        <span className="angle2"></span>
        <span className="angle"></span>
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-12 wow bounceIn animated headding"
            data-wow-delay=".5s"
          >
            <h2>
              How it <span>works</span>
            </h2>
            <p>
              Display your mobile apps awesome features with icon lists and an
              image carousel of each page. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
              enim ad minim veniam, quis nostrud exerci tation.
            </p>
          </div>

          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="row">
              <div
                className="col-xs-10 col-sm-10 col-md-10 wow fadeInLeft animated textright"
                data-wow-delay=".5s"
              >
                <h3>Lorem ipsum</h3>
                <p>
                  Typi non habent claritatem insitam; est usus legentis in iis
                  qui facit eorum.
                </p>
              </div>
              <div
                className="col-xs-2 col-sm-2 col-md-2 wow fadeInRight animated"
                data-wow-delay=".5s"
              >
                <i className="fa fa-apple iconfont"></i>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xs-10 col-sm-10 col-md-10 wow fadeInLeft animated textright"
                data-wow-delay=".6s"
              >
                <h3>Lorem ipsum</h3>
                <p>
                  Typi non habent claritatem insitam; est usus legentis in iis
                  qui facit eorum.
                </p>
              </div>
              <div
                className="col-xs-2 col-sm-2 col-md-2 wow fadeInRight animated"
                data-wow-delay=".6s"
              >
                <i className="fa fa-rocket iconfont"></i>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xs-10 col-sm-10 col-md-10 wow fadeInLeft animated textright"
                data-wow-delay=".7s"
              >
                <h3>Lorem ipsum</h3>
                <p>
                  Typi non habent claritatem insitam; est usus legentis in iis
                  qui facit eorum.
                </p>
              </div>
              <div
                className="col-xs-2 col-sm-2 col-md-2 wow fadeInRight animated"
                data-wow-delay=".7s"
              >
                <i className="fa fa-film iconfont"></i>
              </div>
            </div>
          </div>

          <div
            className="col-xs-12 col-sm-4 col-md-4 wow bounceIn animated textcenter"
            data-wow-delay=".4s"
          >
            <img src="/assets/img/slide-bg.png" alt="slide-bg" />
          </div>

          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="row">
              <div
                className="col-xs-2 col-sm-2 col-md-2 wow fadeInLeft animated"
                data-wow-delay=".5s"
              >
                <i className="fa fa-android iconfont2"></i>
              </div>
              <div
                className="col-xs-10 col-sm-10 col-md-10 wow fadeInRight animated textleft"
                data-wow-delay=".5s"
              >
                <h3>Lorem ipsum</h3>
                <p>
                  Typi non habent claritatem insitam; est usus legentis in iis
                  qui facit eorum.
                </p>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xs-2 col-sm-2 col-md-2 wow fadeInLeft animated"
                data-wow-delay=".6s"
              >
                <i className="fa fa-css3 iconfont2"></i>
              </div>
              <div
                className="col-xs-10 col-sm-10 col-md-10 wow fadeInRight animated textleft"
                data-wow-delay=".6s"
              >
                <h3>Lorem ipsum</h3>
                <p>
                  Typi non habent claritatem insitam; est usus legentis in iis
                  qui facit eorum.
                </p>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xs-2 col-sm-2 col-md-2 wow fadeInLeft animated"
                data-wow-delay=".7s"
              >
                <i className="fa fa-users iconfont2"></i>
              </div>
              <div
                className="col-xs-10 col-sm-10 col-md-10 wow fadeInRight animated textleft"
                data-wow-delay=".7s"
              >
                <h3>Lorem ipsum</h3>
                <p>
                  Typi non habent claritatem insitam; est usus legentis in iis
                  qui facit eorum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
