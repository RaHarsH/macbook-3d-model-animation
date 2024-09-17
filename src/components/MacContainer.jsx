import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React from 'react'
import * as THREE from 'three'

const MacContainer = () => {
    let model = useGLTF('./models/mac.glb');
    let texture = useTexture('./models/red.jpg')
    let meshes = {}

    model.scene.traverse(e => {
        meshes[e.name] = e  // add all the meshes to the meshes object
    })

    // console.log(meshes)

    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180); // to close the screen of the laptop initially

    meshes.matte.material.map = texture;
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.metalness = 0;
    meshes.matte.material.roughness = 1;

    let data = useScroll(); // gives value betweeen 0 and 1 based on the scroller position

    useFrame((state, delta) => {
        meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - (data.offset) * 90) // to move the screen (open or close)
    })

  return (
    <group position={[0, -10, 20]}>
        <primitive object={model.scene} />
    </group>
  )
}

export default MacContainer