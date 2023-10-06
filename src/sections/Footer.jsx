import { footerSocialMedia, navLinks } from "../constants";
import { herbacareLogo } from "../assets/icons";

const Footer = () => {
  return (
    <div className="flex justify-between flex-col md:gap-24 md:flex-row padding-x md:py-16 py-8 gap-4 bg-green-light">
      <div className="flex flex-col gap-4">
        <div>
          <img src={herbacareLogo} alt="herbacareLogo" />
        </div>
        <div className="text-green-normal w-[75%] inline-flex flex-wrap">
          Kita adalah team professional yang terdiri dari 5 orang berpengalaman
          tinggi yang memiliki visi misi yang visioner demi mewujudkan aspirasi
          bangsa. Kita adalah team professional yang terdiri dari 5 orang
          berpengalaman tinggi yang memiliki visi misi yang visioner demi
          mewujudkan aspirasi bangsa.
        </div>
      </div>

      <div className="flex flex-row gap-24">
        <div className="grid grid-flow-row">
          <div className="font-bold">Menu</div>
          {navLinks.map((item, index) => (
            <a
              href={item.href}
              key={index}
              className="text-green-normal hover:text-green-dark"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="grid grid-flow-row ">
          <div className="font-bold">Sosial Media</div>
          {footerSocialMedia.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="text-green-normal hover:text-green-dark"
            >
              {item.soscmed}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
