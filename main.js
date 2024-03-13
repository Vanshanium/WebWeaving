import * as THREE from "three"; // Three is the namespace.

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

const cam1 = new THREE.PerspectiveCamera(80,window.innerWidth/window.innerHeight);
cam1.position.z = 4;

my_scene.add(cam1)

// Setting the Renderer like eevee and cycles in blender!

const Renderer = new THREE.WebGL1Renderer({canvas: my_canvas});

Renderer.setSize(window.innerWidth,window.innerHeight);

Renderer.render(my_scene,cam1);

console.log("I am brainless!");




