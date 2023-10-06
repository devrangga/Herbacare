import { credibleData } from "../constants";
import { gridBg } from "../assets/images";

const Credible = () => {
  return (
    <div className="padding-x my-12 relative">
      <div className="lg:py-16 py-8 grid grid-cols-3 self-center bg-gradient-to-t from-green-semilight to-green-light rounded-2xl">
        {credibleData.map((item, index) => (
          <div
            key={index}
            className="lg:gap-2 gap-1 flex lg:flex-row flex-col justify-center items-center text-green-normal max-lg:text-center"
          >
            <div className="lg:w-[100px] w-[35px] h-auto ">
              <img
                src={item.iconURL}
                alt="credible logo"
                className="filter-green-normal"
              />
            </div>
            <div className="flex flex-col lg:gap-2 font-medium">
              <div className="lg:text-4xl text-xl font-extrabold">
                {item.number}
              </div>
              <div className="lg:text-xl text-base">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Credible;
