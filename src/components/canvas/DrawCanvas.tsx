import { useEffect, useRef, useState } from "react";
import "../../Styles/Canvas.css";

type MouseEvent = React.MouseEvent<HTMLCanvasElement, globalThis.MouseEvent>;

const DrawCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const [isdrawing, setIsdrawing] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas === null) {
      return;
    }
    // for higher screen density
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    // 2d Context
    const context = canvas.getContext("2d");
    if (context === null) {
      return;
    }
    context.scale(2, 2);
    context.lineCap = "round";
    context.lineWidth = 5;

    contextRef.current = context;
    return () => {};
  }, []);

  const handleStartDrawing = (event: MouseEvent) => {
    if (!contextRef.current) {
      return;
    }

    const { offsetX, offsetY } = event.nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsdrawing(true);
  };

  const handleFinishDrawing = () => {
    if (!contextRef.current) {
      return;
    }
    contextRef.current.closePath();

    setIsdrawing(false);
  };
  const handleDraw = (event: MouseEvent) => {
    if (!isdrawing || !contextRef.current) {
      return;
    }

    const { offsetX, offsetY } = event.nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const handleErase = () => {
    setIsdrawing(false);
  };
  
  return (
    <div className="canvas-container">
      <div className="canvas-controllers">
        <button type="button">Download</button>
        <button type="button">Save</button>
        <button type="button" onClick={handleErase}>
          Erase
        </button>
      </div>
      <canvas
        className="canvas"
        onMouseDown={handleStartDrawing}
        onMouseUp={handleFinishDrawing}
        onMouseMove={handleDraw}
        ref={canvasRef}
      />
    </div>
  );
};

export default DrawCanvas;
