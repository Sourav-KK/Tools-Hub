import NewerComp from "../NewerComp";
import { useState } from "react";

const MainComp = () => {
  const [shareActive, setShareActive] = useState(false);

  const shareToggle = () => {
    setShareActive(!shareActive);
  };
  const shareToggleFalse = () => {
    if (shareActive) {
      setShareActive(false);
    }
  };

  return (
    <main className="pl-20 pr-20 ">
      <div className="w-full bg-[#E8EEF2] rounded-md p-2 h-auto">
        <h1 className="decoration-2 decoration-[#8BC34A] underline font-bold text-lg text-[#03A9F4] text-center">
          Create a QR-code for your links and share it for absolutely free !!!!
        </h1>

        <NewerComp
          shareActive={shareActive}
          shareToggle={shareToggle}
          shareToggleFalse={shareToggleFalse}
        />
      </div>
    </main>
  );
};

export default MainComp;
