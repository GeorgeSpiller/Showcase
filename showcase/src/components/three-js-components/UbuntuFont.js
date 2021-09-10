import React from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import Ubuntu from '../resources/Ubuntu_Bold.json';

export default function UbuntuFontMesh(props) {

    // parse JSON file with Three
    const font = new THREE.FontLoader().parse(Ubuntu);

    // configure font geometry
    const textOptions = {
    font,
    size: 1,
    height: 1
    };

    return (
        <mesh position={props.position}>
          <textGeometry attach='geometry' args={[props.text, textOptions]} />
          <meshNormalMaterial attach='material' />
        </mesh>
    );
}

UbuntuFontMesh.propTypes = {
    text: PropTypes.string,
    position: PropTypes.array,
};

UbuntuFontMesh.defaultProps = {
    text: 'Welcome',
    position: [-3, 0, 0],
};