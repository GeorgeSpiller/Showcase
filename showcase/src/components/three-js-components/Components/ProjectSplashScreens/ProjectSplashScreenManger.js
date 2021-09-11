import React from 'react';
import ProjectSplashScreen from './ProjectSplashScreenPoint';
import ProjOne from './ProjOne';

export default function ProjectSplashScreenManager({projectNumber}) {

    switch(projectNumber) {
        case 1:
            return (
                <React.Fragment>
                    <ProjOne />
                </React.Fragment>)
        case 2:
            return (
                <React.Fragment>
                    <ProjectSplashScreen position={[0, 0, -10]} color={"#3b00ff"}/>
                    <ProjectSplashScreen position={[-10, 0, -18]} color={"#3b00ff"}/>
                </React.Fragment>)
        case 3:
            return (
                <React.Fragment>
                </React.Fragment>)
        default:
            return (
                <React.Fragment>
                    <ProjectSplashScreen position={[25, 0, 20]} color={"#ff0000"}/>
                    <ProjectSplashScreen position={[0, 0, -10]} color={"#3b00ff"}/>
                    <ProjectSplashScreen position={[-10, 0, -18]} color={"#3b00ff"}/>
                </React.Fragment>)
      }

  }
