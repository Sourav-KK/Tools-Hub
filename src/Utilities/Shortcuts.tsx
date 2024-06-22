import { PencilRuler, QrCode, ScissorsLineDashed } from "lucide-react";

const cardMap = [
  {
    title: "QR-Code generator",
    icon: <QrCode color="green" size={30} />,
    body: "Convert any URL into a QR-code",
    link: "/qrcodegenerator",
    count: 1,
  },
  {
    title: "Canvas",
    icon: <PencilRuler color="green" size={30} />,
    body: "Draw anything",
    link: "/draw",
    count: 2,
  },
  {
    title: "URL-Shortner",
    icon: <ScissorsLineDashed color="green" size={30} />,
    body: "Shorten your lengthy url here",
    link: "/urlshortner",
    count: 3,
  },
];

export { cardMap };
