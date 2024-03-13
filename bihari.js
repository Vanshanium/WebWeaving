// import * as THREE from "./threejs_module/three.js"; // Three is the namespace.

// This is the Scene same as blender!!!
//Scene have Global lighting so dont cry for the lighting!

const my_scene = new THREE.Scene();
const my_canvas = document.querySelector(".webgl");




// Mesh is just the combonation of geometry and material!

const cube_geo = new THREE.BoxGeometry(1,1,2); // This only makes the geometry of the cube not the mesh
const cube_material = new THREE.MeshBasicMaterial({color:0xff5733});

const cube = new THREE.Mesh(cube_geo,cube_material);
my_scene.add(cube)


//Setting Up the camera.

const cam1 = new THREE.PerspectiveCamera(80,16/9);
cam1.position.z = 20;

console.log(cam1.position);


// Setting the Renderer like eevee and cycles in blender!

const Renderer = new THREE.WebGL1Renderer({canvas: my_canvas});

Renderer.setSize(800,600);

console.log("I am brainless!");





