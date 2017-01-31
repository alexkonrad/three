var T = THREE;

/* ----------- CAMERA ------------- */
var camera = new T.PerspectiveCamera(75, innerWidth/innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(new T.Vector3(0, 0, 0));

/* ----------- SCENE -------------- */
var scene = new T.Scene();
var material = new T.LineBasicMaterial({ color: 0x0000ff });

var geometry = new T.Geometry();

geometry.vertices.push(new T.Vector3(-10, 0, 0));
geometry.vertices.push(new T.Vector3(0, 10, 0));
geometry.vertices.push(new T.Vector3(10, 0, 0));

var line = new T.Line(geometry, material);

scene.add(line);

/* ----------- RENDERER ----------- */
var renderer = new T.WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

var render = function () {
  requestAnimationFrame( render );

  renderer.render(scene, camera);
};

render();

