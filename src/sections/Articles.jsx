import { articlesData } from "../constants";
import { Article } from "../components";
import { articleLogo } from "../assets/icons";

const Articles = () => {
  return (
    <div
      className="flex flex-col gap-8 padding-x py-24 justify-end"
      data-aos="fade-left"
    >
      <div className="flex flex-row items-center gap-8 justify-end">
        <div className="flex flex-col text-start text-2xl font-extrabold lg:text-4xl">
          <div className="">3 Langkah untuk</div>
          <div className=" text-gradient ">Hidup Lebih Sehat</div>
        </div>
        <div>
          <img
            src={articleLogo}
            alt="articleLogo"
            className="filter-green-normal h-[50px] w-auto"
          />
        </div>
      </div>

      <div className="grid grid-rows-2 grid-cols-2 gap-4">
        {articlesData.map((item, index) => (
          <Article key={index} itemData={item} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
