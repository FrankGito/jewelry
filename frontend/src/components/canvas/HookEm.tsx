import { Canvas, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Float,
  ContactShadows,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface ModelProps {
  url: string;
}

function Model({ url }: ModelProps) {
  const gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} />;
}

export default function HookEmHorns() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 1, 5] }}
      style={{ background: "white" }}
    >
      <OrbitControls
        autoRotate
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 1.8}
      />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -5]} />
      <ambientLight intensity={0.4} />
      <group position={[0, -1.5, 0]}>
        <Float
          position={[0, 1, 0]}
          speed={0.1}
          rotationIntensity={0.1}
          floatIntensity={2}
        >
          <mesh castShadow receiveShadow>
            <Model url="/punch-pendant-horns-gold.glb" />
            <meshStandardMaterial
              color="gold"
              roughness={0.7} // Increased roughness for less glossiness
              metalness={0.8} // Adjusted metalness to balance the reflection
            />
          </mesh>
        </Float>
        <ContactShadows scale={3} blur={3} opacity={1} far={10} />
      </group>
      <Environment resolution={64}>
        <Striplight position={[10, 2, 0]} scale={[1, 1, 20]} />
        <Striplight position={[-10, 2, 0]} scale={[1, 1, 20]} />
      </Environment>
    </Canvas>
  );
}

function Striplight(props: JSX.IntrinsicElements["mesh"]) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial color="gold" />
    </mesh>
  );
}
