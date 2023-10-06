import {
  Hero,
  Navbar,
  Credible,
  TeraphyPlaces,
  Dropdowns,
  Articles,
  Footer,
} from "./sections";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <main className="font-outfit relative">
      <Navbar />
      <Hero />
      <Credible />
      <TeraphyPlaces />
      <Dropdowns />
      <Articles />
      <Footer />
    </main>
  );
};

export default App;
