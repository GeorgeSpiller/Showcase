import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import MergerSponge from './Components/MergerSponge';
import CameraAnimation from './Components/CameraAnimation';
import ProjectSplashScreenManager from './Components/ProjectSplashScreens/ProjectSplashScreenManger';
import PointLightLightSpring from './Components/PointLightSpring';
import PointLightOrbit from './Components/PointLightOrbit';
import {
    p1_position,
    p2_position, 
    p3_position,
} from './store/CameraPositions';

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

                <ambientLight intensity={0.2}/>
                
                <pointLight position={p1_position} color={'#ffffff'} intensity={0.9}/>
                
                <pointLight position={p2_position} color={'#ffffff'} intensity={0.2}/>
                
                <pointLight position={p3_position} color={'#ffffff'} intensity={0.2}/>
                
                <PointLightLightSpring 
                    intensity={0.8}
                    color={"#C62368"}
                    speed={allSpeed}
                    position={[0, -8, -16.5]}
                    plane={0}
                    startRange={0}
                />

                <PointLightOrbit 
                    intensity={0.8}
                    color={"#C62368"}
                    rad={23}
                    position={[0, 15, -20]}
                />

                <PointLightLightSpring 
                    intensity={0.4}
                    color={"#a53865"}
                    speed={allSpeed}
                    position={[0, 8.8, 0]}
                    plane={2}
                    startRange={-16}
                />

                <ProjectSplashScreenManager projectNumber={projectNumber}/>

                <MergerSponge position={[-13.5, -13.5, -30]}/>
            </Canvas>
        </div>
    </Suspense>
    );
}
