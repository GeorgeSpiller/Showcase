
import React, { useRef } from 'react'
import { useFrame, useLoader  } from '@react-three/fiber'
import * as THREE from 'three';
import raw_sample1 from '../../resources/Images/sample1.jpg'
import raw_sample2 from '../../resources/Images/sample2.jpg'
import raw_sample3 from '../../resources/Images/sample3.jpg'
import raw_sample4 from '../../resources/Images/sample4.jpg'


export default function CubeMultiMaterial(props) {
    const ref = useRef()

    const sample1 = useLoader(THREE.TextureLoader, raw_sample1)
    const sample2 = useLoader(THREE.TextureLoader, raw_sample2)
    const sample3 = useLoader(THREE.TextureLoader, raw_sample3)
    const sample4 = useLoader(THREE.TextureLoader, raw_sample4)
    
    useFrame(() => {
        // animation loop
        ref.current.rotation.x += 0.01; 
        ref.current.rotation.y += 0.01;
        ref.current.rotation.z += 0.01;
    })
    
    return (
        <mesh 
            position={[0, 0, -24]} 
            ref={ref}
            scale={20}>
                <boxGeometry attach="geometry" args={[1, 1, 1]} />
                <meshStandardMaterial map={sample1} attachArray="material"  />
                <meshStandardMaterial map={sample2} attachArray="material"  />
                <meshStandardMaterial map={sample3} attachArray="material"  />
                <meshStandardMaterial map={sample4} attachArray="material"  />
                <meshStandardMaterial map={sample1} attachArray="material"  />
                <meshStandardMaterial map={sample1} attachArray="material"  />
        </mesh>
    )
  }
