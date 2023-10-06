import {
  Hero,
  Navbar,
  Credible,
  TeraphyPlaces,
  Dropdowns,
  Articles,
  Footer,
} from "./sections";

const App = () => {
  return (
    <main className="font-outfit relative">
      <Navbar />
      <Hero />
      <Credible />
      <TeraphyPlaces />
      <Dropdowns />
      <Articles />
      <Footer />
      {/* <div className="text-red-300">aaa</div> */}
    </main>
  );
};

export default App;
