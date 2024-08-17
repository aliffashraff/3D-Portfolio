// install Drei (npm i @react-three/drei) act as helper library for react-three-fiber - change not 3D to 3D 

import React from 'react';
import { Html } from '@react-three/drei';

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin" />
      </div>
    </Html>
  );
};

export default Loader;
