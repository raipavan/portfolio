import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Bubble({ position, speed, scale }) {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.position.y += speed;
    if (mesh.current.position.y > 10) mesh.current.position.y = -10;
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
    </mesh>
  );
}

export default function Bubbles3D() {
  const bubbles = Array.from({ length: 30 }).map(() => ({
    position: [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5],
    speed: 0.01 + Math.random() * 0.02,
    scale: 0.2 + Math.random() * 0.5,
  }));

  return (
    <Canvas className="absolute inset-0 z-0">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars />
      {bubbles.map((b, i) => (
        <Bubble key={i} {...b} />
      ))}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
