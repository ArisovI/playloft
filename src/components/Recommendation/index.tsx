import React from "react";
import { Images, Icons } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Map } from "..";
import "swiper/css";
import Card from "../Card";
import { recommendationDate } from "../../types";

const Recommendation = () => {
  const navigation = {
    nextEl: ".recom-next-button",
    prevEl: ".recom-prev-button",
  };

  return (
    <section className="container ">
      <div className="flex justify-between items-center mt-[70px]">
        <h2 className="uppercase font-bold text-[32px] text-black leading-[37.92px]">
          рекомендуем
        </h2>
        <div className="flex gap-2">
          <button className="recom-prev-button border rounded-[6px] border-pink p-[17px] rotate-180">
            <img src={Icons.arrow} alt="" />
          </button>
          <button className="recom-next-button border rounded-[6px] border-pink p-[17px]">
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
      <Map />
    </section>
  );
};

export default Recommendation;
