import React from "react";
import { motion } from "framer-motion";
import { Icons } from "../../assets";
const Header = () => {
  type ICreate = {
    initial: {
      opacity: number;
      x: number;
    };
    animate: {
      opacity: number;
      x: number;
      transition: {
        duration: number;
      };
    };
  };
  const create: ICreate = {
    initial: {
      opacity: 0,
      x: 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={create}
      initial="initial"
      animate="animate"
      className="container"
    >
      <header className="flex items-center justify-between pt-[41px]">
        <a href="#">
          <img src={Icons.logo} alt="Logo" />
        </a>
        <nav className="flex items-center w-[862px]">
          <ul className="flex items-center justify-between w-full">
            <li>
              <a
                className="font-normal text-[16px] text-[#676E74] hover:border-b hover:border-[#7C68CB] hover:pb-[12px] hover:text-[#464646] transition duration-200"
                href="#"
              >
                Выбрать зал
              </a>
            </li>
            <li>
              <a
                className="font-normal text-[16px] text-[#676E74] hover:border-b hover:border-[#7C68CB] hover:pb-[12px] hover:text-[#464646] transition duration-200"
                href="#"
              >
                Event-услуги
              </a>
            </li>
            <li>
              <a
                className="font-normal text-[16px] text-[#676E74] hover:border-b hover:border-[#7C68CB] hover:pb-[12px] hover:text-[#464646] transition duration-200"
                href="#"
              >
                Акции
              </a>
            </li>
            <li>
              <a
                className="font-normal text-[16px] text-[#676E74] hover:border-b hover:border-[#7C68CB] hover:pb-[12px] hover:text-[#464646] transition duration-200"
                href="#"
              >
                Идеи
              </a>
            </li>
            <li>
              <a
                className="font-normal text-[16px] text-[#676E74] hover:border-b hover:border-[#7C68CB] hover:pb-[12px] hover:text-[#464646] transition duration-200"
                href="#"
              >
                Избранное
              </a>
            </li>
            <li>
              <a
                className="font-normal text-[16px] text-[#676E74] hover:border-b hover:border-[#7C68CB] hover:pb-[12px] hover:text-[#464646] transition duration-200"
                href="#"
              >
                Контакты
              </a>
            </li>
            <li>
              <a
                className="font-normal text-[16px] text-[#676E74] hover:border-b hover:border-[#7C68CB] hover:pb-[12px] hover:text-[#464646] transition duration-200"
                href="#"
              >
                Добавить площадку
              </a>
            </li>
          </ul>
        </nav>
        <button className="flex justify-center items-center gap-[7px] rounded-[40px] w-[120px] h-[50px] bg-gradient-to-r from-[#7C68CB] to-[#C968CB]">
          <img src={Icons.door} alt="Icon door" />
          <span className="text-white text-[18px] leading-[21.33px] font-medium">
            Войти
          </span>
        </button>
      </header>
    </motion.div>
  );
};

export default Header;
