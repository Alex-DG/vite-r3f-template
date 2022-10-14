import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), glsl()],
  assetExtensions: [
    '**/*.glb',
    '**/*.gltf',
    '**/*.fbx',
    '**/*.mp4',
    '**/*.webp',
    '**/*.png',
    '**/*.jpg',
  ],
})
