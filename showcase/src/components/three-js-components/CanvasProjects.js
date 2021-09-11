import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import MergerSponge from './Components/MergerSponge';
import CameraAnimation from './Components/CameraAnimation';
import ProjectSplashScreenManager from './Components/ProjectSplashScreens/ProjectSplashScreenManger';

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
            <Canvas >
                <CameraAnimation 
                        projectNumber={projectNumber}
                />

                <ambientLight intensity={0.4} />
                <pointLight position={[0, 0, -20]} />

                <ProjectSplashScreenManager projectNumber={projectNumber}/>

                <MergerSponge position={[-13.5, -13.5, -30]}/>
            </Canvas>
        </div>
    </Suspense>
    );
}
