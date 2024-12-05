// Import the Three.js library
import * as THREE from 'three';

// Create a Scene
const scene = new THREE.Scene();

// Create a Camera
const camera = new THREE.PerspectiveCamera(
  75, // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near clipping plane
  1000 // Far clipping plane
);
camera.position.z = 5; // Move the camera back

// Create a Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a Geometry (Cube)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the Cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the Scene
  renderer.render(scene, camera);
}
animate();

// Handle Resizing
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
