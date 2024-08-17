import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

import skyScene from '../assets/3d/sky.glb';
import { useFrame } from '@react-three/fiber';

const Sky = ({ isRotating }) => {
  const skyRef = useRef();
  const { scene } = useGLTF(skyScene);

  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  // It ensures smooth animations by making the rotation frame rate-independent.
  // 'delta' represents the time in seconds since the last frame.
  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.15 * delta;
    }
  });

  return (
    // need to use <mesh></mesh> inside a <Canvas>
    <mesh ref={skyRef}>
      {/* <primitive /> allows to directly use & render a three.js object within React component tree - can just consume the 3D model*/}
      <primitive object={scene} />
    </mesh>
  );
};

export default Sky;
