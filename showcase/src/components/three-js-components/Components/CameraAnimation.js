import { useFrame} from '@react-three/fiber';
import { Vector3, Quaternion } from 'three';
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
    console.log("ProjectNumber: ", projectNumber);

    var finalPos;
    var finalTarget;
    var prevPos;
    const time = 0.01;

    // dont useframe here, call moveCameraToPosition instead
    switch(projectNumber) {
      case 1:
        finalPos = p1_position;
        finalTarget = p1_target;
        prevPos = p3_target;
        break;
      case 2:
        finalPos = p2_position;
        finalTarget = p2_target;
        prevPos = p1_target;
        break;
      case 3:
        finalPos = p3_position;
        finalTarget = p3_target;
        prevPos = p2_target;
        break;
      default:
        finalPos = p1_position;
        finalTarget = p1_target;
        prevPos = p3_target;
    }

  useFrame(({ camera }) => {

    camera.position.lerp(new Vector3(finalPos[0], finalPos[1], finalPos[2]), time);

    // camera.lookAt( prevPos ); 
    // var q1 = new Quaternion().copy( camera.quaternion );

    // camera.lookAt( finalTarget );
    // var q2 = new Quaternion().copy( camera.quaternion );

    // Quaternion.slerp( q1, q2, camera.quaternion, 0.1 );
    camera.lookAt(new Vector3(finalTarget[0], finalTarget[1], finalTarget[2]));
  })  

    // useFrame(({ clock, camera }) => {
    //   camera.position.z = 50 + Math.sin(clock.getElapsedTime()) * 30
    // })
    return null
  }
