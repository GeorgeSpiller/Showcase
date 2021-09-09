import React from 'react'
import { Canvas } from '@react-three/fiber'
import Box from './Box';
import UbuntuFontMesh from './UbuntuFont';

function CanvasWelcome(props) {
    return (  
    <div style={{backgroundColor: "#C62368", margin:"-1px"}}>
        <Canvas >
            <UbuntuFontMesh text={props.text} position={props.position}/>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas>
    </div>
    );
}

export default CanvasWelcome;