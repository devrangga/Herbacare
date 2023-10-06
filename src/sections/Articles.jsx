import { articlesData } from "../constants";
import { Article } from "../components";

const Articles = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-4 padding-x py-24">
      {articlesData.map((item, index) => (
        <Article key={index} itemData={item} />
      ))}
    </div>
  );
};

export default Articles;
