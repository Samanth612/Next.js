import type { StaticImageData } from "next/image";
import Image from "next/image";

interface Heroprops {
  imgData: StaticImageData;
  imgAlt: string;
  imgTitle: string;
}

export default function Hero(props: Heroprops) {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.imgData}
          alt={props.imgAlt}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      </div>
      <div className="pt-48 flex items-center justify-center">
        <div className="text-white text-6xl">{props.imgTitle}</div>
      </div>
    </div>
  );
}
