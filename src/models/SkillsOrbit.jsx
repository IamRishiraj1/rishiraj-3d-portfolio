import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import { skills } from '../data/skills';

function fibonacciSphere(count, radius) {
  const points = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    points.push([Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius]);
  }
  return points;
}

function SkillNode({ position, label, index }) {
  const [hovered, setHovered] = useState(false);
  const color = index % 2 === 0 ? '#4cf3ff' : '#b14cff';
  return (
    <group position={position}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.6 : 1}
      >
        <icosahedronGeometry args={[0.06, 0]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <Text
        position={[0, 0.16, 0]}
        fontSize={0.16}
        color={hovered ? color : '#e7e7f5'}
        anchorX="center"
        anchorY="middle"
        font={undefined}
      >
        {label}
      </Text>
    </group>
  );
}

function Orbit() {
  const group = useRef();
  const points = useMemo(() => fibonacciSphere(skills.length, 2.1), []);

  useFrame((state, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={group}>
      {skills.map((s, i) => (
        <SkillNode key={s.name} position={points[i]} label={s.name} index={i} />
      ))}
    </group>
  );
}

export default function SkillsOrbit() {
  return (
    <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 3]} intensity={20} color="#4cf3ff" />
      <Float speed={1} rotationIntensity={0.15} floatIntensity={0.4}>
        <Orbit />
      </Float>
    </Canvas>
  );
}
