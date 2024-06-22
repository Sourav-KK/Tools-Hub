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
        title="URL"
        icon={Globe2}
      />

      {openContent && (
        <div className="pl-2 transition ease-in-out delay-200 bg-gray-200 rounded-md p-4 md:flex ">
          <h3 className="font-bold text-sm md:text-lg">Value:</h3>
          <div className="flex w-full justify-center  items-center">
            <input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              className="w-11/12 border-transparent p-3 focus:border-b-[#03A9F4] focus:outline-none h-5 rounded-sm"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Content;
