interface HomeI {
  title: string;
  icon: React.ReactNode;
  body: string;
  link: string;
}

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

export type { HomeI, ImageProps };
