import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <ul className="social-links">
              <li>
                <a
                  className="wow fadeInUp animated"
                  href="index.html#"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  data-wow-delay=".1s"
                  className="wow fadeInUp animated"
                  href="index.html#"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.1s",
                    animationName: "fadeInUp",
                  }}
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  data-wow-delay=".2s"
                  className="wow fadeInUp animated"
                  href="index.html#"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a
                  data-wow-delay=".4s"
                  className="wow fadeInUp animated"
                  href="index.html#"
                  style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}
                >
                  <i className="fa fa-pinterest"></i>
                </a>
              </li>
              <li>
                <a
                  data-wow-delay=".5s"
                  className="wow fadeInUp animated"
                  href="index.html#"
                  style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}
                >
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
            </ul>

            <p className="copyright">&copy; 2016 Canvas</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
