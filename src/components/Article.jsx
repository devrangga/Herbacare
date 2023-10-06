const Article = ({ itemData }) => {
  return (
    <div className="flex flex-col p-4 gap-4  rounded-2xl bg-grey-50  ">
      <div className="relative rounded-2xl overflow-hidden group hover:cursor-pointer ">
        <img
          src={itemData.imageURL}
          alt="articleImg"
          className="rounded-2xl object-cover w-full h-full"
        />
        <div className="w-full h-full opacity-0 bg-gradient-to-t from-green-dark from-25% absolute top-[100px] rounded-2xl flex justify-center items-center group-hover:top-0 group-hover:opacity-100 transition-all ease-in-out">
          <div className="text-white">Visit This Page</div>
        </div>
      </div>
      <div className="flex flex-col  ">
        <div className="text-lg font-extrabold text-green-dark">
          {itemData.title}
        </div>
        <div className="text-grey-200">{itemData.description}</div>
      </div>
    </div>
  );
};

export default Article;
