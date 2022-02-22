const Navbar = () => {
  return (
    <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img src="/assets/img/logo.png" alt="Logo" />
            </a>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a className="page-scroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#how-it-works">
                  How it works
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#Screenshots">
                  Screenshots
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#Price">
                  Price
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
