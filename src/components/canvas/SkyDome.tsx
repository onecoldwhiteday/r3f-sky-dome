import { useControls } from "leva";
import { useRef } from "react";
import { BackSide, TextureLoader } from "three";
import fragmentShader from "./shaders/sky.frag";
import vertexShader from "./shaders/sky.vert"
import { useLoader } from "@react-three/fiber";

const SkyDomeComponent = ({ children }) => {
  const skyDome = useRef(null);
  const { wireframe } = useControls({ wireframe: true });

  const colorTexture = useLoader(TextureLoader, "./textures/sky.jpg")

  const uniforms = {
    u_texture: { type: 't', value: colorTexture }
  }

  return <>
    <mesh ref={skyDome}>
      <sphereBufferGeometry args={[3]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={wireframe}
        side={BackSide}
      />
      {children}
    </mesh>
  </>
}

export default SkyDomeComponent;