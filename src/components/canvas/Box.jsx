import { RoundedBox } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

const Box = ({ color, wireframe, ...props }) => {
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef(null)

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(() =>
    mesh.current
      ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
      : null
  )

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <RoundedBox
        ref={mesh}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? 1.1 : 1}
        args={[1, 1, 1]}
        radius={0.09}
        smoothness={4}
        {...props}
      >
        <meshPhongMaterial {...{ color, wireframe }} />
      </RoundedBox>
    </>
  )
}
export default Box
