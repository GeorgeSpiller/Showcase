import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import Ubuntu from '../../../resources/Ubuntu_Bold.json';
import { useFrame} from '@react-three/fiber';

export default function SimpleFont({ message, position, size}) {

    const mesh = useRef();
    const font = new THREE.FontLoader().parse(Ubuntu);
    const color = "#7f7f7f";
    const shapes = font.generateShapes( message, size );

    useFrame(({ camera }) => {
        mesh.current.lookAt(camera.position);
      }, [mesh])

    return (
        <mesh position={position} ref={mesh}>
            <shapeBufferGeometry  attach="geometry" args={[shapes]} />
            <meshBasicMaterial 
                attach="material"
                color={color}
                transparent={true}
                opacity={0.4}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
}

SimpleFont.propTypes = {
    message: PropTypes.string,
    position: PropTypes.array,
    size: PropTypes.number
};

SimpleFont.defaultProps = {
    message: 'Sample Text',
    position: [25, 3, 20],
    size: 1
};

