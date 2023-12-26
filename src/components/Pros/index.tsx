import React from "react";
interface IProsProps {
  title: string;
  text: string;
  icon: string;
}
const Pros: React.FC<IProsProps> = ({ title, text, icon }) => {
  return (
    <div className="w-[345px] h-[161px] rounded-[22px] py-[33px] pl-[36px] bg-white shadow-[0px_4px_33px_0px_#D0D6EC40] relative">
      <h3 className="font-semibold text-[18px] leading-[19.62px] text-black w-[155px]">
        {title}
      </h3>
      <p className="font-normal text-[14px] leading-[16.59px] text-gray mt-[10px] w-[193px]">
        {text}
      </p>
      <img className="absolute top-[38px] right-[21px]" src={icon} alt="" />
    </div>
  );
};

export default Pros;
