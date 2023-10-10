import React, { useEffect, useState } from "react";
import { VRButton, ARButton, XR, Controllers, Hands } from "@react-three/xr";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Herbaverse = () => {
  const gltf = useLoader(GLTFLoader, "/floor.glb");
  return (
    <>
      <img
        src="https://asset.kompas.com/crops/Mjdcui9b2cFUh-oF_SdHMUE7VfE=/90x0:774x456/750x500/data/photo/2022/04/17/625c01d40ab4d.jpg"
        className="h-[100vh] bg-cover absolute z-10 w-100"
        style={{ height: "100vh", width: "100%" }}
      />
      <VRButton />
      <Canvas>
        <XR>
          {/* <primitive
            object={gltf.scene}
            position={[0, -10, 1]}
            scale={[20, 20, 20]}
            children-0-castShadow
          /> */}
          <Environment files={"/floor2.hdr"} background />

          <OrbitControls />
        </XR>
      </Canvas>
    </>
  );
};

export default Herbaverse;
