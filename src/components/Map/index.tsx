import React from "react";
import { YMaps } from "@pbe/react-yandex-maps";
import { Placemark } from "@pbe/react-yandex-maps";
import { Map as YMap } from "@pbe/react-yandex-maps";
import { Icons } from "../../assets";
const Map = () => {
  return (
    <div className="mt-[23px] rounded-[22px] overflow-hidden relative">
      <YMaps>
        <YMap
          className="w-full h-[191px]"
          defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
        >
          <Placemark defaultGeometry={[55.751574, 37.573856]} />
        </YMap>
      </YMaps>
      <a
        href="#"
        className="w-[334px] h-[60px] flex gap-[10px] justify-center py-[14px] px-[26px] bg-gradient-to-r from-[#7C68CB] to-[#C968CB] rounded-[44px] items-center absolute bottom-[28px] left-[38%]"
      >
        <span className="font-semibold text-[20px] text-white leading-[23.78px]">
          Подробнее
        </span>
        <img src={Icons.arrowRight} alt="" />
      </a>
    </div>
  );
};

export default Map;
