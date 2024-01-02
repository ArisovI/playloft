import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Icons } from "../../assets";

const index = () => {
  return (
    <div className="container">
      <div className="mt-[65px]">
        <Swiper slidesPerView={4} loop>
          <SwiperSlide>
            <div className="flex flex-col gap-[35px] items-center justify-center w-[273px] h-[251px] rounded-[22px] shadow-platform">
              <img src={Icons.type1} alt="" />
              <h4>Все площадки</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-[35px] items-center justify-center w-[273px] h-[251px] rounded-[22px] shadow-platform">
              <img src={Icons.type2} alt="" />
              <h4>Бары</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-[35px] items-center justify-center w-[273px] h-[251px] rounded-[22px] shadow-platform">
              <img src={Icons.type3} alt="" />
              <h4>Коворкинги</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-[35px] items-center justify-center w-[273px] h-[251px] rounded-[22px] shadow-platform">
              <img src={Icons.type4} alt="" />
              <h4>Рестораны</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-[35px] items-center justify-center w-[273px] h-[251px] rounded-[22px] shadow-platform">
              <img src={Icons.type5} alt="" />
              <h4>Переговорные</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-[35px] items-center justify-center w-[273px] h-[251px] rounded-[22px] shadow-platform">
              <img src={Icons.type1} alt="" />
              <h4>Все площадки</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default index;
