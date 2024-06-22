import { Paintbrush } from "lucide-react";
import ComonComp from "./ComonComp";

interface ColorsProps {
  toggleColors: () => void;
  openOpenColors: boolean;
  bgColor: string;
  setBgColor: (value: string) => void;
  fgColor: string;
  setFgColor: (value: string) => void;
  colorsActive: boolean;
}
const Colors: React.FC<ColorsProps> = ({
  toggleColors,
  openOpenColors,
  bgColor,
  setBgColor,
  fgColor,
  setFgColor,
  colorsActive,
}) => {
  return (
    <>
      <ComonComp
        toggleComp={toggleColors}
        compActive={colorsActive}
        openComp={openOpenColors}
        title="SET COLOR"
        icon={Paintbrush}
      />

      {openOpenColors && (
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-200 rounded-md ">
          <div className="grid grid-cols-2 items-center justify-items-center ">
            <h3 className="text-clip text-sm  ">Background color: </h3>
            <input
              type="color"
              onChange={(e) => setBgColor(e.target.value)}
              value={bgColor}
              className="cursor-pointer w-5 rounded-full"
            />
          </div>

          <div className="grid grid-cols-2 items-center justify-items-center md:border-l-red-950 md:border-l-2">
            <h3 className="text-clip text-sm ">Foreground color:</h3>

            <input
              type="color"
              onChange={(e) => setFgColor(e.target.value)}
              className="cursor-pointer w-5 rounded-full"
              value={fgColor}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Colors;
