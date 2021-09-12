import React, { useRef } from 'react';
import { useFrame} from '@react-three/fiber';
import PropTypes from 'prop-types';

export default function PointLightLightSpring({intensity, color, speed, position, plane, startRange}) {

    const light = useRef();

    useFrame(({ clock }) => {
        switch(plane) {
            case 0:
                light.current.position.x = startRange + Math.sin(clock.getElapsedTime()) * speed
                break;
            case 1:
                light.current.position.y = startRange + Math.sin(clock.getElapsedTime()) * speed
                break;
            case 2:
                light.current.position.z = startRange + Math.sin(clock.getElapsedTime()) * speed
                break;
            default:
                light.current.position.z = startRange + Math.sin(clock.getElapsedTime()) * speed
                break;
        }
    })
    return (
        <React.Fragment>
            <pointLight intensity={intensity} color={color} position={position} ref={light}/>   
        </React.Fragment>
    );


};



PointLightLightSpring.propTypes = {
    intensity: PropTypes.number,
    color: PropTypes.string,
    speed: PropTypes.number,
    position: PropTypes.array,
    plane: PropTypes.number,
    startRange: PropTypes.number
};

PointLightLightSpring.defaultProps = {
    intensity: 0.4,
    color: "#ffffff",
    speed: 30,
    position: [0, 0, 0],
    plane: 2,
    startRange: 50
};








