import { heroData } from "../constants";
import { heroImage } from "../assets/images";

const Hero = () => {
  return (
    <div className="padding-x flex max-sm:flex-col flex-row justify-center items-center pt-48 text-black">
      <div className="flex flex-col gap-2 lg:gap-4">
        <div className="text-green-normal lg:text-2xl">{heroData.title}</div>
        <div className="text-green-dark font-extrabold text-4xl lg:text-[84px] leading-tight ">
          Temukan Solusi Herbal dengan <br />
          <span className="text-gradient">Herbacare</span>
        </div>
        <div className="text-grey-200 lg:text-2xl">{heroData.description}</div>
      </div>
      <div className="lg:max-w-[75%] w-full ">
        <img src={heroImage} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
