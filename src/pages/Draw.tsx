import DrawCanvas from "../components/Canvas/DrawCanvas";
import NavBar from "../components/NavBar/NavBar";
// import { Excalidraw } from "@excalidraw/excalidraw";

const Draw = () => {
  return (
    <>
      <NavBar />
      {/* <div className="div" style={{ height: "500px" }}>
        <Excalidraw />
      </div> */}

      <DrawCanvas />
    </>
  );
};

export default Draw;
