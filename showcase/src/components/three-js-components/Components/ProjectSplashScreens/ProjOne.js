import React, { useRef } from 'react';
import UbuntuFontMesh from '../UbuntuFont';

export default function ProjectSplashScreen(props) {
    const ref = useRef()
    return (
        <React.Fragment>
            <mesh
            position={[25, 0, 20]}
            ref={ref}
            scale={1}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={"#ff0000"} />
            </mesh>
        </React.Fragment>
    )
  }
