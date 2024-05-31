import { Canvas, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls, Environment, Float, ContactShadows } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { LayerMaterial, Depth, Noise } from 'lamina';

interface ModelProps {
  url: string;
}

function Model({ url }: ModelProps) {
  const gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} />;
}

export default function Three() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 1, 5] }}>
        <OrbitControls autoRotate minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 1.8} />
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -5]} />
        <ambientLight intensity={0.5} />
        <group position={[0, -1.5, 0]}>
          <Float position={[0, 1, 0]} speed={0.1} rotationIntensity={0.1} floatIntensity={2}>
            <mesh castShadow receiveShadow>
              <Model url="/punch-pendant-horns-gold.glb" />
              <meshStandardMaterial color="white" roughness={0.1} metalness={10} />
            </mesh>
          </Float>
          <ContactShadows scale={10} blur={3} opacity={0.25} far={10} />
        </group>
        <Environment background resolution={64}>
          <Striplight position={[10, 2, 0]} scale={[1, 1, 20]} />
          <Striplight position={[-10, 2, 0]} scale={[1, 1, 20]} />
          <mesh scale={100}>
            <sphereGeometry args={[1, 64, 64]} />
            <LayerMaterial side={THREE.BackSide}>
              <Depth colorA="#00ffff" colorB="#ff8f00" alpha={0.5} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
              <Noise mapping="local" type="cell" scale={0.5} mode="softlight" />
            </LayerMaterial>
          </mesh>
        </Environment>
      </Canvas>
    </div>
  )
}

function Striplight(props: JSX.IntrinsicElements['mesh']) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial color="white" />
    </mesh>
  )
}