import { Float } from "@react-three/drei";

export function FloatingTechObject() {
  return (
    <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1}>
      <mesh position={[2.2, -0.8, -0.8]}>
        <torusKnotGeometry args={[0.42, 0.12, 96, 12]} />
        <meshStandardMaterial color="#ffffff" emissive="#eaff00" emissiveIntensity={0.12} />
      </mesh>
    </Float>
  );
}
