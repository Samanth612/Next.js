import reliabilityImg from "@/public/reliability.jpg";
import Hero from "@/src/components/hero";
export default function ReliabilityPage() {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt="welding"
      imgTitle="Super high reliability hosting"
    />
  );
}
