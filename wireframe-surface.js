var T = THREE;

/* ----------- FUNCTIONS ---------- */
var createSquare = function (geometry, x, y, delta) {
 
  geometry.vertices.push(new T.Vector3(x, y, 0));
  geometry.vertices.push(new T.Vector3(x, y + delta, 0));
  geometry.vertices.push(new T.Vector3(x + delta, y + delta, 0));
  geometry.vertices.push(new T.Vector3(x + delta, y, 0));
  geometry.vertices.push(new T.Vector3(x, y, 0));
 
  var n = geometry.vertices.length - 5;

  geometry.faces.push(new T.Face3(n + 0, n + 2, n + 1));
  geometry.faces.push(new T.Face3(n + 0, n + 3, n + 2));

};

/* ----------- CAMERA ------------- */
var camera = new T.PerspectiveCamera(75, innerWidth/innerHeight, 1, 500);
camera.position.set(0, 10, 100);
camera.lookAt(new T.Vector3(0, 0, 0));

/* ----------- SCENE -------------- */
var scene = new T.Scene();

/* ----------- OBJECTS ------------ */
var material = new T.MeshBasicMaterial({ color: 0xbd7704, wireframe: true });

var geometry = new T.Geometry();

for (var i=0; i<10; i++)
  for (var j=0; j<10; j++)
    createSquare( geometry, 10 * i, 10 * j, 10 );

geometry.applyMatrix( new T.Matrix4().makeTranslation( -50, -50, 0 ) );
geometry.applyMatrix( new T.Matrix4().makeRotationX( Math.PI / 2 ) );

var mesh = new T.Mesh(geometry, material);

scene.add(mesh);

/* ----------- RENDERER ----------- */
var renderer = new T.WebGLRenderer( { alpha: true } );
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

var render = function () {
  requestAnimationFrame( render );



  renderer.render(scene, camera);
};

render();

