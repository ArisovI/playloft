import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { recommendationDate } from "../../types";
import { Card } from "..";
import { Icons } from "../../assets";

const Kids = () => {
  const navigation = {
    nextEl: ".kids-next-button",
    prevEl: ".kids-prev-button",
  };

  return (
    <div className="container">
      <div className="flex justify-between items-center mt-[70px]">
        <h2 className="uppercase font-bold text-[32px] text-black leading-[37.92px]">
          Площадки для детских праздников
        </h2>
        <div className="flex gap-2">
          <button className="kids-prev-button border rounded-[6px] border-pink p-[17px] rotate-180">
            <img src={Icons.arrow} alt="" />
          </button>
          <button className="kids-next-button border rounded-[6px] border-pink p-[17px]">
            <img src={Icons.arrow} alt="" />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        navigation={navigation}
        className="mt-[29px]"
        loop={true}
      >
        <div className="flex">
          {recommendationDate.map((item, index) => (
            <SwiperSlide key={index}>
              <Card item={item} key={index} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Kids;
