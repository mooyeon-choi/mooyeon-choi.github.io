import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

export default function Room() {
  let scene = new THREE.Scene();
  let renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#introCanvas')
  })

  let camera = new THREE.PerspectiveCamera(30, 1);
  camera.position.set(0,0,5);

  const loader = new GLTFLoader();
  loader.load('./low_poly_room/scene.gltf', function(gltf){
    scene.add(gltf.scene);
    renderer.render(scene, camera);
  });

}