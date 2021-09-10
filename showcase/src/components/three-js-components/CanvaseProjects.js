import React from 'react';
import { Canvas } from '@react-three/fiber';
import ProjectSplashScreen from './ProjectSplashScreen';
import StandardCameraControls from './StandaredCameraControls';

export default function CanvasProjects(props) {

    return (  
    <div style={{backgroundColor: "#ffcac6", margin:"-1px"}}>
        <Canvas >
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <StandardCameraControls 
                    enableZoom={false} 
                    autoRotate={true}
                    target={[0, 0, 0]}   
            />

            <ProjectSplashScreen position={[0, 0, 0]}/>

        </Canvas>
    </div>
    );
}
