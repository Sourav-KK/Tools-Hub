import { Globe2 } from "lucide-react";
import ComonComp from "./ComonComp";

interface ContentProps {
  toggleContent: () => void;
  openContent: boolean;
  setValue: (value: string) => void;
  value: string;
  contentActive: boolean;
}

const Content: React.FC<ContentProps> = ({
  toggleContent,
  openContent,
  setValue,
  value,
  contentActive,
}) => {
  return (
    <>
      <ComonComp
        toggleComp={toggleContent}
        compActive={contentActive}
        openComp={openContent}
        title="ENTER CONTENT"
        icon={Globe2}
      />

      {openContent && (
        <div className=" pl-2 transition ease-in-out delay-200 ">
          <label>
            Value:
            <br />
            <input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              className="w-11/12 border-transparent focus:border-b-[#03A9F4] focus:outline-none h-5"
            />
          </label>
        </div>
      )}
    </>
  );
};

export default Content;
