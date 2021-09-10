import React from 'react'
import { Canvas } from '@react-three/fiber'


export default function CanvasProjects(props) {

    return (  
    <div style={{backgroundColor: "#ffcac6", margin:"-1px"}}>
        <Canvas >
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
        </Canvas>
    </div>
    );
}
