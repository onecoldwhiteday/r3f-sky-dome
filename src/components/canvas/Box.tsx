import { useControls } from "leva";
import { useRef } from "react";

const BoxComponent = () => {
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef(null);
  // Optional Leva debug panel for properties
  // const { scale } = useControls({ scale: 1 });
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial color={"gray"} />
    </mesh>
  );
};
export default BoxComponent;
