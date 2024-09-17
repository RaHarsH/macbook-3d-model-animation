import { Canvas } from '@react-three/fiber'
import React, { useEffect } from 'react'
import MacContainer from './components/MacContainer'
import { Environment, ScrollControls } from '@react-three/drei'
import { div } from 'three/webgpu'

const App = () => {
  return (
    <div className='h-screen w-full bg-black'>
      <div className='navbar line flex gap-10 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2'>
      {["iPhone", "iPad", "services", "ios", "mac", "products", "iPhone", "iPad", "services", "ios", "mac", "products"]
      .map(navItem => (
        <a href="" key={navItem} className='text-white font-[400] text-sm'>{navItem}</a>
      ))}
      </div>
      <div className="absolute flex flex-col items-center top-28 left-1/2 -translate-x-1/2 text-white">
        <h3 className='masked text-7xl tracking-tighter font-[700]'>macbook pro.</h3>
        <h5>Oh so pro !</h5>
        <p className='text-center w-3/4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo vel labore voluptatum maxime.</p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220]}}>
        <Environment 
        files={[
          'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr'
        ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App