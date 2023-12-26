import React from "react";
import { Images, Icons } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Map } from "..";
import "swiper/css";

const recommendationDate = [
  {
    title: "Стильный лофт и крыша на дизайн-заводе Flacon №2316",
    text: "Арт-пространство на дизайн-заводе - светлый лофт для проведения фотосъемок, видеосъемок, мероприятий",
    price: "от 1 400 до 10 000 ₽ / час",
    img: Images.recommendation1,
    styles: [
      {
        icon: Icons.style1,
        info: "1000 м²",
      },
      {
        icon: Icons.style2,
        info: "40",
      },
      {
        icon: Icons.style3,
        info: "Да",
      },
      {
        icon: Icons.style4,
        info: "Да",
      },
    ],
  },
  {
    title: "Стильный лофт и крыша на дизайн-заводе Flacon №2316",
    text: "Арт-пространство на дизайн-заводе - светлый лофт для проведения фотосъемок, видеосъемок, мероприятий",
    price: "от 2 500 до 4 000 ₽ / час",
    img: Images.recommendation2,
    styles: [
      {
        icon: Icons.style1,
        info: "1000 м²",
      },
      {
        icon: Icons.style2,
        info: "40",
      },
      {
        icon: Icons.style3,
        info: "Да",
      },
      {
        icon: Icons.style4,
        info: "Да",
      },
    ],
  },
  {
    title: "Стильный лофт и крыша на дизайн-заводе Flacon №2316",
    text: "Арт-пространство на дизайн-заводе - светлый лофт для проведения фотосъемок, видеосъемок, мероприятий",
    price: "от 4 000 до 9 000 ₽ / час",
    img: Images.recommendation3,
    styles: [
      {
        icon: Icons.style1,
        info: "1000 м²",
      },
      {
        icon: Icons.style2,
        info: "40",
      },
      {
        icon: Icons.style3,
        info: "Да",
      },
      {
        icon: Icons.style4,
        info: "Да",
      },
    ],
  },
  {
    title: "Стильный лофт и крыша на дизайн-заводе Flacon №2316",
    text: "Арт-пространство на дизайн-заводе - светлый лофт для проведения фотосъемок, видеосъемок, мероприятий",
    price: "от 1 000 до 5 000 ₽ / час",
    img: Images.recommendation4,
    styles: [
      {
        icon: Icons.style1,
        info: "1000 м²",
      },
      {
        icon: Icons.style2,
        info: "40",
      },
      {
        icon: Icons.style3,
        info: "Да",
      },
      {
        icon: Icons.style4,
        info: "Да",
      },
    ],
  },
  {
    title: "Стильный лофт и крыша на дизайн-заводе Flacon №2316",
    text: "Арт-пространство на дизайн-заводе - светлый лофт для проведения фотосъемок, видеосъемок, мероприятий",
    price: "от 1 000 до 5 000 ₽ / час",
    img: Images.recommendation4,
    styles: [
      {
        icon: Icons.style1,
        info: "1000 м²",
      },
      {
        icon: Icons.style2,
        info: "40",
      },
      {
        icon: Icons.style3,
        info: "Да",
      },
      {
        icon: Icons.style4,
        info: "Да",
      },
    ],
  },
 
];

const Recommendation = () => {

  const navigation = {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  };

  return (
    <section className="container ">
      <div className="flex justify-between items-center mt-[70px]">
        <h2 className="uppercase font-bold text-[32px] text-black leading-[37.92px]">
          рекомендуем
        </h2>
        <div className="flex gap-2">
          <button className="swiper-button-prev border rounded-[6px] border-pink p-[17px] rotate-180">
            <img src={Icons.arrow} alt="" />
          </button>
          <button className="swiper-button-next border rounded-[6px] border-pink p-[17px]">
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
        {recommendationDate.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="group relative">
              <div className="relative">
                <span className="flex items-center gap-[5px] p-[8px] bg-[#121212] absolute opacity-[60%] rounded-[22px] top-[11px] left-[15px]">
                  <img
                    src={Icons.pink_location}
                    className="w-[8px] h-[11px]"
                    alt=""
                  />
                  <p className="font-normal text-[12px] leading-[14.22px] text-white">
                    Центр
                  </p>
                </span>
                <img src={item.img} alt="" />
                <span className="flex items-center gap-[5px] p-[8px] bg-[#121212] absolute opacity-[60%] rounded-[22px] top-[11px] right-[30px]">
                  <p className="font-normal text-[12px] leading-[14.22px] text-white">
                    5.0
                  </p>
                  <img src={Icons.star} alt="" />
                </span>
              </div>
              <div className="px-[20px] py-[25px]">
                <h3 className="font-semibold text-[18px] leading-[21.33px] text-black">
                  {item.title}
                </h3>
                <p className="mt-[15px] font-normal text-[13px] leading-[15.41px] text-gray">
                  {item.text}
                </p>
                <ul className="mt-[18px] flex gap-[2.49px]">
                  {item.styles.map((style, index) => (
                    <li
                      key={index}
                      className="w-[73px] h-[66px] border rounded-xl border-[#F5F5F5] flex gap-[7px] flex-col justify-center items-center"
                    >
                      <img src={style.icon} alt="" />
                      <p className="font-semibold text-[14px] leading-[16.59px] text-black w-max">
                        {style.info}
                      </p>
                    </li>
                  ))}
                </ul>
                <span className="font-bold text-xl leading-6 text-[#7C68CB] mt-5 block">
                  {item.price}
                </span>
              </div>
              <div className="details w-[96%] rounded-[22px] h-[100%] absolute left-0 top-0 bg-[#201E34B2] flex flex-col gap-[244px] justify-center items-center opacity-0 group-hover:opacity-100 group-hover:transition duration-1000">
                <button>
                  <img src={Icons.play} alt="" />
                </button>
                <a href="#" className="flex gap-[10px] py-[14px] px-[26px] bg-gradient-to-r from-[#7C68CB] to-[#C968CB] rounded-[44px] items-center">
                  <span className="font-semibold text-[15px] text-white leading-[17.78px]">
                    Подробнее
                  </span>
                  <img src={Icons.arrowRight} alt="" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Map />
    </section>
  );
};

export default Recommendation;
