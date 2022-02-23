import "./styles.css";

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

          {/* left side */}
          <div className="col-xs-12 col-sm-4 col-md-4">
            <Item
              delayTime=".5s"
              iconName="apple"
              title="Lorem ipsum"
              desc="Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum."
            />
            <Item
              delayTime=".6s"
              iconName="rocket"
              title="Lorem ipsum"
              desc="Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum."
            />
            <Item
              delayTime=".7s"
              iconName="film"
              title="Lorem ipsum"
              desc="Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum."
            />
          </div>

          {/* center side */}
          <div
            className="col-xs-12 col-sm-4 col-md-4 wow bounceIn animated textcenter"
            data-wow-delay=".4s"
          >
            <img src="/assets/img/slide-bg.png" alt="slide-bg" />
          </div>

          {/* right side */}
          <div className="col-xs-12 col-sm-4 col-md-4">
            <Item
              right
              delayTime=".5s"
              iconName="android"
              title="Lorem ipsum"
              desc="Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum."
            />

            <Item
              right
              delayTime=".6s"
              iconName="css3"
              title="Lorem ipsum"
              desc="Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum."
            />

            <Item
              right
              delayTime=".7s"
              iconName="users"
              title="Lorem ipsum"
              desc="Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Item = ({ delayTime, iconName, title, desc, right }) => (
  <section className="row">
    {right && <IconSection delayTime={delayTime} iconName={iconName} right />}
    <aside
      className={`col-xs-10 col-sm-10 col-md-10 wow fadeIn${
        !right ? "Left" : "Right"
      } animated text${right ? "left" : "right"}`}
      data-wow-delay={delayTime}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </aside>
    {!right && <IconSection delayTime={delayTime} iconName={iconName} />}
  </section>
);

const IconSection = ({ delayTime, iconName, right }) => (
  <aside
    className={`col-xs-2 col-sm-2 col-md-2 wow fadeIn${
      right ? "Left" : "Right"
    } animated`}
    data-wow-delay={delayTime}
  >
    <i className={`fa fa-${iconName} ${right ? "iconfont2" : "iconfont"}`}></i>
  </aside>
);

export default HowItWorks;
