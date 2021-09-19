import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import CubeMultiMaterial from './CubdeMultiMaterial';

export default function PDEVCanvasSection({title, text}) {

    const [photoNumber, setPhotoNumber] = useState(1);
    const NUMBER_OF_PHOTOS = 3;
    return(
        <Suspense fallback={<div className="spinner"><div className="spinner-border"></div></div>}>
        <div className={"CanvasPDevDiv"} onClick={(event) => {
                setPhotoNumber(photoNumber + 1)
                if (photoNumber > NUMBER_OF_PHOTOS) {
                    setPhotoNumber(1);
               } 
            }}>
            <Canvas >
                <ambientLight intensity={1}/>
                <CubeMultiMaterial />
            </Canvas>
        </div>
    </Suspense>
    );
}
