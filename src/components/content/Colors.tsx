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
        <div className="grid grid-flow-col">
          <div className="grid grid-cols-2 pl-2">
            <label>
              Background Color:
              <br />
              <input
                type="color"
                onChange={(e) => setBgColor(e.target.value)}
                value={bgColor}
              />
            </label>
          </div>

          <div className="grid grid-cols-2">
            <label>
              Foreground Color:
              <br />
              <input
                type="color"
                onChange={(e) => setFgColor(e.target.value)}
                value={fgColor}
              />
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default Colors;
