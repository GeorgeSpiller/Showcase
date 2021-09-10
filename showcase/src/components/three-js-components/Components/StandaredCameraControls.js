import React, { useRef } from 'react'
import { useFrame, useThree, extend} from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Extend will make OrbitControls available as a JSX element called orbitControls for us to use.
extend({ OrbitControls });

export default function StandardCameraControls(props) {  
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
        {...props} 
        />;
};