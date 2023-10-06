import { dropDownData } from "../constants";
import { Dropdown } from "../components";
import { stepsImage } from "../assets/images";
import { heartLogo } from "../assets/icons";

const Dropdowns = () => {
  return (
    <div className="padding-x py-12 flex flex-col gap-8" data-aos="fade-right">
      <div className="flex flex-row items-center gap-8 ">
        <div>
          <img
            src={heartLogo}
            alt="heartLogo"
            className="filter-green-normal h-[50px] w-auto"
          />
        </div>
        <div className="flex flex-col text-start text-2xl font-extrabold lg:text-4xl">
          <div className="">3 Langkah untuk</div>
          <div className=" text-gradient ">Hidup Lebih Sehat</div>
        </div>
      </div>

      <div className="grid grid-rows-1 md:grid-cols-2">
        <div className="w-full h-full hidden md:block">
          <img src={stepsImage} alt="steps" className="object-cover" />
        </div>

        <div className="flex flex-col gap-4">
          {dropDownData.map((item, index) => (
            <Dropdown
              key={index}
              titleLogo={item}
              title={item}
              content={item}
              arrow={item}
              show={index == 0 ? true : false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdowns;
