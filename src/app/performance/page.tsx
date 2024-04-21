import performanceImg from "@/public/performance.jpg";
import Hero from "@/src/components/hero";
export default function PerformancePage() {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt="welding"
      imgTitle="we serve high performance applications"
    />
  );
}
