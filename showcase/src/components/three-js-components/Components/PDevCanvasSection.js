import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import CubeMultiMaterial from './CubdeMultiMaterial';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber'

import raw_sample1 from '../../resources/Images/sample1.jpg'
import raw_sample2 from '../../resources/Images/sample2.jpg'
import raw_sample3 from '../../resources/Images/sample3.jpg'
import raw_sample4 from '../../resources/Images/sample4.jpg'
import raw_sample5 from '../../resources/Images/sample5.jpg'
import raw_sample6 from '../../resources/Images/sample6.jpg'


export default function PDEVCanvasSection(props) {

    const [photoNumber, setPhotoNumber] = useState(1);
    const NUMBER_OF_PHOTOS = 6;

    const matArray = [
        useLoader(THREE.TextureLoader, raw_sample1),
        useLoader(THREE.TextureLoader, raw_sample2),
        useLoader(THREE.TextureLoader, raw_sample3),
        useLoader(THREE.TextureLoader, raw_sample4),
        useLoader(THREE.TextureLoader, raw_sample5),
        useLoader(THREE.TextureLoader, raw_sample6)
    ]

    return(
        <div className={"CanvasPDevDiv"} onClick={() => {
                setPhotoNumber(photoNumber + 1)
                if (photoNumber > NUMBER_OF_PHOTOS) {
                    setPhotoNumber(1);
               } 
            }}>
            <Canvas >
                <ambientLight intensity={1}/>
                <CubeMultiMaterial materialArray={matArray}/>
            </Canvas>
        </div>
    );
}
