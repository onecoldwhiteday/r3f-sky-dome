import SkyDomeComponent from "./SkyDome";
import Box from "./Box";
import PlaneComponent from "./Plane";

const MainSceneComponent = () => {
  return <>
    <SkyDomeComponent>
      {/* <Box /> */}
      <PlaneComponent />
    </SkyDomeComponent>
    <directionalLight position={[5, 5, 5]} />
    <ambientLight />
  </>
}

export default MainSceneComponent;
