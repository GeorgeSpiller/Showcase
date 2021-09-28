import React, { useRef, useState } from 'react'
import { useFrame,useLoader } from '@react-three/fiber'
import { Vector3 } from 'three';
import * as THREE from 'three';

import raw_madagascar1 from '../../resources/Images/Madagascar_(1).jpg'
import raw_madagascar2 from '../../resources/Images/Madagascar_(2).jpg'
import raw_madagascar3 from '../../resources/Images/Madagascar_(3).jpg'
import raw_madagascar4 from '../../resources/Images/Madagascar_(4).jpg'
import raw_madagascar5 from '../../resources/Images/Madagascar_(5).jpg'
import raw_madagascar6 from '../../resources/Images/Madagascar_(6).jpg'

import raw_southAfrica1 from '../../resources/Images/SouthAfrica1.jpg'
import raw_southAfrica2 from '../../resources/Images/SouthAfrica2.jpg'
import raw_southAfrica3 from '../../resources/Images/SouthAfrica3.jpg'
import raw_southAfrica4 from '../../resources/Images/SouthAfrica4.jpg'
import raw_southAfrica5 from '../../resources/Images/SouthAfrica5.png'
import raw_southAfrica6 from '../../resources/Images/SouthAfrica6.jpg'


import raw_switzerland1 from '../../resources/Images/CS_1.jpg'
import raw_switzerland2 from '../../resources/Images/CS_2.jpg'
import raw_switzerland3 from '../../resources/Images/CS_3.jpg'
import raw_switzerland4 from '../../resources/Images/CS_4.jpg'
import raw_switzerland5 from '../../resources/Images/CS_1.jpg'
import raw_switzerland6 from '../../resources/Images/CS_1.jpg'


import raw_sample1 from '../../resources/Images/sample1.jpg'
import raw_sample2 from '../../resources/Images/sample2.jpg'
import raw_sample3 from '../../resources/Images/sample3.jpg'
import raw_sample4 from '../../resources/Images/sample4.jpg'
import raw_sample5 from '../../resources/Images/sample5.jpg'
import raw_sample6 from '../../resources/Images/sample6.jpg'


export default function CubeMultiMaterial({materialNumber}) {
    const ref = useRef()
    const MAX_PHOTO_NUMBER = 5;
    const [clickCycle, setClickCycle] = useState(Math.floor(Math.random() * 6));
    var goalPos;

    const distance = 30;

    const pos1 = new Vector3(0, distance, 0);
    const pos2 = new Vector3(distance, 0, 0);
    const pos3 = new Vector3(0, 0, -distance);
    const pos4 = new Vector3(-distance, 0, 0);
    const pos5 = new Vector3(0, distance, 0);
    const pos6 = new Vector3(0, distance, distance);

    switch(clickCycle) {
        case 1:
            goalPos = pos1;
            break;
        case 2:
            goalPos = pos2;
            break;
        case 3:
            goalPos = pos3;
            break;
        case 4:
            goalPos = pos4;
            break;
        case 5:
            goalPos = pos5;    
            break;
        case 6:
            goalPos = pos6;
            break;
        default:
            goalPos = pos1;
        }

    useFrame(({ camera }) => {
        camera.position.lerp(goalPos, 0.01);
        camera.lookAt(ref.current.position)

        ref.current.rotation.y += 0.001;
    })

    const SAMPLE_materialArray = [
        useLoader(THREE.TextureLoader, raw_sample1),
        useLoader(THREE.TextureLoader, raw_sample2),
        useLoader(THREE.TextureLoader, raw_sample3),
        useLoader(THREE.TextureLoader, raw_sample4),
        useLoader(THREE.TextureLoader, raw_sample5),
        useLoader(THREE.TextureLoader, raw_sample6),
    ]
    
    const madagascar_materialArray = [
        useLoader(THREE.TextureLoader, raw_madagascar1),
        useLoader(THREE.TextureLoader, raw_madagascar2),
        useLoader(THREE.TextureLoader, raw_madagascar3),
        useLoader(THREE.TextureLoader, raw_madagascar4),
        useLoader(THREE.TextureLoader, raw_madagascar5),
        useLoader(THREE.TextureLoader, raw_madagascar6),
    ]
    
    const southAfrica_materialArray = [
        useLoader(THREE.TextureLoader, raw_southAfrica1),
        useLoader(THREE.TextureLoader, raw_southAfrica2),
        useLoader(THREE.TextureLoader, raw_southAfrica3),
        useLoader(THREE.TextureLoader, raw_southAfrica4),
        useLoader(THREE.TextureLoader, raw_southAfrica5),
        useLoader(THREE.TextureLoader, raw_southAfrica6),
    ]
     
    const switzerland_materialArray = [
        useLoader(THREE.TextureLoader, raw_switzerland1),
        useLoader(THREE.TextureLoader, raw_switzerland2),
        useLoader(THREE.TextureLoader, raw_switzerland3),
        useLoader(THREE.TextureLoader, raw_switzerland4),
        useLoader(THREE.TextureLoader, raw_switzerland5),
        useLoader(THREE.TextureLoader, raw_switzerland6),
    ]

    switch(materialNumber) {
        case 0:
            return (
                <mesh 
                    position={[0, 0, 0]} 
                    ref={ref}
                    scale={20}
                    onClick={() => {
                        setClickCycle(clickCycle + 1)
                        if (clickCycle > MAX_PHOTO_NUMBER) {
                            setClickCycle(1);
                       }
                    }} >
                        <boxGeometry attach="geometry" args={[1, 1, 1]} />
                        <meshStandardMaterial map={ madagascar_materialArray[0] } attachArray="material"  />
                        <meshStandardMaterial map={ madagascar_materialArray[1] } attachArray="material"  />
                        <meshStandardMaterial map={ madagascar_materialArray[2] } attachArray="material"  />
                        <meshStandardMaterial map={ madagascar_materialArray[3] } attachArray="material"  />
                        <meshStandardMaterial map={ madagascar_materialArray[4] } attachArray="material"  />
                        <meshStandardMaterial map={ madagascar_materialArray[5] } attachArray="material"  />
                </mesh>
            )
        case 1:
            return (
                <mesh 
                    position={[0, 0, 0]} 
                    ref={ref}
                    scale={20}
                    onClick={() => {
                        setClickCycle(clickCycle + 1)
                        if (clickCycle > MAX_PHOTO_NUMBER) {
                            setClickCycle(1);
                       }
                    }} >
                        <boxGeometry attach="geometry" args={[1, 1, 1]} />
                        <meshStandardMaterial map={ southAfrica_materialArray[0] } attachArray="material"  />
                        <meshStandardMaterial map={ southAfrica_materialArray[1] } attachArray="material"  />
                        <meshStandardMaterial map={ southAfrica_materialArray[2] } attachArray="material"  />
                        <meshStandardMaterial map={ southAfrica_materialArray[3] } attachArray="material"  />
                        <meshStandardMaterial map={ southAfrica_materialArray[4] } attachArray="material"  />
                        <meshStandardMaterial map={ southAfrica_materialArray[5] } attachArray="material"  />
                </mesh>
            )
        case 2:
            return (
                <mesh 
                    position={[0, 0, 0]} 
                    ref={ref}
                    scale={20}
                    onClick={() => {
                        setClickCycle(clickCycle + 1)
                        if (clickCycle > MAX_PHOTO_NUMBER) {
                            setClickCycle(1);
                       }
                    }} >
                        <boxGeometry attach="geometry" args={[1, 1, 1]} />
                        <meshStandardMaterial map={ switzerland_materialArray[0] } attachArray="material"  />
                        <meshStandardMaterial map={ switzerland_materialArray[1] } attachArray="material"  />
                        <meshStandardMaterial map={ switzerland_materialArray[2] } attachArray="material"  />
                        <meshStandardMaterial map={ switzerland_materialArray[3] } attachArray="material"  />
                        <meshStandardMaterial map={ switzerland_materialArray[4] } attachArray="material"  />
                        <meshStandardMaterial map={ switzerland_materialArray[5] } attachArray="material"  />
                </mesh>
            )
        default:
            return (
                <mesh 
                    position={[0, 0, 0]} 
                    ref={ref}
                    scale={20}
                    onClick={() => {
                        setClickCycle(clickCycle + 1)
                        if (clickCycle > MAX_PHOTO_NUMBER) {
                            setClickCycle(1);
                       }
                    }} >
                        <boxGeometry attach="geometry" args={[1, 1, 1]} />
                        <meshStandardMaterial map={ SAMPLE_materialArray[0] } attachArray="material"  />
                        <meshStandardMaterial map={ SAMPLE_materialArray[1] } attachArray="material"  />
                        <meshStandardMaterial map={ SAMPLE_materialArray[2] } attachArray="material"  />
                        <meshStandardMaterial map={ SAMPLE_materialArray[3] } attachArray="material"  />
                        <meshStandardMaterial map={ SAMPLE_materialArray[4] } attachArray="material"  />
                        <meshStandardMaterial map={ SAMPLE_materialArray[5] } attachArray="material"  />
                </mesh>
            )
    }

  }
