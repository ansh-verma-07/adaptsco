import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { AdaptiveGeometry } from "./AdaptiveGeometry";
import { FloatingTechObject } from "./FloatingTechObject";

export function HeroCanvas() {
  return (
    <div className="pointer-events-none absolute right-[-18%] top-28 hidden h-[62vh] w-[64vw] opacity-55 md:block lg:right-[-4%] lg:top-24">
      <Canvas camera={{ position: [0, 0, 6], fov: 48 }} dpr={[1, 1.6]}>
        <ambientLight intensity={0.8} />
        <pointLight position={[4, 4, 4]} intensity={2} color="#eaff00" />
        <Suspense fallback={null}>
          <AdaptiveGeometry />
          <FloatingTechObject />
        </Suspense>
      </Canvas>
    </div>
  );
}
