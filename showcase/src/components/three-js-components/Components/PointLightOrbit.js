import React, { useRef } from 'react';
import { useFrame} from '@react-three/fiber';
import PropTypes from 'prop-types';
import Icosahedron from './Icosahedron';

export default function PointLightLightOrbit({intensity, color, rad, position}) {

    const light = useRef();

    const originalPosX = position[0];
    const originalPosZ = position[2];

    useFrame(({ clock }) => {
       // console.log(light.current.position)
        light.current.position.x = originalPosX + Math.cos(clock.getElapsedTime()) * rad
        light.current.position.z = originalPosZ + Math.sin(clock.getElapsedTime()) * rad
        
    })
    return (
        <group position={position} ref={light}>
            <Icosahedron />
            <pointLight intensity={intensity} color={color} />   
        </group>
    );


};



PointLightLightOrbit.propTypes = {
    intensity: PropTypes.number,
    color: PropTypes.string,
    rad: PropTypes.number,
    position: PropTypes.array,
};

PointLightLightOrbit.defaultProps = {
    intensity: 0.4,
    color: "#ffffff",
    rad: 30,
    position: [0, 0, 0],
};
