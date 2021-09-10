import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import ProjectSplashScreen from './Components/ProjectSplashScreen';
import StandardCameraControls from './Components/StandaredCameraControls';
import MergerSponge from './Components/MergerSponge';
// import ElectronicCimponents from './Components/ElectronicComponents';

export default function CanvasProjects() {


    return (  
    <Suspense fallback={<div class="spinner-border"></div>}>
    <div className={"CanvasProjectsDiv"}>
        <Canvas >
            <StandardCameraControls 
                    enableZoom={false} 
                    autoRotate={false}
                    target={[0, 0, 0]}   
            />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />

            <ProjectSplashScreen position={[0, 0, 0]}/>
            <MergerSponge position={0, 0, -13.5}/>
        </Canvas>
    </div>
    </Suspense>
    );
}
