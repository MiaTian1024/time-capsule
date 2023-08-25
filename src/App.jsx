import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <Canvas camera={{
        position: [0, 0, 5],
        fov: 30,
      }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={5} damping={0.3} >
          <Experience />
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
