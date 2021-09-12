import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import MergerSponge from './Components/MergerSponge';
import CameraAnimation from './Components/CameraAnimation';
import ProjectSplashScreenManager from './Components/ProjectSplashScreens/ProjectSplashScreenManger';
import PointLightLightSpring from './Components/PointLightSpring';
import {
    p1_position,
    p2_position, 
    p3_position,
} from './Components/CameraPositions';

const MAX_PROJECT_INDEX = 2


export default function CanvasProjects() {

    
    const [projectNumber, setProjectNumber] = useState(1);

    // Lighting Animations
    const allStartRange = 0;
    const allSpeed = 20;


    return (  
    <Suspense fallback={<div className="spinner-border"></div>}>
        <div className={"CanvasProjectsDiv"} onClick={(event) => {
                setProjectNumber(projectNumber + 1)
                if (projectNumber > MAX_PROJECT_INDEX) {
                    setProjectNumber(1);
               } 
            }}>
            <Canvas >
                <CameraAnimation 
                        projectNumber={projectNumber}
                />

                <ambientLight intensity={0.1}/>
                <pointLight position={p1_position} color={'#ffffff'} intensity={0.2}/>
                <pointLight position={p2_position} color={'#ffffff'} intensity={0.2}/>
                <pointLight position={p3_position} color={'#ffffff'} intensity={0.2}/>
                
                <PointLightLightSpring 
                    intensity={0.8}
                    color={"#C62368"}
                    speed={allSpeed}
                    position={[0, 0, -30]}
                    plane={2}
                    startRange={allStartRange}
                />
                <PointLightLightSpring 
                    intensity={0.6}
                    color={"#FA7268"}
                    speed={allSpeed}
                    position={[0, 0, -30]}
                    plane={0}
                    startRange={allStartRange}
                />
                <PointLightLightSpring 
                    intensity={0.4}
                    color={"#FFCAC6"}
                    speed={allSpeed}
                    position={[0, 0, -30]}
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
