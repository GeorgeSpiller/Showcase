import React, { useRef } from 'react';

export default function ProjectSplashScreen({position, color}) {
    const ref = useRef()
    return (
      <mesh
        position={position}
        ref={ref}
        scale={1}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    )
  }
