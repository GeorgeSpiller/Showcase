import React from 'react';
import { Canvas } from '@react-three/fiber';
import ProjectSplashScreen from './Components/ProjectSplashScreen';
import StandardCameraControls from './Components/StandaredCameraControls';


export default function CanvasProjects() {


    return (  
    <div className={"CanvasProjectsDiv"}>
        <Canvas >
            <StandardCameraControls 
                    enableZoom={false} 
                    autoRotate={false}
                    target={[0, 0, 0]}   
            />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />

            <ProjectSplashScreen position={[0, 15, -20]}/>

        </Canvas>
    </div>
    );
}
