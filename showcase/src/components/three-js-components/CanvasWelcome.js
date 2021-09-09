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
    const {    camera,    gl: { domElement },  } = useThree();  
    // Ref to the controls, so that we can update them on every frame using useFrame  
    const controls = useRef();  
    useFrame((state, delta) => controls.current.update());  
    return <orbitControls 
        ref={controls} 
        args={[camera, domElement]} 
        enableZoom={false} 
        autoRotate={true}
        target={[0, 0, 0]}    
        />;
};

function CanvasWelcome(props) {

    const Icosahedrons = [];
    function genRandomPosInFrame(max) {
        function genRandomCordInFrame(max) {
          return (Math.floor(Math.random() * (max*2))) - max;
        }
        return [genRandomCordInFrame(max), genRandomCordInFrame(max), genRandomCordInFrame(max)]
      }    
    
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

        </Canvas>
    </div>
    );
}


export default CanvasWelcome;