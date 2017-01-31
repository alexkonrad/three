var T = THREE;

/* ----------- CAMERA ------------- */
var camera = new T.PerspectiveCamera(75, innerWidth/innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(new T.Vector3(0, 0, 0));

/* ----------- SCENE -------------- */
var scene = new T.Scene();

/* ----------- OBJECTS ------------ */
var material = new T.LineBasicMaterial({ color: 0xbd7704 });

var geometry = new T.Geometry();

geometry.vertices.push(new T.Vector3(-10, -10, 0));
geometry.vertices.push(new T.Vector3(-10, 10, 0));
geometry.vertices.push(new T.Vector3(10, 10, 0));
geometry.vertices.push(new T.Vector3(10, -10, 0));
geometry.vertices.push(new T.Vector3(-10, -10, 0));

geometry.faces.push(new T.Face3(0, 1, 2));
geometry.faces.push(new T.Face3(0, 3, 2));


var line = new T.Line(geometry, material);

scene.add(line);

/* ----------- RENDERER ----------- */
var renderer = new T.WebGLRenderer( { alpha: true } );
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

var render = function () {
  requestAnimationFrame( render );


  renderer.render(scene, camera);
};

render();

