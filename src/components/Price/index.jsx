const Price = () => {
  return (
    <section id="Price" className="">
      <div className="container">
        <span className="angle2"></span>
        <span className="angle"></span>

        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-12 wow zoomIn animated headding"
            data-wow-delay=".1s"
          >
            <h2>
              Price <span>List</span>
            </h2>
            <p>
              Display your mobile apps awesome features with icon lists and an
              image carousel of each page. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
              enim ad minim veniam, quis nostrud exerci tation.
            </p>
          </div>

          <div className="col-xs-12 col-sm-4 col-md-4 wow fadeInLeft animated">
            <div className="price-wrapper ">
              <h3 className="price-title">Students</h3>
              <div className="price">
                <div className="value-box">
                  <div className="value-box-content">
                    <span className="value">
                      <i></i>
                      <span className="number">FREE</span>
                    </span>
                    <span className="month invisible"></span>
                  </div>
                </div>

                <div className="content-box">
                  <ul>
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                  </ul>
                </div>
                <div className="sign-box">
                  <a href="#">
                    <span>Sign Up</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 wow zoomIn animated">
            <div className="price-wrapper ">
              <h3 className="price-title">Small</h3>
              <div className="price">
                <div className="value-box">
                  <div className="value-box-content">
                    <span className="value">
                      <i></i>
                      <span className="number"> $10 </span>
                    </span>
                    <span className="month">per month</span>
                  </div>
                </div>

                <div className="content-box">
                  <ul>
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                  </ul>
                </div>
                <div className="sign-box">
                  <a href="#">
                    <span>Sign Up</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 wow zoomIn animated">
            <div className="price-wrapper ">
              <h3 className="price-title">Standard</h3>
              <div className="price standard">
                <div className="value-box">
                  <div className="value-box-content">
                    <span className="value">
                      <span className="number">$50</span>
                    </span>
                    <span className="month">per month</span>
                  </div>
                </div>

                <div className="content-box">
                  <ul>
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                  </ul>
                </div>
                <div className="sign-box">
                  <a href="#">
                    <span>Sign Up</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
