
import { Vector3, Object3D } from 'three';

const p1_position = new Vector3(20, 0, 30)
const p1_target = new Vector3(20, 0, 0)

const p2_position = new Vector3(0, 0, -20)
const p2_target = new Vector3(-16, 0, 0)

const p3_position = new Vector3(0, 20, 20)
const p3_target = new Vector3(0, 20, 0)

var destObj = new Object3D();

destObj.position.x = p1_target.x;
destObj.position.y = p1_target.y;
destObj.position.z = p1_target.z;

export {
    p1_position,
    p1_target,
    p2_position, 
    p2_target,
    p3_position, 
    p3_target,
    destObj
}