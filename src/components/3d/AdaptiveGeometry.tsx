import { Float, MeshDistortMaterial } from "@react-three/drei";

export function AdaptiveGeometry() {
  return (
    <Float speed={1.6} rotationIntensity={1.2} floatIntensity={1.5}>
      <mesh rotation={[0.8, 0.4, 0.2]}>
        <icosahedronGeometry args={[1.65, 1]} />
        <MeshDistortMaterial color="#eaff00" emissive="#5f6b00" roughness={0.28} metalness={0.4} distort={0.22} speed={1.2} />
      </mesh>
    </Float>
  );
}
