import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-content row">
          <div className="col-xs-12 col-sm-5 col-md-5">
            <h2 className="wow bounceIn animated" data-wow-delay=".40s">
              FRIENDLY TEMPLATE FOR YOUR APP
            </h2>
            <h3 className="wow bounceIn animated" data-wow-delay=".50s">
              FOR YOUR SMARTPHONE
            </h3>
            <p className="wow bounceIn animated" data-wow-delay=".60s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.We ensure
              sit amet, consectetur adipiscing elit
            </p>
            <p>
              <div
                className="btn btn-primary btn-lg btn-ornge wow bounceIn animated"
                data-wow-delay="1s"
              >
                <i className="hbtn"></i> <span>Free Download</span>{" "}
                <i className="fa fa-cloud-download"></i>
              </div>
            </p>
          </div>
          <div className="col-xs-12 col-sm-7 col-md-7 wow slideInLeft animated">
            <img src="/assets/img/phones.png" alt="phones" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
