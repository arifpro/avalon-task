import { Suspense } from "react";
import Counter from "./components/state_test/Counter";
import {
  Preloader,
  Navbar,
  Header,
  About,
  HowItWorks,
  Screenshots,
  Price,
  Contact,
  Footer,
} from "./components";

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Suspense fallback={<Preloader />}></Suspense> */}
      <Preloader />
      <Navbar />
      <Header />
      <About />
      <HowItWorks />
      <Screenshots />
      <Price />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
