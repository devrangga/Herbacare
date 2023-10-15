// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

// import { teraphyPlacesData } from "../constants";
import axios from "axios";
import { useEffect, useState } from "react";

const remap = (timestamp) => {
  const date = new Date(timestamp);
  const originalHour = date.getUTCHours();
  date.setUTCHours(originalHour + 6);
  const newHour = date.getUTCHours();
  const newMinutes = date.getUTCMinutes();
  const formattedHour = newHour < 10 ? `0${newHour}` : newHour;
  const formattedMinutes = newMinutes < 10 ? `0${newMinutes}` : newMinutes;
  const formattedResult = `${formattedHour}:${formattedMinutes}`;
  return formattedResult;
};

const TeraphyCard = () => {
  const [teraphy, setTeraphy] = useState(null);

  useEffect(() => {
    axios
      .get("https://herbacare.tech/api/klinik/all")
      .then((res) => {
        setTeraphy(res.data.data.slice(0, 3));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    teraphy && (
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
          {teraphy.map((item, index) => (
            <SwiperSlide
              key={index}
              className=" bg-grey-50 rounded-2xl transition-all ease-in-out overflow-hidden hover:brightness-110 hover:cursor-pointer group border-transparent hover:border-green-normal border-2"
            >
              <div className="overflow-hidden rounded-bl-2xl rounded-br-2xl ">
                <img
                  src={"https://herbacare.tech/" + item.klinik_image}
                  alt="place"
                  className="group-hover:scale-105 scale-100 transition-all ease-in-out"
                />
              </div>
              <div className="flex flex-col gap-1 p-4">
                <div className="font-extrabold text-green-dark">
                  {item.klinik_name}
                </div>
                <div className="font-medium text-green-normal">
                  {item.klinik_address}
                </div>
                <div className="font-medium text-grey-200">
                  {remap(item.klinik_open) + " - " + remap(item.klinik_close)}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
};

export default TeraphyCard;
