import { articlesData } from "../constants";
import { Article } from "../components";
import { articleLogo } from "../assets/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
const Articles = () => {
  const [article, setArticle] = useState(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios
      .get("https://herbacare.tech/api/article/all")
      .then((res) => {
        console.log(res);
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
              item.title && (
                <Article
                  key={index}
                  itemData={item}
                  onClick={() => {
                    setOpen(true);
                    setSelected(item);
                  }}
                />
              )
          )}
        </div>
        {selected && (
          <Modal open={open} onClose={() => setOpen(false)}>
            <img
              src={"https://herbacare.tech/" + selected.image}
              className="w-52 rounded-2xl"
            />
            <h2 className="text-xl py-2 font-bold">{selected.title}</h2>
            <h2 className="text-xl py-2 ">
              Baca selengkapnya di aplikasi Herbacare
            </h2>
          </Modal>
        )}
      </div>
    )
  );
};

export default Articles;
