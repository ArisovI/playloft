import { Icons, Images } from "../../assets";

const Connect = () => {
  return (
    <div className="container">
      <div className="flex border-[3px] border-[#FFF6FFF5] rounded-[22px] py-[53px] px-[47px] mt-[65px]">
        <div>
          <h3 className="font-bold text-[32px] text-black leading-[38px]">
            Подключайтесь
          </h3>
          <p className="font-normal text-[18px] leading-[22px] text-gray w-[519px] mt-[29px]">
            Если вам нужна площадка для мероприятия, у нас большой выбор
            пространств под любые требования.
          </p>
          <p className="font-normal text-[18px] leading-[22px] text-gray mt-[20px] w-[519px]">
            А арендодателям мы предлагаем удобную CRM-систему для управления
            бронированиями и аналитики.
          </p>

          <div className="flex gap-[12px] items-center mt-[36px]">
            <button className="w-[211px] h-[50px] flex gap-[15px] justify-center bg-gradient-to-r from-[#7C68CB] to-[#C968CB] rounded-[44px] items-center">
              <span className="font-semibold text-[16px] text-white">
                Перейти в CRM
              </span>
              <img src={Icons.arrowRight} alt="" />
            </button>
            <button className="w-[197px] h-[50px] rounded-[44px] border-[3px] border-[#8F69CC] text-[16px] text-black font-semibold leading-[19px]">
              Поиск площадок
            </button>
          </div>
        </div>

        <ul className="flex gap-5">
          <li className="border border-[#E8E0E0] rounded-[22px] flex flex-col justify-center items-center gap-[30px] w-[254px] h-[271px]">
            <img src={Images.connect1} alt="" />
            <span className="text-[18px] text-black leading-[22px] text-center font-medium">
              Оставьте заявку
            </span>
          </li>

          <li className="border border-[#E8E0E0] rounded-[22px] flex flex-col justify-center items-center gap-[30px] w-[254px] h-[271px]">
            <img src={Images.connect2} alt="" />
            <span className="text-[18px] text-black leading-[22px] text-center font-medium">
              Свяжитесь с менеджером
            </span>
          </li>

          <li className="border border-[#E8E0E0] rounded-[22px] flex flex-col justify-center items-center gap-[30px] w-[254px] h-[271px]">
            <img src={Images.connect3} alt="" />
            <span className="text-[18px] text-black leading-[22px] text-center font-medium">
              Оплатите площадку
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Connect;
