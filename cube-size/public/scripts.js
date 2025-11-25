var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: '#FFF' } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.1;
	cube.rotation.y += 0.1;

	renderer.render(scene, camera);
};

animate();


window.addEventListener('scroll', () => {
	if (window.scrollY == 0) {
		camera.position.z = 5;
	} 
	else if (window.scrollY < 500) {
		camera.position.z = 10; 
	}
	else {
		camera.position.z = 100;
	}
	renderer.render(scene, camera); // Only needed if not using requestAnimationFrame loop
});
