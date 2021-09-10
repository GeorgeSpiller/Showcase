import React, { useRef } from 'react'
import { Canvas, useFrame, useThree, extend} from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Box from './Box';
import UbuntuFontMesh from './UbuntuFont';
import Icosahedron  from './Icosahedron';

// Extend will make OrbitControls available as a JSX element called orbitControls for us to use.
extend({ OrbitControls });

const CameraControls = () => {  
    // Get a reference to the Three.js Camera, and the canvas html element.  
    // We need these to setup the OrbitControls component.  
    // https://threejs.org/docs/#examples/en/controls/OrbitControls  
    const { camera, gl: { domElement }} = useThree();  
    const controls = useRef();  
    // Update orbit controls every frame
    useFrame(() => controls.current.update());  
    return <orbitControls 
        ref={controls} 
        args={[camera, domElement]} 
        enableZoom={false} 
        autoRotate={true}
        target={[0, 0, 0]}    
        />;
};

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

            <CameraControls />
            {Icosahedrons}
            <UbuntuFontMesh text={props.text} position={props.position}/>
            <Box position={[0, 2, 0]} />
        </Canvas>
    </div>
    );
}
