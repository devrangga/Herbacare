import { dropDownData } from "../constants";
import { Dropdown } from "../components";
import { stepsImage } from "../assets/images";

const Dropdowns = () => {
  return (
    <div className="padding-x py-12">
      <div className="grid grid-rows-1 md:grid-cols-2">
        <div className="w-full h-full hidden md:block">
          <img src={stepsImage} alt="steps" className="object-cover" />
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col text-end text-2xl font-extrabold lg:text-4xl">
            <div className="">3 Langkah untuk</div>
            <div className=" text-gradient ">Hidup Lebih Sehat</div>
          </div>
          <div className="flex flex-col gap-4">
            {dropDownData.map((item, index) => (
              <Dropdown
                key={index}
                titleLogo={item}
                title={item}
                content={item}
                arrow={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdowns;
