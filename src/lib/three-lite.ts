// Re-exports only the three.js pieces ParticleCube needs, as a static import.
// Keeping this as its own module (rather than dynamically importing 'three'
// directly) lets the bundler tree-shake the rest of three.js out of the
// lazy-loaded chunk instead of shipping the whole library.
export { Scene, PerspectiveCamera, WebGLRenderer, Group, BufferGeometry, Float32BufferAttribute, PointsMaterial, Points } from 'three';
