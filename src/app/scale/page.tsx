import scaleImg from "@/public/scale.jpg";
import Hero from "@/src/components/hero";
export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="scale factory"
      imgTitle="Scale your app to infinity."
    />
  );
}
