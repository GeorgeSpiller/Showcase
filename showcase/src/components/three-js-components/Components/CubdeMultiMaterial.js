import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three';


export default function CubeMultiMaterial({materialArray}) {
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
    console.log(clickCycle)

    useFrame(({ camera }) => {
        camera.position.lerp(goalPos, 0.01);
        camera.lookAt(ref.current.position)

        ref.current.rotation.y += 0.001;
        ref.current.rotation.z += 0.001;
    })

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
                <meshStandardMaterial map={ materialArray[0] } attachArray="material"  />
                <meshStandardMaterial map={ materialArray[1] } attachArray="material"  />
                <meshStandardMaterial map={ materialArray[2] } attachArray="material"  />
                <meshStandardMaterial map={ materialArray[3] } attachArray="material"  />
                <meshStandardMaterial map={ materialArray[4] } attachArray="material"  />
                <meshStandardMaterial map={ materialArray[5] } attachArray="material"  />
        </mesh>
    )
  }
