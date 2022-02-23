import { useSelector } from "react-redux";
import "./styles.css";

const Price = () => {
  const price = useSelector((state) => state.price);

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

          {price?.map((item, index) => (
            <div key={item.id}>
              <PriceListItem
                animation={item.animation}
                title={item.title}
                number={item.number}
                month={item.month}
                content={item.content}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PriceListItem = ({
  animation = "",
  title,
  number,
  month = "",
  content,
}) => (
  <div className={`col-xs-12 col-sm-4 col-md-4 wow ${animation} animated`}>
    <div className="price-wrapper">
      <h3 className="price-title">{title}</h3>
      <div className={`price ${title === "Standard" ? "standard" : ""}`}>
        <div className="value-box">
          <div className="value-box-content">
            <span className="value">
              <span className="number">{number}</span>
            </span>
            <span
              className={`month ${month.length === 0 ? "invisible" : ""}`}
            ></span>
          </div>
        </div>

        <div className="content-box">
          <ul>
            {content?.map((item, i) => (
              <li key={item + i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="sign-box">
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  </div>
);

export default Price;
