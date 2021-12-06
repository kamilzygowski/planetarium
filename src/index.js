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

camera.position.x = 55;
camera.position.y = 51;
camera.position.z = 7;

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
//scene.add(lightHelper);
// GRID
//const gridHelper = new THREE.GridHelper(2000,500);
//scene.add(gridHelper);

// Controls for debug
const controls = new OrbitControls(camera, renderer.domElement);

// Creating planets
const planetGeo = new THREE.SphereGeometry(15, 52, 32);
const planetMap = new THREE.TextureLoader().load('https://i.postimg.cc/d13Rp4dv/dcklc0u-feeae0dc-f164-436a-8e75-5c9a7f3e3c71.png');
const planetNormalMap = new THREE.TextureLoader().load('https://i.postimg.cc/fR3vd59X/planet-Terrain.webp');
const planetMaterial = new THREE.MeshStandardMaterial({ map: planetMap, normalMap: planetNormalMap, color: '#fff' });
const planet = new THREE.Mesh(planetGeo, planetMaterial);
scene.add(planet);

const planet2Geo = new THREE.SphereGeometry(17, 52, 32);
const planet2Map = new THREE.TextureLoader().load('https://i.postimg.cc/HnCwnHRW/5c8ae9d8f0ed47730c99d0cb25e8d576.jpg');
const planet2Material = new THREE.MeshStandardMaterial({ map: planet2Map, normalMap: planetNormalMap, color: '#fff' });
const planet2 = new THREE.Mesh(planet2Geo, planet2Material);
planet2.position.set(80,6,0);
scene.add(planet2);

const sunGeo = new THREE.SphereGeometry(50, 52, 32);
const sunMap = new THREE.TextureLoader().load('https://i.postimg.cc/6pdN4h89/f48f469bd71cd046d3e9cb340fb608ce-large.png');
const sunMaterial = new THREE.MeshStandardMaterial({ map: sunMap, normalMap: planetNormalMap, color: '#fff' });
const sun = new THREE.Mesh(sunGeo, sunMaterial);
sun.position.set(0,16,0);
scene.add(sun);

const planet3Geo = new THREE.SphereGeometry(17, 52, 32);
const planet3Map = new THREE.TextureLoader().load('https://i.postimg.cc/QtBDCZ5z/01-3.jpg');
const planet3Material = new THREE.MeshStandardMaterial({ map: planet3Map, normalMap: planetNormalMap, color: '#fff' });
const planet3 = new THREE.Mesh(planet3Geo, planet3Material);
planet3.position.set(170,0,0);
scene.add(planet3);

const planet4Geo = new THREE.SphereGeometry(15, 52, 32);
const planet4Map = new THREE.TextureLoader().load('https://i.postimg.cc/RZrWzXr9/5d00f3bcec96461bc92c5472-opmbuilder-opm-mars-colour-celestia-20190612143601.png');
const planet4Material = new THREE.MeshStandardMaterial({ map: planet4Map, normalMap: planetNormalMap, color: '#fff' });
const planet4 = new THREE.Mesh(planet4Geo, planet4Material);
planet4.position.set(210,-22,0);
scene.add(planet4);

const planet5Geo = new THREE.SphereGeometry(36, 52, 32);
const planet5Map = new THREE.TextureLoader().load('https://i.postimg.cc/4yB16SPv/planet-Texture.jpg');
const planet5Material = new THREE.MeshStandardMaterial({ map: planet5Map, normalMap: planetNormalMap, color: '#fff' });
const planet5 = new THREE.Mesh(planet5Geo, planet5Material);
planet5.position.set(250,21,0);
scene.add(planet5);

const planet6Geo = new THREE.SphereGeometry(23, 52, 32);
const planet6Map = new THREE.TextureLoader().load('https://i.postimg.cc/xdnqX8T4/8k-saturn.jpg');
const planet6Material = new THREE.MeshStandardMaterial({ map: planet6Map, normalMap: planetNormalMap, color: '#fff' });
const planet6 = new THREE.Mesh(planet6Geo, planet6Material);
planet6.position.set(300,-10,0);
scene.add(planet6);

const planet8Geo = new THREE.SphereGeometry(23, 52, 32);
const planet8Map = new THREE.TextureLoader().load('https://i.postimg.cc/TP01gxKY/dc18wwb-e195cd81-efbd-480a-9f51-5100a530683d.jpg');
const planet8Material = new THREE.MeshStandardMaterial({ map: planet8Map, normalMap: planetNormalMap, color: '#fff' });
const planet8 = new THREE.Mesh(planet8Geo, planet8Material);
planet8.position.set(410,7,0);
scene.add(planet8);

const planet9Geo = new THREE.SphereGeometry(23, 52, 32);
const planet9Map = new THREE.TextureLoader().load('https://i.postimg.cc/NM0MxnX8/file.jpg');
const planet9Material = new THREE.MeshStandardMaterial({ map: planet9Map, normalMap: planetNormalMap, color: '#fff' });
const planet9 = new THREE.Mesh(planet9Geo, planet9Material);
planet9.position.set(450,-31,0);
scene.add(planet9);

let star;
function addStar() {
  const geometry = new THREE.IcosahedronGeometry(0.68, 0);
  const starNormal = new THREE.TextureLoader().load('https://i.postimg.cc/HkWgqyS3/pobrane.jpg');
  const material = new THREE.MeshStandardMaterial({ map:starNormal, color: '#fffa65' });
  star = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(1000));
  star.position.set(x, y, z);
  scene.add(star);
   //trying to change star color
   const newMaterial = new THREE.MeshStandardMaterial({ color: '#ff6b81' });
   /*if (i%100 < 50){
     star.material = newMaterial;
   } else if (i%100 > 50){
  
     star.material = material;
   }*/
  
}

Array(390).fill().forEach(addStar);

// t is var made for sinus function
let t = 0;
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
let g = 0;
let h = 0;

function animate() {
  requestAnimationFrame(animate);

  /*torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;*/

  controls.update();
  renderer.render(scene, camera);
  planet.rotation.x += 0.02;
  planet.rotation.y += 0.005;
  t += 0.0086;
  a += 0.0089;
  b += 0.0062;
  c += 0.0044;
  d += 0.0063;
  e += 0.0024;
  f += 0.0034;
  g += 0.0046;
  h += 0.0086;

  sun.rotation.x += 0.012;
  planet.rotation.y += 0.001;

  planet.position.x = 100 * Math.cos(t) + 0;
  planet.position.z = 100 * Math.sin(t) + 0;
  console.log(camera.position.x, camera.position.y, camera.position.z);
  planet2.rotation.x += 0.02;
  planet2.rotation.y += 0.005;
  planet2.position.x = 180 * Math.cos(a) + 0;
  planet2.position.z = 180 * Math.sin(a) + 0;
  planet3.rotation.x += 0.02;
  planet3.rotation.y += 0.005;
  planet3.position.x = 260 * Math.cos(b) + 0;
  planet3.position.z = 260 * Math.sin(b) + 0;
  planet4.rotation.x += 0.02;
  planet4.rotation.y += 0.005;
  planet4.position.x = 340 * Math.cos(c) + 0;
  planet4.position.z = 340 * Math.sin(c) + 0;
  planet5.rotation.x += 0.02;
  planet5.rotation.y += 0.005;
  planet5.position.x = 420 * Math.cos(d) + 0;
  planet5.position.z = 420 * Math.sin(d) + 0;
  planet6.rotation.x += 0.02;
  planet6.rotation.y += 0.005;
  planet6.position.x = 500 * Math.cos(e) + 0;
  planet6.position.z = 500 * Math.sin(e) + 0;
  planet8.rotation.x += 0.02;
  planet8.rotation.y += 0.005;
  planet8.position.x = 580 * Math.cos(g) + 0;
  planet8.position.z = 580 * Math.sin(g) + 0;
  planet9.rotation.x += 0.02;
  planet9.rotation.y += 0.005;
  planet9.position.x = 640 * Math.cos(h) + 0;
  planet9.position.z = 640 * Math.sin(h) + 0;
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
