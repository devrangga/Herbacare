import React from "react";
import { TeraphyCard } from "../components";

const TeraphyPlaces = () => {
  return (
    <div className="padding-x py-24 flex flex-col gap-8 lg:gap-16">
      <div className="flex flex-col gap-2 lg:gap-4 text-center text-green-dark">
        <div className="text-2xl lg:text-4xl font-extrabold ">
          Temukan Tempat Terbaik <br />
          <span className="text-gradient"> Terapi</span> Terbaik Anda
        </div>
        <div className="text-base lg:text-2xl font-medium text-grey-500">
          Badan anda sehat sehingga beraktivitas menjadi nyaman.
        </div>
      </div>
      <TeraphyCard />
    </div>
  );
};

export default TeraphyPlaces;
