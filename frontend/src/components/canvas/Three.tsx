import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface ModelProps {
  url: string;
}

function Model({ url }: ModelProps) {
  const gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} />;
}

function Three() {
  return (
    <div id="canvas-container" style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        <Model url="/flamingo.glb" />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Three;