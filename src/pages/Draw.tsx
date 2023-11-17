import Navlinks from "../components/header/navlinks";
import { Excalidraw } from "@excalidraw/excalidraw";

const Draw = () => {
  return (
    <>
      <Navlinks />
      <div className="div" style={{ height: "500px" }}>
        <Excalidraw />
      </div>
    </>
  );
};

export default Draw;
