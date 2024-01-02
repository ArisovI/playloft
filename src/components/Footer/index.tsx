import { Icons } from "../../assets";

const menuItems = [
  {
    title: "МЕНЮ САЙТА",
    items: [
      "Главная страница",
      "Маркетплейс",
      "Москва",
      "Санкт-Петербург",
      "Event-услуги",
      "Реклама на сайте",
      "Журнал «Bash Life»",
    ],
  },
  {
    title: "КЛИЕНТАМ",
    items: [
      "Часто задаваемые вопросы",
      "FAQ",
      "Организационные мероприятия",
      "Индивидуальный подбор",
      "Контакты администрации",
    ],
  },
  {
    title: "Рейтинг VR-клубовъ",
    items: [
      "Где отметить детский праздник",
      "Как отметить День рождения",
      "Где и как провести праздник",
      "Какие вечеринки можно устроить",
      "Лучшие event-агентства Москвы",
      "Рейтинг VR-клубовъ",
    ],
  },
  {
    title: "Адреса",
    items: [
      "125040, Россия, Москва, Ленинградский проспект, 26к1",
      "190121, Россия, Санкт-Петербург, набережная реки Пряжки, 5",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-pink">
      <div className="container">
        <div className="py-[60px] flex justify-between">
          <div className="w-[320px]">
            <a href="#" className="flex gap-4 items-center">
              <img src={Icons.whiteLogo} alt="" />
              <h2 className="font-bold text-[35px] text-white leading-[40px] uppercase">
                playloft
              </h2>
            </a>
            <p className="mt-[44px] text-[13px] font-normal leading-[20px] text-white">
              Сервис бронирования лофтов и студий для мероприятий. Через наш
              сайт вы найдёте площадку под любой тип мероприятия быстрее, чем
              номер в отеле или товар в интернет-магазине.
            </p>
          </div>
          {menuItems.map((menu, index) => (
            <ul key={index} className="flex flex-col w-[215px] gap-[2px]">
              <h4 className="mb-[15px] font-semibold text-[18px] leading-[21px] text-white">
                {menu.title}
              </h4>
              {menu.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="text-[13px] text-white leading-[35px] font-normal"
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
