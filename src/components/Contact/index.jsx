import { useState } from "react";
import "./styles.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(JSON.stringify(formData));
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-12 wow bounceIn animated headding"
            data-wow-delay=".1s"
          >
            <h2>
              Contact <span>Us</span>
            </h2>
            <p>
              Display your mobile apps awesome features with icon lists and an
              image carousel of each page. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
              enim ad minim veniam, quis nostrud exerci tation.
            </p>
          </div>
        </div>

        <div className="row">
          <div
            className="col-xs-12 col-sm-4 col-md-4 wow bounceIn animated"
            data-wow-delay=".1s"
          >
            <form onSubmit={handleSubmit}>
              <div className="ajax-hidden">
                <div className="form-group wow fadeInUp animated">
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div
                  data-wow-delay=".1s"
                  className="form-group wow fadeInUp animated"
                >
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div
                  data-wow-delay=".2s"
                  className="form-group wow fadeInUp animated"
                >
                  <textarea
                    placeholder="Message"
                    rows="7"
                    name="message"
                    id="message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  data-wow-delay=".3s"
                  className="btn btn-sm btn-block wow fadeInUp animated"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
              <div className="ajax-response"></div>
            </form>
          </div>
          <div
            className="col-xs-12 col-sm-4 col-md-4 wow bounceIn animated map"
            data-wow-delay=".5s"
          >
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6508922.473104964!2d-123.76275651635396!3d37.19583981824279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCalifornia%2C+United+States!5e0!3m2!1sen!2sin!4v1450994260631"
              width="100%"
              height="250"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
          <div
            className="col-xs-12 col-sm-4 col-md-4 wow bounceIn animated"
            data-wow-delay=".6s"
          >
            <section id="text-15" className="widget widget_text">
              <h3 className="widget-title">California, United States</h3>{" "}
              <div className="textwidget">
                785, Firs Avenue, place Mall,
                <br />
                <p>
                  Tel: 01 234-56786
                  <br />
                  Mobile: 01 234-56786
                  <br />
                  E-mail: <a href="#/">info@templatestock.com</a>
                </p>
                <a href="#/">Get directions on the map</a> →
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
