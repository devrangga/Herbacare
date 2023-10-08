import React from "react";
import {
  Hero,
  Navbar,
  Credible,
  TeraphyPlaces,
  Dropdowns,
  Articles,
  Footer,
} from "../sections";
export const Main = () => {
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
