import { articlesData } from "../constants";
import { Article } from "../components";
import { articleLogo } from "../assets/icons";
import { useEffect, useState } from "react";
import axios from "axios";

const Articles = () => {
  const [article, setArticle] = useState(null);
  useEffect(() => {
    axios
      .get("https://herbacare.tech/api/article/all")
      .then((res) => {
        setArticle(res.data.data.slice(0, 4));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    article && (
      <div
        className="flex flex-col gap-8 padding-x py-24 justify-end"
        data-aos="fade-left"
      >
        <div className="flex flex-row items-center gap-8 justify-end">
          <div className="flex flex-col text-start text-2xl font-extrabold lg:text-4xl">
            <div className="">Artikel Kesehatan</div>
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

        <div className="grid  grid-cols-2 gap-4">
          {article.map(
            (item, index) =>
              item.title && <Article key={index} itemData={item} />
          )}
        </div>
      </div>
    )
  );
};

export default Articles;
