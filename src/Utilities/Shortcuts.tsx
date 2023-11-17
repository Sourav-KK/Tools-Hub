import { PencilRuler, QrCode, ScissorsLineDashed } from "lucide-react";

const cardMap = [
  {
    title: "QR-Code generator",
    icon: <QrCode />,
    body: "Convert any URL into a qrcode",
    link: "/qrcodegenerator",
    count: 1,
  },
  {
    title: "Canvas",
    icon: <PencilRuler />,
    body: "Draw anything",
    link: "/draw",
    count: 2,
  },
  {
    title: "URL-Shortner",
    icon: <ScissorsLineDashed />,
    body: "Shorten your lengthy url here",
    link: "/urlshortner",
    count: 3,
  },
];

export { cardMap };
