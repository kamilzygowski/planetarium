import './style/style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#background'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.x = 1;
camera.position.y = 50;
camera.position.z = 1;

camera.lookAt(new THREE.Vector3(0, 0, 0));


renderer.render(scene, camera);

/*const geometry = new THREE.TorusGeometry(10, 3 ,16 ,100);
const material = new THREE.MeshStandardMaterial({color:'#fff', wireframe:true});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);*/

// LIGHTS
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(35, 35, 35);

const ambientLight = new THREE.AmbientLight('#fff');
ambientLight.position.set(12, 12, 12);
scene.add(ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);
// GRID
//const gridHelper = new THREE.GridHelper(200,50);
//scene.add(gridHelper);

// Controls for debug
const controls = new OrbitControls(camera, renderer.domElement);

// Creating planets
const planetGeo = new THREE.SphereGeometry(15, 52, 32);
const planetMap = new THREE.TextureLoader().load('https://i.postimg.cc/4yB16SPv/planet-Texture.jpg');
const planetNormalMap = new THREE.TextureLoader().load('https://i.postimg.cc/fR3vd59X/planet-Terrain.webp');
const planetMaterial = new THREE.MeshStandardMaterial({ map: planetMap, normalMap: planetNormalMap, color: '#fff' });
const planet = new THREE.Mesh(planetGeo, planetMaterial);
scene.add(planet);

function addStar() {
  const geometry = new THREE.IcosahedronGeometry(0.68, 0);
  const starNormal = new THREE.TextureLoader().load('https://i.postimg.cc/RFm1jBbQ/star-Normal.jpg');
  const material = new THREE.MeshStandardMaterial({ color: '#fffa65' });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(1000));

  star.position.set(x, y, z);

  scene.add(star);

   //trying to change star color
  const newMaterial = new THREE.MeshStandardMaterial({ color: '#ff6b81' });


  setTimeout(() => {
    star.material = newMaterial;
  }, 1000);
  setTimeout(() => {
    star.material = material;
  }, 2000);
}

Array(1140).fill().forEach(addStar);

// t is var made for sinus function
let t = 0;
function animate() {
  requestAnimationFrame(animate);

  /*torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;*/

  controls.update();
  renderer.render(scene, camera);
  planet.rotation.x += 0.02;
  planet.rotation.y += 0.005;
  t += 0.01;
  planet.position.x = 20 * Math.cos(t) + 0;
  planet.position.z = 20 * Math.sin(t) + 0;
  //console.log(camera.position.x, camera.position.y, camera.position.z);

}

document.addEventListener('keydown', function (e) {
  switch (e.code) {
    case 'KeyW':
      camera.position.x -= 5;
      break;
    case 'KeyA':
      camera.position.y += 5;
      break;
    case 'KeyD':
      camera.position.y -= 5;
      break;
    case 'KeyS':
      camera.position.x += 1;
      break;
  }


})
// Turning texture into app background
const spaceTexture = new THREE.TextureLoader().load('https://i.postimg.cc/9fZt8M1Q/background.jpg');
scene.background = spaceTexture;

animate();
