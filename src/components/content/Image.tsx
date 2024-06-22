import { Image } from "lucide-react";
import ComonComp from "./ComonComp";
import { ImageProps } from "../../Utilities/Interfaces";

const ImageComp: React.FC<ImageProps> = ({
  toggleImage,
  openImage,
  includeImage,
  setIncludeImage,
  setImageSrc,
  imageSrc,
  imageW,
  setImageW,
  setImageH,
  imageOpacity,
  setImageOpacity,
  centerImage,
  setCenterImage,
  imageX,
  size,
  setImageX,
  imageY,
  imageH,
  setImageY,
  // imageExcavate,
  // setImageExcavate,
  imageActive,
}) => {
  return (
    <>
      <ComonComp
        toggleComp={toggleImage}
        compActive={imageActive}
        openComp={openImage}
        title="SET IMAGE"
        icon={Image}
      />
      {openImage && (
        <div className="bg-gray-200 rounded-md p-4 flex flex-col">
          <div className="flex flex-row  text-lg font-bold self-center border-b-2 ">
            <div className="flex">
              <h3>Include Image:</h3>
            </div>

            <div className="flex">
              <input
                className="border-transparent focus:border-b-[#03A9F4] focus:outline-none p-4 "
                type="checkbox"
                checked={includeImage}
                onChange={(e) => setIncludeImage(e.target.checked)}
              />
            </div>
          </div>

          <fieldset disabled={!includeImage} className="grid gap-2">
            <legend className="text-lg font-bold underline underline-offset-4">
              Image Settings
            </legend>

            {/* source */}
            <div className="grid grid-cols-1 md:grid-cols-4 justify-start border-2 border-stone-700">
              <h3 className="col-span-1 font-bold text-base">Source:</h3>
              <input
                className="border-transparent focus:border-b-[#03A9F4] focus:outline-none p-1 rounded-md w-full col-span-3"
                type="text"
                onChange={(e) => setImageSrc(e.target.value)}
                value={imageSrc}
              />
            </div>

            {/* width + heigth + opacity  */}

            <div className="grid grid-col-1 md:grid-cols-3 border-2 border-stone-700">
              <div className="grid grid-cols-2 md:grid-cols-1 place-items-center">
                <h3>Width:</h3>

                <input
                  className="border-transparent focus:border-b-[#03A9F4] focus:outline-none w-8 text-center rounded-md"
                  type="number"
                  value={imageW}
                  onChange={(e) => setImageW(parseInt(e.target.value, 10))}
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 place-items-center">
                <h3>Height:</h3>

                <input
                  className="border-transparent focus:border-b-[#03A9F4] focus:outline-none w-8 text-center rounded-md"
                  type="number"
                  value={imageH}
                  onChange={(e) => setImageH(parseInt(e.target.value, 10))}
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 place-items-center">
                <h3>Opacity:</h3>
                <input
                  className="border-transparent focus:border-b-[#03A9F4] focus:outline-none w-8 text-center rounded-md"
                  type="number"
                  value={imageOpacity}
                  step="0.1"
                  onChange={(e) => setImageOpacity(Number(e.target.value))}
                />
              </div>
            </div>

            {/* centering */}
            <div className="flex justify-center">
              {/* <legend className="text-center font-bold">Image Settings</legend> */}
            </div>
            <div className="border-2 border-stone-700">
              <div className="flex gap-x-5 justify-center border-b-2 border-stone-500">
                <h3>Center Image:</h3>
                <input
                  className="border-transparent focus:border-b-[#03A9F4] focus:outline-none"
                  type="checkbox"
                  checked={centerImage}
                  onChange={(e) => setCenterImage(e.target.checked)}
                />
              </div>

              <fieldset disabled={centerImage}>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                  <div className="grid grid-cols-1 place-items-center">
                    <label>
                      Image X: {imageX}
                      <br />
                      <input
                        className="border-transparent focus:border-b-[#03A9F4] focus:outline-none w-2/3"
                        type="range"
                        min={0}
                        max={size - imageW}
                        value={imageX}
                        onChange={(e) =>
                          setImageX(parseInt(e.target.value, 10))
                        }
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 place-items-center">
                    <label>
                      Image Y: {imageY}
                      <br />
                      <input
                        className="border-transparent focus:border-b-[#03A9F4] focus:outline-none w-2/3"
                        type="range"
                        min={0}
                        max={size - imageH}
                        value={imageY}
                        onChange={(e) =>
                          setImageY(parseInt(e.target.value, 10))
                        }
                      />
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </fieldset>
        </div>
      )}
    </>
  );
};

export default ImageComp;
