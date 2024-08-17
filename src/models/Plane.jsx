import React, { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';

import planeScene from '../assets/3d/plane.glb';

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
const Plane = ({ isRotating, setisRotating, ...props }) => {
  const planeRef = useRef();
  // Load the 3D model and its animations
  const { scene, animations } = useGLTF(planeScene);
  // Get animation actions associated with the plane
  const { actions } = useAnimations(animations, planeRef);

  // Use an effect to control the plane's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    // soe models come with pre-playing actions
    if (isRotating) {
      actions['Take 001'].play();
    } else {
      actions['Take 001'].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={planeRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
