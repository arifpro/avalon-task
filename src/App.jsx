// import { Suspense } from "react";
import {
  Preloader,
  Header,
  About,
  HowItWorks,
  Screenshots,
  Price,
  Contact,
} from "./components";
import Layout from "./layout";

const App = () => {
  return (
    <div>
      {/* <Suspense fallback={<Preloader />}></Suspense> */}
      <Preloader />

      <Layout>
        <Header />
        <About />
        <HowItWorks />
        <Screenshots />
        <Price />
        <Contact />
      </Layout>
    </div>
  );
};

export default App;
