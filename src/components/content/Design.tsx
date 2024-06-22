import { Component } from "lucide-react";
import ComonComp from "./ComonComp";

interface DesignProp {
  toggleDesign: () => void;
  openDesign: boolean;
  setSize: (value: number) => void;
  size: number;
  setLevel: (value: string) => void;
  level: string;
  marginSize: number;
  setMarginSize: (val: number) => void;
  designActive: boolean;
}

const Design: React.FC<DesignProp> = ({
  toggleDesign,
  openDesign,
  setSize,
  size,
  setLevel,
  level,
  marginSize,
  setMarginSize,
  designActive,
}) => {
  return (
    <>
      <ComonComp
        toggleComp={toggleDesign}
        compActive={designActive}
        openComp={openDesign}
        title="DESIGN"
        icon={Component}
      />

      {openDesign && (
        <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-200 rounded-md ">
          <div className="grid grid-cols-1 justify-items-center p-0">
            <div className="grid  w-full items-center">
              <h3 className="text-center 1">Size (px)</h3>
            </div>
            <div className="grid justify-items-center w-full border-">
              <input
                type="number"
                onChange={(e) => setSize(parseInt(e.target.value, 10) || 0)}
                value={size}
                className="border-transparent focus:border-b-[#03A9F4] focus:outline-none w-1/2 text-center rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 justify-items-center  ">
            <div className="flex">
              <h3> Error Level:</h3>
            </div>

            <div className="grid justify-items-center">
              <select
                className="border-transparent focus:border-b-[#03A9F4] focus:outline-none ext-center rounded-md"
                onChange={(e) => setLevel(e.target.value)}
                value={level}
              >
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="Q">Q</option>
                <option value="H">H</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 justify-items-center  ">
            <div className="flex">
              <h3> Margin Size:</h3>
            </div>

            <div className="grid justify-items-center">
              <input
                className="border-transparent focus:border-b-[#03A9F4] focus:outline-none rounded-md w-1/2 text-center"
                type="number"
                step={1}
                value={marginSize}
                onChange={(e) =>
                  setMarginSize(Math.floor(e.target.valueAsNumber))
                }
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Design;
