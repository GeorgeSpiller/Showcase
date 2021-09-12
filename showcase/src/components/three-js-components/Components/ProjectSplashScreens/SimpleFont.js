import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import Ubuntu from '../../../resources/Ubuntu_Bold.json';
import { useFrame} from '@react-three/fiber';

export default function SimpleFont({ message, position, size, color, fadeInDelay}) {

    const mesh = useRef();
    const mat = useRef();
    const font = new THREE.FontLoader().parse(Ubuntu);
    const shapes = font.generateShapes( message, size );
    const opacity = 0.8;
    var currOpac = 0;

    useFrame(({ camera }) => {
        if (fadeInDelay) {            
            if (currOpac < opacity) {
                currOpac += 0.002;
            }
            mat.current.opacity=currOpac;
        }
        mesh.current.lookAt(camera.position);
    }, [mesh])

    return (
        <mesh position={position} ref={mesh}>
            <shapeBufferGeometry  attach="geometry" args={[shapes]} />
            <meshBasicMaterial 
                attach="material"
                color={color}
                transparent={true}
                opacity={opacity}
                side={THREE.DoubleSide}
                ref={mat}
            />
        </mesh>
    );
}

SimpleFont.propTypes = {
    message: PropTypes.string,
    position: PropTypes.array,
    size: PropTypes.number,
    color: PropTypes.string,
    fadeInDelay: PropTypes.bool
};

SimpleFont.defaultProps = {
    message: 'Sample Text',
    position: [25, 3, 20],
    size: 1,
    color: "#424242",
    fadeInDelay: false
};

