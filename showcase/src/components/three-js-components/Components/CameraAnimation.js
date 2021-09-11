import { useFrame} from '@react-three/fiber';
import {
  p1_position,
  p1_target,
  p2_position, 
  p2_target,
  p3_position, 
  p3_target,
} from './CameraPositions';

export default function CameraAnimation({projectNumber}) {
    // move camera to a specific position based on the projectNumber
    useFrame(({ clock, camera }) => {
      switch(projectNumber) {
        case 1:
          camera.position.x = p1_position[0];
          camera.position.y = p1_position[1];
          camera.position.z = p1_position[2];
          break;
        case 2:
          camera.position.x = p2_position[0];
          camera.position.y = p2_position[1];
          camera.position.z = p2_position[2];
          break;
        case 3:
          camera.position.x = p3_position[0];
          camera.position.y = p3_position[1];
          camera.position.z = p3_position[2];
          break;
        default:
          camera.position.x = 0;
          camera.position.y = 0;
          camera.position.z = 0;
      }
    })


    // useFrame(({ clock, camera }) => {
    //   camera.position.z = 50 + Math.sin(clock.getElapsedTime()) * 30
    // })
    return null
  }
