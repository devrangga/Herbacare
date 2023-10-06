// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import { teraphyPlacesData } from "../constants";

const TeraphyCard = () => {
  return (
    <div>
      <Swiper
        slidesPerView={window.innerWidth > 525 ? 3 : 2}
        spaceBetween={window.innerWidth > 525 ? 24 : 12}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode, Pagination]}
        className="mySwiper h-[275px] lg:h-[425px]"
      >
        {teraphyPlacesData.map((item, index) => (
          <SwiperSlide
            key={index}
            className=" bg-grey-50 rounded-2xl transition-all ease-in-out overflow-hidden hover:brightness-110 hover:cursor-pointer group border-transparent hover:border-green-normal border-2"
          >
            <div className="overflow-hidden rounded-bl-2xl rounded-br-2xl ">
              <img
                src={item.imageURL}
                alt="place"
                className="group-hover:scale-105 scale-100 transition-all ease-in-out"
              />
            </div>
            <div className="flex flex-col gap-1 p-4">
              <div className="font-extrabold text-green-dark">{item.title}</div>
              <div className="font-medium text-green-normal">
                {item.address}
              </div>
              <div className="font-medium text-grey-200">{item.hour}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeraphyCard;
