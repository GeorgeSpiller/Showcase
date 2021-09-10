import React from 'react'
import { Canvas } from '@react-three/fiber'
import Box from './Box';
import UbuntuFontMesh from './UbuntuFont';
import Icosahedron  from './Icosahedron';
import StandardCameraControls from './StandaredCameraControls';

export default function CanvasWelcome(props) {

    // generate props.IcosahedronAmount Icosahedrons at random positions
    const Icosahedrons = [];
    // functions for generating random cordinates
    function genRandomPosInFrame(max) {
        const cord = (max) => (Math.floor(Math.random() * (max*2))) - max;
        return [cord(max), cord(max), cord(max)]
      }    

    // push Icosahedrons onto array, each with unique key
    for (let i = 1; i <= props.IcosahedronAmount; i++) {
        Icosahedrons.push(<Icosahedron key={i} position={genRandomPosInFrame(15)}/>);
    }

    return (  
    <div style={{backgroundColor: "#C62368", margin:"-1px"}}>
        <Canvas >
            <ambientLight />
            <pointLight position={[10, 10, 10]} />

            <StandardCameraControls 
                    enableZoom={false} 
                    autoRotate={true}
                    target={[0, 0, 0]}   
            />
            {Icosahedrons}
            <UbuntuFontMesh text={props.text} position={props.position}/>
            <Box position={[0, 2, 0]} />
        </Canvas>
    </div>
    );
}
