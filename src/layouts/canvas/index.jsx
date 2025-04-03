import { Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Box from '../../components/canvas/Box'
import Lights from '../../components/canvas/Lights'

const LCanvas = () => {
  return (
    <Canvas mode="concurrent">
      <Stats showPanel={0} />

      <Box color="orange" position-x={-2.5} />
      <Box color="hotpink" args={[1.5, 1.5, 1.5]} />
      <Box color="lightblue" position-x={2.5} />

      <Lights />
    </Canvas>
  )
}

export default LCanvas
