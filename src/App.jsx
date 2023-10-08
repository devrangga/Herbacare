import { BrowserRouter, Routes, Route } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Main } from "./modules/Main";
import Herbaverse from "./modules/Herbaverse";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/vr" element={<Herbaverse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
