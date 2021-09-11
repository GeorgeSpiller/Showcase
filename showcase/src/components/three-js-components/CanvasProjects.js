import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import ProjectSplashScreen from './Components/ProjectSplashScreen';
import StandardCameraControls from './Components/StandaredCameraControls';
import MergerSponge from './Components/MergerSponge';
import CameraAnimation from './Components/CameraAnimation';

const NUMBER_OF_PROJECTS = 2


export default function CanvasProjects() {

    
    const [projectNumber, setProjectNumber] = useState(1);

    return (  
    <Suspense fallback={<div className="spinner-border"></div>}>
        <div className={"CanvasProjectsDiv"} onClick={(event) => {
                setProjectNumber(projectNumber + 1)
                if (projectNumber > NUMBER_OF_PROJECTS) {
                    setProjectNumber(1);
               } 
            }}>
            <Canvas 
            // camera={{position: [20, 0, 20]}}
            >
                <StandardCameraControls 
                        enableZoom={false} 
                        autoRotate={false}
                        enabled={true}
                        target={[0, 0, 0]}   
                />
                <CameraAnimation 
                        projectNumber={projectNumber}
                />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />

                <ProjectSplashScreen position={[0, 0, 0]}/>
                <MergerSponge position={[-13.5, -13.5, -30]}/>
            </Canvas>
        </div>
    </Suspense>
    );
}
