import { useEffect, useState } from "react";
import { herbacareLogo, menuLogo } from "../assets/icons";
import { navLinks } from "../constants";
import { Button } from "../components";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

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
    <header className=" w-full padding-x my-8 fixed z-10">
      <nav
        className={`flex justify-between items-center border-0 shadow-3xl px-8 lg:px-16 py-8 max-lg:py-4 rounded-lg ${
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
        <div className="text-green-normal hidden max-xl:block">
          <img
            src={menuLogo}
            alt=""
            className="m-0 w-auto h-[30px] filter-green-dark"
          />
        </div>
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
          <Button label={"Login"} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
