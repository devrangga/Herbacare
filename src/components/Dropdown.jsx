import { useState } from "react";
const Dropdown = ({ titleLogo, title, arrow, content, show }) => {
  const [isShowed, setIsShowed] = useState(show);
  return (
    <div
      className={`bg-grey-50 p-4 rounded-xl
       group transition-all ease-in-out grid grid-rows-1 gap-4 items-center border-2  ${
         isShowed ? "border-green-normal" : "border-transparent"
       }`}
    >
      <div className="flex justify-between items-center">
        <img
          src={titleLogo.titleLogo}
          alt="logo"
          className="w-[25px] h-auto filter-green-normal"
        />
        <div className="font-extrabold text-green-normal">{title.title}</div>
        <button onClick={() => setIsShowed((prev) => !prev)}>
          <img
            src={arrow.arrowLogo}
            alt="arrow"
            className={`transition-all ease-in-out w-[25px] h-auto filter-green-normal origin-center  ${
              isShowed ? "0" : "rotate-[-90deg]"
            }`}
          />
        </button>
      </div>

      <div className={`${isShowed ? "block" : "hidden"}  text-grey-500`}>
        {content.content}
      </div>
    </div>
  );
};

export default Dropdown;
