import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Color, TextureLoader } from "three";
import fragmentShader from "./shaders/carpet.frag";
import vertexShader from "./shaders/carpet.vert";

const PlaneComponent = () => {
  const mesh = useRef(null);

  // const colorTexture = useTexture("./textures/carpet.jpg")
  const colorTexture = useLoader(TextureLoader, "./textures/carpet.jpg")

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_texture: { type: 't', value: colorTexture }
    }), [colorTexture]
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return <>
    <mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <meshStandardMaterial map={colorTexture} vertexColors={true} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  </>
}

export default PlaneComponent;