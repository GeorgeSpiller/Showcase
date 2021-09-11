import { useFrame} from '@react-three/fiber';
import {
  p1_position,
  p1_target,
  p2_position, 
  p2_target,
  p3_position, 
  p3_target,
  destObj
} from './CameraPositions';

export default function CameraAnimation({projectNumber}) {

    var finalPos;
    var finalTarget;
    const time = 0.01;

    switch(projectNumber) {
      case 1:
        finalPos = p1_position;
        finalTarget = p1_target;
        break;
      case 2:
        finalPos = p2_position;
        finalTarget = p2_target;
        break;
      case 3:
        finalPos = p3_position;
        finalTarget = p3_target;
        break;
      default:
        finalPos = p1_position;
        finalTarget = p1_target;
    }


    useFrame(({ camera }) => {

    camera.position.lerp(finalPos, time);
    destObj.position.lerp(finalTarget, time*1.5);

    camera.lookAt(destObj.position.x, destObj.position.y, destObj.position.z);

  })  

    return null
  }
