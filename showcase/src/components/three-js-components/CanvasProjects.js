import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import MergerSponge from './Components/MergerSponge';
import CameraAnimation from './Components/CameraAnimation';
import ProjectSplashScreenManager from './Components/ProjectSplashScreens/ProjectSplashScreenManger';
import PointLightLightSpring from './Components/PointLightSpring';

const NUMBER_OF_PROJECTS = 2


export default function CanvasProjects() {

    
    const [projectNumber, setProjectNumber] = useState(1);

    // Lighting Animations
    const allStartRange = 30;
    const allSpeed = 20;


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

                <ambientLight intensity={0.1}/>

                <PointLightLightSpring 
                    intensity={0.5}
                    color={"#C62368"}
                    speed={allSpeed}
                    position={[-10, 0, 0]}
                    plane={2}
                    startRange={allStartRange}
                />
                <PointLightLightSpring 
                    intensity={0.5}
                    color={"#FA7268"}
                    speed={allSpeed}
                    position={[0, -10, 0]}
                    plane={0}
                    startRange={allStartRange}
                />
                <PointLightLightSpring 
                    intensity={0.5}
                    color={"#FFCAC6"}
                    speed={allSpeed}
                    position={[0, 0, -10]}
                    plane={1}
                    startRange={allStartRange}
                />

                <ProjectSplashScreenManager projectNumber={projectNumber}/>

                <MergerSponge position={[-13.5, -13.5, -30]}/>
            </Canvas>
        </div>
    </Suspense>
    );
}
