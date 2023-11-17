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
        <div className="grid gap-2">
          <div>
            <label>
              Size(px):
              <br />
              <input
                type="number"
                onChange={(e) => setSize(parseInt(e.target.value, 10) || 0)}
                value={size}
                className="border-transparent focus:border-b-[#03A9F4] focus:outline-none"
              />
            </label>
          </div>

          <div>
            <label>
              Error Level:
              <br />
              <select
                className="border-transparent focus:border-b-[#03A9F4] focus:outline-none"
                onChange={(e) => setLevel(e.target.value)}
                value={level}
              >
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="Q">Q</option>
                <option value="H">H</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Margin Size:
              <br />
              <input
                className="border-transparent focus:border-b-[#03A9F4] focus:outline-none"
                type="number"
                step={1}
                value={marginSize}
                onChange={(e) =>
                  setMarginSize(Math.floor(e.target.valueAsNumber))
                }
              />
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default Design;
