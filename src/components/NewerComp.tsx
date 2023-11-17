import { QRCodeSVG } from "qrcode.react";
import React, { useState } from "react";
import Content from "./content/Content";
import Colors from "./content/Colors";
import Design from "./content/Design";
import ImageComp from "./content/Image";
import html2canvas from "html2canvas";

const NewerComp: React.FC = () => {
  const [value, setValue] = useState<string>(
    import.meta.env.VITE_PICTURE_OF_PEOPLE
  );
  const [size, setSize] = useState(128);
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [level, setLevel] = useState("L");
  const [marginSize, setMarginSize] = useState(0);
  const [includeImage, setIncludeImage] = useState(true);
  const [imageH, setImageH] = useState(24);
  const [imageW, setImageW] = useState(24);
  const [imageX, setImageX] = useState(0);
  const [imageY, setImageY] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);
  const [imageSrc, setImageSrc] = useState(import.meta.env.VITE_STATIC_QR_CODE);
  const [imageExcavate, setImageExcavate] = useState(true);
  const [centerImage, setCenterImage] = useState(true);

  //   const canvasRef = useRef(null);

  //   function makeExampleCode(componentName: string) {
  //     const imageSettingsCode = includeImage
  //       ? `
  //   imageSettings={{
  //     src: "${imageSrc}",
  //     x: ${centerImage ? "undefined" : imageX},
  //     y: ${centerImage ? "undefined" : imageY},
  //     height: ${imageH},
  //     width: ${imageW},
  //     opacity: ${imageOpacity},
  //     excavate: ${imageExcavate},
  //   }}`
  //       : "";
  //     return `import {${componentName}} from 'qrcode.react';
  // <${componentName}
  //   value={"${value}"}
  //   size={${size}}
  //   bgColor={"${bgColor}"}
  //   fgColor={"${fgColor}"}
  //   level={"${level}"}
  //   marginSize={${marginSize}}${imageSettingsCode}
  // />`;
  //   }
  // const svgCode = makeExampleCode("QRCodeSVG");
  // const canvasCode = makeExampleCode("QRCodeCanvas");

  const renderProps = {
    value,
    size,
    fgColor,
    bgColor,
    level,
    marginSize,
    imageSettings: includeImage
      ? {
          src: imageSrc,
          height: imageH,
          width: imageW,
          x: centerImage ? undefined : imageX,
          y: centerImage ? undefined : imageY,
          excavate: imageExcavate,
          opacity: imageOpacity,
        }
      : undefined,
  };

  const [openContent, setOpenContent] = useState(false);
  const [contentActive, setContentActive] = useState(false);
  const [colorsActive, setColorsActive] = useState(false);
  const [openOpenColors, setOpenColors] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const [imageActive, setImageActive] = useState(false);
  const [openDesign, setOpenDesign] = useState(false);
  const [designActive, setDesignActive] = useState(false);

  const toggleContent: () => void = () => {
    setOpenContent(!openContent);
    setContentActive(!contentActive);

    setOpenColors(false);
    setColorsActive(false);

    setOpenImage(false);
    setImageActive(false);

    setOpenDesign(false);
    setDesignActive(false);
  };

  const toggleColors: () => void = () => {
    setOpenColors(!openOpenColors);
    setColorsActive(!colorsActive);

    setOpenContent(false);
    setContentActive(false);

    setOpenImage(false);
    setImageActive(false);

    setOpenDesign(false);
    setDesignActive(false);
  };

  const toggleImage: () => void = () => {
    setOpenImage(!openImage);
    setImageActive(!imageActive);

    setOpenColors(false);
    setColorsActive(false);

    setOpenDesign(false);
    setDesignActive(false);

    setOpenContent(false);
    setContentActive(false);
  };

  const toggleDesign: () => void = () => {
    setOpenDesign(!openDesign);
    setDesignActive(!designActive);

    setOpenImage(false);
    setImageActive(false);

    setOpenColors(false);
    setColorsActive(false);

    setOpenContent(false);
    setContentActive(false);
  };

  const downloadQR = () => {
    console.log("hlloo value");
    const qrElement = document.querySelector("#capture");
    if (qrElement) {
      html2canvas(qrElement)?.then((canvas) => {
        // document.body.appendChild(canvas);
        const link = document.createElement("a");
        link.download = "qr-image.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    }
  };

  return (
    <>
      <div
        className="p-8 grid grid-cols-1 md:grid-cols-2 "
        // onClick={shareToggleFalse}
      >
        <div className="grid p-4 space-y-5">
          <Content
            toggleContent={toggleContent}
            openContent={openContent}
            setValue={setValue}
            value={value}
            contentActive={contentActive}
          />

          <Colors
            toggleColors={toggleColors}
            openOpenColors={openOpenColors}
            bgColor={bgColor}
            setBgColor={setBgColor}
            fgColor={fgColor}
            setFgColor={setFgColor}
            colorsActive={colorsActive}
          />

          {/* imgae settings */}

          <ImageComp
            toggleImage={toggleImage}
            openImage={openImage}
            includeImage={includeImage}
            setIncludeImage={setIncludeImage}
            setImageSrc={setImageSrc}
            imageSrc={imageSrc}
            imageW={imageW}
            setImageW={setImageW}
            setImageH={setImageH}
            imageOpacity={imageOpacity}
            setImageOpacity={setImageOpacity}
            centerImage={centerImage}
            setCenterImage={setCenterImage}
            imageX={imageX}
            size={size}
            setImageX={setImageX}
            imageY={imageY}
            imageH={imageH}
            setImageY={setImageY}
            imageExcavate={imageExcavate}
            setImageExcavate={setImageExcavate}
            imageActive={imageActive}
          />

          {/* design */}

          <Design
            toggleDesign={toggleDesign}
            openDesign={openDesign}
            setSize={setSize}
            size={size}
            setLevel={setLevel}
            level={level}
            marginSize={marginSize}
            setMarginSize={setMarginSize}
            designActive={designActive}
          />
        </div>
        {/* qr code */}
        <div className="grid bg-white p-3 ">
          <div className="grid h-fit" id="capture">
            <QRCodeSVG
              //   ref={canvasRef}
              {...renderProps}
              className="grid justify-self-center"
            />
          </div>

          <div className="flex justify-center static max-h-16">
            <button
              className="bg-[#8BC34A] text-white rounded-sm border-none hover:cursor-pointer w-[80%] text-lg sticky"
              title="Download QR-Code"
              onClick={downloadQR}
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewerComp;
