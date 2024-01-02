import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Icons } from "../../assets";

const Platforms = () => {
  const navigation = {
    nextEl: ".platforms-next-button",
    prevEl: ".platforms-prev-button",
  };
  return (
    <div className="container">
      <div className="flex justify-between items-center mt-[70px]">
        <h2 className="text-[32px] leading-[38px] text-black font-bold uppercase">
          Все типы площадок
        </h2>

        <div className="flex gap-2">
          <button className="platforms-prev-button border rounded-[6px] border-pink p-[17px] rotate-180">
            <img src={Icons.arrow} alt="" />
          </button>
          <button className="platforms-next-button border rounded-[6px] border-pink p-[17px]">
            <img src={Icons.arrow} alt="" />
          </button>
        </div>
      </div>
      <div className="mt-[40px]">
        <Swiper
          slidesPerView={5}
          loop
          modules={[Navigation]}
          navigation={navigation}
          className="shadow-platform rounded-[22px]"
        >
          <SwiperSlide>
            <div className="flex flex-col gap-[35px] items-center justify-center w-[273px] h-[251px] rounded-[22px] ">
              <img src={Icons.type1} alt="" />
              <h4>Все площадки</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-[35px] items-center justify-center w-[273px] h-[251px] rounded-[22px] ">
              <img src={Icons.type2} alt="" />
              <h4>Бары</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-[35px] items-center justify-center w-[273px] h-[251px] rounded-[22px] ">
              <img src={Icons.type3} alt="" />
              <h4>Коворкинги</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-[35px] items-center justify-center w-[273px] h-[251px] rounded-[22px] ">
              <img src={Icons.type4} alt="" />
              <h4>Рестораны</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-[35px] items-center justify-center w-[273px] h-[251px] rounded-[22px] ">
              <img src={Icons.type5} alt="" />
              <h4>Переговорные</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-[35px] items-center justify-center w-[273px] h-[251px] rounded-[22px] ">
              <img src={Icons.type1} alt="" />
              <h4>Все площадки</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Platforms;
