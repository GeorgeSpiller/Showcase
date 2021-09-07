import { Box, OrbitControls } from "@react-three/drei";
import React from "react";
import { Canvas } from "react-three-fiber";


function Scene() {
  const [renderTarget] = useState(new THREE.WebGLCubeRenderTarget(1024, { format: THREE.RGBAFormat, generateMipmaps: true }))
  const cubeCamera = useRef()

  useFrame(({ gl, scene }) => {
    cubeCamera.current.update(gl, scene)
  })

  return (
    <>
      <Sky layers={[11]} sunPosition={[Math.PI, 0, Math.PI / 2]} turbidity={8} rayleigh={6} mieCoefficient={0.0005} mieDirectionalG={0.8} />
      <cubeCamera layers={[11]} name="cubeCamera" ref={cubeCamera} position={[0, 0, 0]} args={[0.1, 100, renderTarget]} />
      
      <Box args={[2, 2, 2]}>
        <meshPhysicalMaterial color="#f51d63" envMap={renderTarget.texture} metalness={1} roughness={0} />
      </Box>

      <OrbitControls />
      <ambientLight />
    </>
  )
}


function App() {
  return (
    <Canvas camera={{ position: [0, 0, 0], near: 0.1, far: 1000 }}>
      <Scene />
      <ambientLight intensity={0.3} />
      <pointLight intensity={0.8} position={[5, 0, 5]} />
      <OrbitControls />
    </Canvas>
  );
}

export default App;