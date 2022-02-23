import "./styles.css";

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
                    <Item target="1" />
                    <Item target="2" />
                    <Item target="3" />
                    <Item target="4" />
                  </div>
                </div>
              </div>

              {/* modals */}
              <ItemModal target="1" />
              <ItemModal target="2" />
              <ItemModal target="3" />
              <ItemModal target="4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Item = ({ target }) => (
  <div className="item">
    <div
      className="imghover"
      data-toggle="modal"
      data-target={`#exampleModal${target}`}
      data-whatever="@mdo"
    >
      <img src={`/assets/img/owl${target}.jpg`} alt={`Owl${target}`} />
      <div className="hover-bg">
        <i className="fa fa-camera camera"></i>
      </div>
    </div>
  </div>
);

const ItemModal = ({ target }) => (
  <div
    className="modal fade"
    id={`exampleModal${target}`}
    tabIndex="-1"
    role="dialog"
    aria-labelledby={`exampleModalLabel${target}`}
  >
    <div className="modal-dialog" role="document">
      <img src={`/assets/img/owl${target}.jpg`} alt={`Owl${target}`} />
    </div>
  </div>
);

export default Screenshots;
