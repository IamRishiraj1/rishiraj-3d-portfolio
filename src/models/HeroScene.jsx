import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';

// The console: a floating glass panel with an emissive wireframe "screen"
function Console() {
  const group = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.25) * 0.35;
      group.current.rotation.x = Math.cos(t * 0.2) * 0.08;
    }
  });

  return (
    <group ref={group}>
      {/* base panel */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.6, 1.6, 0.08]} />
        <meshPhysicalMaterial
          color="#0a0a16"
          roughness={0.15}
          metalness={0.6}
          transmission={0.35}
          thickness={0.6}
          clearcoat={1}
        />
      </mesh>
      {/* screen glow */}
      <mesh position={[0, 0, 0.045]}>
        <planeGeometry args={[2.3, 1.3]} />
        <meshBasicMaterial color="#0d1a22" />
      </mesh>
      {/* wireframe overlay */}
      <mesh position={[0, 0, 0.05]}>
        <planeGeometry args={[2.3, 1.3, 10, 6]} />
        <meshBasicMaterial color="#4cf3ff" wireframe transparent opacity={0.35} />
      </mesh>
      {/* code lines */}
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[-0.75 + (i % 3) * 0.02, 0.4 - i * 0.18, 0.06]}>
          <planeGeometry args={[0.9 - i * 0.12, 0.05]} />
          <meshBasicMaterial color={i % 2 === 0 ? '#4cf3ff' : '#b14cff'} transparent opacity={0.85} />
        </mesh>
      ))}
    </group>
  );
}

// Orbiting tech nodes around the console
function OrbitNodes({ count = 8, radius = 3.4 }) {
  const group = useRef();
  const nodes = useMemo(
    () =>
      [...Array(count)].map((_, i) => {
        const angle = (i / count) * Math.PI * 2;
        const tilt = (i % 2 === 0 ? 1 : -1) * 0.5;
        return { angle, tilt, speed: 0.06 + (i % 3) * 0.015, offset: i * 1.3 };
      }),
    [count]
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) group.current.rotation.y = t * 0.05;
  });

  return (
    <group ref={group}>
      {nodes.map((n, i) => (
        <Node key={i} node={n} radius={radius} />
      ))}
    </group>
  );
}

function Node({ node, radius }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * node.speed + node.offset;
    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius;
    const y = Math.sin(t * 1.4) * node.tilt;
    if (ref.current) ref.current.position.set(x, y, z);
  });
  const color = node.offset % 2 < 1 ? '#4cf3ff' : '#b14cff';
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.09, 0]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function RigParallax({ children }) {
  const group = useRef();
  useFrame((state) => {
    const { pointer } = state;
    if (group.current) {
      group.current.rotation.y += (pointer.x * 0.4 - group.current.rotation.y) * 0.04;
      group.current.rotation.x += (-pointer.y * 0.25 - group.current.rotation.x) * 0.04;
    }
  });
  return <group ref={group}>{children}</group>;
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 4]} intensity={40} color="#4cf3ff" />
      <pointLight position={[-4, -2, -3]} intensity={30} color="#b14cff" />
    </>
  );
}

export default function HeroScene({ quality = 'high' }) {
  return (
    <Canvas
      dpr={[1, quality === 'high' ? 2 : 1]}
      camera={{ position: [0, 0.4, 6.5], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#05050b', 8, 16]} />
      <SceneLights />
      <Stars radius={60} depth={40} count={quality === 'high' ? 3000 : 1200} factor={2.2} fade speed={0.6} />
      <RigParallax>
        <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.8}>
          <Console />
        </Float>
        <OrbitNodes />
      </RigParallax>
      {quality === 'high' && (
        <EffectComposer>
          <Bloom intensity={0.9} luminanceThreshold={0.15} luminanceSmoothing={0.9} mipmapBlur />
          <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.2} darkness={0.9} />
        </EffectComposer>
      )}
    </Canvas>
  );
}
