/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import MengerSponge from '../../resources/MengerSponge.glb'

export default function Model(props) {
  const group = useRef()
  const { nodes } = useGLTF(MengerSponge)
  return (
    <group ref={group} dispose={null}>
      <mesh
        {...props}
        scale={1}
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        >
        <meshStandardMaterial/>
      </mesh>
    </group>
  )
}

useGLTF.preload(MengerSponge)