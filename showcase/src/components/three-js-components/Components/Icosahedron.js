import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'


export default function Iconsahedron(props) {
    // This reference will give us direct access to the THREE.Mesh object
    const ref = useRef()
    const [hovered, setHover] = useState(false)
    //const [active, setActive] = useState(false)
    const [pushForce, setPushForce] = useState(0)
    // animate random rotation speeds
    const xRotSpeed = Math.random() / 100;
    const yRotSpeed = Math.random() / 100;
    const zRotSpeed = Math.random() / 100;

    // animation loop
    useFrame(( { camera } ) => {
        // rotations
        if (pushForce > 0) {
            ref.current.translateZ(pushForce)

            setPushForce(pushForce - zRotSpeed);
        } else {

        }
        ref.current.rotation.x += xRotSpeed;
        ref.current.rotation.y += yRotSpeed;
        ref.current.rotation.z += zRotSpeed; 
    })

    return (
      <mesh
        ref={ref}
        scale={1}
        onClick={(event) => setPushForce(0.3)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        position={props.position}>
        <icosahedronGeometry radius={1} detail={0} />
        <meshPhongMaterial color={hovered ? '#EF5F67' : "#D53867"} />
      </mesh>
    )
  }