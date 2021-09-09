import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'


function Iconsahedron(props) {
    // This reference will give us direct access to the THREE.Mesh object
    const ref = useRef()
    const [hovered, setHover] = useState(false)

    const xRotSpeed = Math.random() / 100;
    const yRotSpeed = Math.random() / 100;
    const zRotSpeed = Math.random() / 100;

    

    useFrame((state, delta) => {
        // rotations
        ref.current.rotation.x += xRotSpeed;
        ref.current.rotation.y += yRotSpeed;
        ref.current.rotation.z += zRotSpeed; 

    })

    return (
      <mesh
        ref={ref}
        scale={1}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        position={props.position}>
        <icosahedronGeometry radius={1} detail={0} />
        <meshPhongMaterial color={hovered ? '#EF5F67' : "#D53867"} />
      </mesh>
    )
  }

export default Iconsahedron;