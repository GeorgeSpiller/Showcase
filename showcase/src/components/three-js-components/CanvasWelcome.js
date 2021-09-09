import React from 'react'
import { Canvas } from '@react-three/fiber'
import Box from './Box';
import UbuntuFontMesh from './UbuntuFont';
import Icosahedron  from './Icosahedron';

function CanvasWelcome(props) {

    const Icosahedrons = [];
    function genRandomPosInFrame(max) {
        function genRandomCordInFrame(max) {
          return (Math.floor(Math.random() * (max*2))) - max;
        }
        return [genRandomCordInFrame(max), Math.floor(Math.random() * max), genRandomCordInFrame(max)]
      }
    for (let i = 1; i <= 10; i++) {
        Icosahedrons.push(<Icosahedron position={genRandomPosInFrame(10)}/>);
        }

    return (  
    <div style={{backgroundColor: "#C62368", margin:"-1px"}}>
        <Canvas >
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {Icosahedrons}
            <UbuntuFontMesh text={props.text} position={props.position}/>
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas>
    </div>
    );
}

export default CanvasWelcome;