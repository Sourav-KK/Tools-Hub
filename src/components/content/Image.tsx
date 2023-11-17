import { Image } from "lucide-react";
import ComonComp from "./ComonComp";

interface ImageProps {
  toggleImage: () => void;
  openImage: boolean;
  includeImage: boolean;
  setIncludeImage: (value: boolean) => void;
  setImageSrc: (value: string) => void;
  imageSrc: string;
  imageW: number;
  setImageW: (value: number) => void;
  setImageH: (value: number) => void;
  imageOpacity: number;
  setImageOpacity: (value: number) => void;
  centerImage: boolean;
  setCenterImage: (value: boolean) => void;
  imageX: number;
  size: number;
  setImageX: (value: number) => void;
  imageY: number;
  imageH: number;
  setImageY: (value: number) => void;
  imageExcavate: boolean;
  setImageExcavate: (value: boolean) => void;
  imageActive: boolean;
}
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
  imageExcavate,
  setImageExcavate,
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
        <>
          <div>
            <label>
              Include Image:
              <input
                className="border-transparent focus:border-b-[#03A9F4] focus:outline-none"
                type="checkbox"
                checked={includeImage}
                onChange={(e) => setIncludeImage(e.target.checked)}
              />
            </label>
          </div>

          <fieldset disabled={!includeImage} className="grid gap-2">
            <legend>Image Settings</legend>

            <div className="">
              <label>
                Source:
                <br />
                <input
                  className="border-transparent focus:border-b-[#03A9F4] focus:outline-none"
                  type="text"
                  onChange={(e) => setImageSrc(e.target.value)}
                  value={imageSrc}
                />
              </label>
            </div>
            <div>
              <label>
                Image Width: {imageW}
                <br />
                <input
                  className="border-transparent focus:border-b-[#03A9F4] focus:outline-none"
                  type="number"
                  value={imageW}
                  onChange={(e) => setImageW(parseInt(e.target.value, 10))}
                />
              </label>
            </div>
            <div>
              <label>
                Image Height: {imageH}
                <br />
                <input
                  className="border-transparent focus:border-b-[#03A9F4] focus:outline-none"
                  type="number"
                  value={imageH}
                  onChange={(e) => setImageH(parseInt(e.target.value, 10))}
                />
              </label>
            </div>
            <div>
              <label>
                Image Opacity: {imageOpacity}
                <br />
                <input
                  className="border-transparent focus:border-b-[#03A9F4] focus:outline-none"
                  type="number"
                  value={imageOpacity}
                  step="0.1"
                  onChange={(e) => setImageOpacity(Number(e.target.value))}
                />
              </label>
            </div>

            <div>
              <label>
                Center Image:
                <br />
                <input
                  className="border-transparent focus:border-b-[#03A9F4] focus:outline-none"
                  type="checkbox"
                  checked={centerImage}
                  onChange={(e) => setCenterImage(e.target.checked)}
                />
              </label>
            </div>
            <fieldset disabled={centerImage}>
              <legend>Image Settings</legend>
              <div>
                <label>
                  Image X: {imageX}
                  <br />
                  <input
                    className="border-transparent focus:border-b-[#03A9F4] focus:outline-none"
                    type="range"
                    min={0}
                    max={size - imageW}
                    value={imageX}
                    onChange={(e) => setImageX(parseInt(e.target.value, 10))}
                  />
                </label>
              </div>
              <div>
                <label>
                  Image Y: {imageY}
                  <br />
                  <input
                    className="border-transparent focus:border-b-[#03A9F4] focus:outline-none"
                    type="range"
                    min={0}
                    max={size - imageH}
                    value={imageY}
                    onChange={(e) => setImageY(parseInt(e.target.value, 10))}
                  />
                </label>
              </div>
            </fieldset>
            {/* <div>
              <label>
                Excavate ("dig" foreground to nearest whole module):
                <br />
                <input
                  className="border-transparent focus:border-b-[#03A9F4] focus:outline-none"
                  type="checkbox"
                  checked={imageExcavate}
                  onChange={(e) => setImageExcavate(e.target.checked)}
                />
              </label>
            </div> */}
          </fieldset>
        </>
      )}
    </>
  );
};

export default ImageComp;
