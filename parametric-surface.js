var T = THREE;

/* ----------- CAMERA ------------- */
var camera = new T.PerspectiveCamera(75, innerWidth/innerHeight, 1, 500);
camera.position.set(0, 20, 100);
camera.lookAt(new T.Vector3(0, 0, 0));

/* ----------- SCENE -------------- */
var scene = new T.Scene();

/* ----------- OBJECTS ------------ */
var material = new T.MeshBasicMaterial({ color: 0xbd7704, wireframe: true, side: T.DoubleSide });

var width = 100
var height = 10;
var width_segments = 100;
var height_segments = 10;

var generateMeshFunction = function (t) {
	return function (x, y) {
		// normalize
		x = x - .5;
		y = y - .5;

		// scale
		x = x * 100;
		y = y * 100;

		// parameterize
		// var z = 0;
		var z = 5 * Math.sin( (x + t) / 10 ) + 5 * Math.sin( (y + t) / 20 );

		return new T.Vector3( x, y, z );
	}
};

var createTimedGeometry = function (t) {
	var meshFunction = generateMeshFunction( t );

	return new T.ParametricGeometry( meshFunction, width_segments, height_segments, true )
};

var generateMesh = function (t) {
	var geometry = createTimedGeometry( t );
	var mesh = new T.Mesh( geometry, material );

	mesh.rotation.x = Math.PI / 2;

	return mesh;
};

/* ----------- RENDERER ----------- */
var renderer = new T.WebGLRenderer( { alpha: true } );
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

var t = 0;
var mesh = generateMesh( t );

var render = function () {
  requestAnimationFrame( render );

  scene.remove( mesh );

  t += 1;

  mesh = generateMesh( t );

  scene.add( mesh );

  renderer.render(scene, camera);
};

render();

