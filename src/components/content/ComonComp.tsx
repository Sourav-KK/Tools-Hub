import { Minus, Plus } from "lucide-react";

import React from "react";

interface ComonCompProp {
  toggleComp: () => void;
  compActive: boolean;
  openComp: boolean;
  title: string;
  icon: React.ElementType;
}

const ComonComp: React.FC<ComonCompProp> = ({
  toggleComp,
  compActive,
  openComp,
  title,
  icon: IconComp,
}) => {
  return (
    <>
      <div
        className="grid grid-cols-5 hover:bg-[#F2F8FC] bg-[#FFFFFF] hover:cursor-pointer shadow-lg rounded-md "
        onClick={toggleComp}
      >
        <div
          className={`
            ${compActive ? `bg-[#03A9F4]` : `bg-[#F2F8FC]`}
             flex items-center justify-center rounded-tl-md rounded-bl-md `}
        >
          {compActive ? (
            <IconComp color="#ffff" />
          ) : (
            <IconComp color="#5F676D" />
          )}
        </div>
        <div className=" pl-2 col-span-3">
          <h3 className="text-left text-sm md:text-lg ">{title}</h3>
        </div>
        <div className="flex items-center justify-center w-20%">
          {openComp ? <Minus color="#8c6969" /> : <Plus color="#8c6969" />}
        </div>
      </div>
    </>
  );
};

export default ComonComp;
