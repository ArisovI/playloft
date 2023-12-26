import React from "react";
import { Icons, Images } from "../../assets";
import Pros from "../Pros";
const prosData = [
  {
    title: "Гарантия вашего мероприятия",
    text: "В случае накладок подберём новую площадку или вернём деньги",
    icon: Icons.pros1,
  },
  {
    title: "Только свободные даты",
    text: "Мы ежедневно проверяем календари площадок, отмечая занятое время.",
    icon: Icons.pros2,
  },
  {
    title: "Только реальные цены",
    text: "Указав тип и даты, вы увидите реальную цену аренды площадки.",
    icon: Icons.pros3,
  },
  {
    title: "Прямой контакт с менеджером",
    text: "Мы отправим вам номер телефона менеджера сразу после оставления заявки.",
    icon: Icons.pros4,
  },
];
const Main = () => {
  return (
    <main className="container">
      <div className="mt-[117px] flex-col relative">
        <h1 className="text-[32px] uppercase font-bold leading-[37.92px] w-[573px] text-black">
          сервис бронирования лофтов и студий для мероприятий
        </h1>
        <p className="text-[20px] font-normal leading-[23.7px] text-gray w-[510px] mt-[25px]">
          Через наш сайт вы найдёте площадку под любой тип мероприятия быстрее,
          чем номер в отеле или товар в интернет-магазине.
        </p>
        <div className="w-[709px] gap-[19px] flex flex-wrap mt-[40px]">
          <button className="w-[345px] h-[70px] rounded-[44px] bg-white flex items-center justify-start py-[24px] px-[26px] gap-[10px]">
            <img src={Icons.date} alt="Icon date" />
            <span className="text-[18px] font-normal leading-[21.33px] text-gray">
              Дата и время
            </span>
            <img className="ml-auto" src={Icons.arrowBottom} alt="Icon arrow" />
          </button>

          <button className="w-[345px] h-[70px] rounded-[44px] bg-white flex items-center justify-start py-[24px] px-[26px] gap-[10px]">
            <img src={Icons.location} alt="Icon date" />
            <span className="text-[18px] font-normal leading-[21.33px] text-gray">
              Тип мероприятия
            </span>
            <img className="ml-auto" src={Icons.arrowBottom} alt="Icon arrow" />
          </button>

          <button className="w-[345px] h-[70px] rounded-[44px] bg-white flex items-center justify-between py-[23px] px-[40px] gap-[10px] mt-[6px] bg-gradient-to-r from-[#7C68CB] to-[#C968CB]">
            <span className="text-[22px] font-semibold leading-[26.07px] text-white">
              Подобрать площадку
            </span>
            <img src={Icons.arrowRight} alt="Icon arrow" />
          </button>
        </div>
        <div className="cities absolute right-0 top-[-95px]">
          <div className="cities-relative relative">
            <img src={Images.cities} alt="Cities picture" />
            <div className="absolute top-[180px] left-[50px] w-[187px] h-[95px] bg-message-block flex justify-center items-center pb-[18px]">
              <img
                src={Icons.pink_location}
                className="w-[30px] h-[30px] object-contain mr-3"
                alt="Location"
              />
              <p className="w-[100px] font-semibold leading-[14.98px] text-[16px] text-black">
                Более <span className="text-[#7C68CB]">4 840</span> площадки
              </p>
            </div>
            <div className="absolute bottom-[179px] right-[196px] w-[230px] h-[120px] flex justify-center items-center bg-message-block bg-[length:100%_120px] pb-[18px] bg-no-repeat">
              <img
                src={Icons.shop}
                className="w-[30px] h-[30px] object-contain mr-3"
                alt="Location"
              />
              <p className="w-[153px] font-semibold leading-[14.98px] text-[16px] text-black">
                Более <span className="text-[#7C68CB]"> 3 484 </span> кафе и
                ресторанов
              </p>
            </div>
            <div className="absolute top-[100px] right-[100px] w-[187px] h-[95px] bg-message-block flex justify-center items-center pb-[18px]">
              <img
                src={Icons.office}
                className="w-[30px] h-[30px] object-contain mr-3"
                alt="Location"
              />
              <p className="w-[100px] font-semibold leading-[14.98px] text-[16px] text-black">
                Более <span className="text-[#7C68CB]">2 484</span> офисов
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[130px] flex gap-[20px]">
        {prosData.map((prosItem, index) => (
          <Pros
            key={index}
            title={prosItem.title}
            text={prosItem.text}
            icon={prosItem.icon}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
