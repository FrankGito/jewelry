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

interface PendantProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

export default function Pendant({ containerRef }: PendantProps) {
  return (
    <div ref={containerRef} style={{ width: "31vw", height: "31vh" }}>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 1, 5] }}
        style={{ background: "black" }}
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
              <Model url="/ring.glb" />
              <meshStandardMaterial
                color="white"
                roughness={0.1}
                metalness={0.925}
              />
            </mesh>
          </Float>
          <ContactShadows scale={10} blur={3} opacity={0.25} far={10} />
        </group>
        <Environment resolution={64}>
          <Striplight position={[10, 2, 0]} scale={[1, 1, 20]} />
          <Striplight position={[-10, 2, 0]} scale={[1, 1, 20]} />
        </Environment>
      </Canvas>
    </div>
  );
}

function Striplight(props: JSX.IntrinsicElements["mesh"]) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial color="white" />
    </mesh>
  );
}
