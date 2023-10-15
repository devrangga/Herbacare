import { useEffect, useState } from "react";
import { herbacareLogo, menuLogo } from "../assets/icons";
import { navLinks } from "../constants";
import { Button } from "../components";
import { playstore } from "../assets/images";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrolled = scrollY > 200;
  return (
    <header className="w-full padding-x my-8 fixed z-10" data-aos="fade-down">
      <nav
        className={`flex justify-between items-center border-0 shadow-3xl px-8 lg:px-16 py-8 max-lg:py-4 rounded-lg relative ${
          isScrolled
            ? "border-2 border-grey-50 shadow-4xl bg-white"
            : "border-0 shadow-3xl bg-white"
        } transition-all ease-in-out`}
      >
        <a href="/">
          <img
            src={herbacareLogo}
            alt="logo"
            className="m-0 w-[150px] h-[50px]"
          />
        </a>

        <button
          onClick={() => setMenu((prev) => !prev)}
          className=" hidden max-xl:block relative"
        >
          <img
            src={menuLogo}
            alt=""
            className="m-0 w-auto h-[30px] filter-green-dark"
          />

          <div
            className={`right-0 absolute  flex-col gap-8 bg-white shadow-xl border-2 border-grey-50 p-2 text-center rounded-lg transition-all ${
              menu ? "opacity-100 flex" : "opacity-0 hidden"
            }`}
          >
            {navLinks.map((item, index) => (
              <a
                href={item.href}
                key={index}
                className="px-8 py-2 rounded-lg hover:bg-green-normal hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </button>

        <div className="flex justify-between gap-12  max-xl:hidden text-green-normal text-xl">
          {navLinks.map((item, index) => (
            <div
              key={index}
              className="hover:text-green-semilight transition-all ease-in-out"
            >
              <a href={item.href}>{item.label}</a>
            </div>
          ))}
        </div>
        <div className="block max-xl:hidden">
          <Button label={"Download"} logo={playstore} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
