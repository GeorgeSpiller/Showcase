import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import CubeMultiMaterial from './CubdeMultiMaterial';

export default function PDEVCanvasSection({materialNumber}) {

    const [photoNumber, setPhotoNumber] = useState(1);
    const NUMBER_OF_PHOTOS = 6;

    return(
        <div className={"CanvasPDevDiv"} onClick={() => {
                setPhotoNumber(photoNumber + 1)
                if (photoNumber > NUMBER_OF_PHOTOS) {
                    setPhotoNumber(1);
               } 
            }}>
            <Canvas >
                <ambientLight intensity={1}/>
                <CubeMultiMaterial materialNumber={materialNumber}/>
            </Canvas>
        </div>
    );
}
