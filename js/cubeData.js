	
function buildCubeData(scene, cubeSize, baseColor) {

	var geometry = new THREE.BoxBufferGeometry(cubeSize, cubeSize, cubeSize);


	// start at "center" of J

	var o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(0, 0, 0);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize, 0, cubeSize * -3);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(-cubeSize, 0, -cubeSize);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(0, cubeSize, cubeSize * 2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize, cubeSize, cubeSize * 3);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(-cubeSize, cubeSize, cubeSize * -2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(0, cubeSize * 2, cubeSize * 2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize, cubeSize * 2, cubeSize);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(-cubeSize, cubeSize * 2, cubeSize * 4);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(0, cubeSize * 3, cubeSize * 4);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize, cubeSize * 3, cubeSize * -2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(-cubeSize, cubeSize * 3, cubeSize * 3);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(0, cubeSize * 4, cubeSize * -3);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize, cubeSize * 4, cubeSize * 3);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(-cubeSize, cubeSize * 4, cubeSize * -2);
	scene.add(o);

	// height 5, 6, 7 -- top bar

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(0, cubeSize * 5, cubeSize * 3);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize, cubeSize * 5, cubeSize * -2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * 2, cubeSize * 5, cubeSize * -4);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * 3, cubeSize * 5, 0);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * 4, cubeSize * 5, -cubeSize);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * 5, cubeSize * 5, cubeSize * 2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(-cubeSize, cubeSize * 5, cubeSize * -4);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -2, cubeSize * 5, cubeSize * -3);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -3, cubeSize * 5, cubeSize * 4);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -4, cubeSize * 5, cubeSize * -2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -5, cubeSize * 5, cubeSize);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(0, cubeSize * 6, cubeSize * 2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize, cubeSize * 6, cubeSize * -2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * 2, cubeSize * 6, cubeSize);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * 3, cubeSize * 6, cubeSize * 3);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * 4, cubeSize * 6, 0);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * 5, cubeSize * 6, cubeSize * -2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(-cubeSize, cubeSize * 6, cubeSize);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -2, cubeSize * 6, cubeSize * -3);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -3, cubeSize * 6, cubeSize * -3);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -4, cubeSize * 6, -cubeSize);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -5, cubeSize * 6, cubeSize * 3);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(0, cubeSize * 7, -cubeSize);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize, cubeSize * 7, cubeSize * 2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * 2, cubeSize * 7, 0);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * 3, cubeSize * 7, -cubeSize);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * 4, cubeSize * 7, 0);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * 5, cubeSize * 7, cubeSize * 2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(-cubeSize, cubeSize * 7, cubeSize * -2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -2, cubeSize * 7, -cubeSize);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -3, cubeSize * 7, cubeSize * -2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -4, cubeSize * 7, cubeSize);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -5, cubeSize * 7, -cubeSize);
	scene.add(o);

	// negative heights ,going down and around loop of bottom of J

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(0, -cubeSize, cubeSize * -2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize, -cubeSize, cubeSize * -4);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(-cubeSize, -cubeSize, -cubeSize);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(0, cubeSize * -2, cubeSize * -2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize, cubeSize * -2, cubeSize * 4);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(-cubeSize, cubeSize * -2, cubeSize * -3);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(0, cubeSize * -3, cubeSize * 3);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize, cubeSize * -3, cubeSize * 2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(-cubeSize, cubeSize * -3, cubeSize * -3);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(0, cubeSize * -4, -cubeSize);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize, cubeSize * -4, cubeSize * 2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(-cubeSize, cubeSize * -4, cubeSize);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -2, cubeSize * -4, cubeSize * 4);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -3, cubeSize * -4, cubeSize * -2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -4, cubeSize * -4, 0);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -5, cubeSize * -4, cubeSize * 3);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -6, cubeSize * -4, cubeSize * -4);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -7, cubeSize * -4, cubeSize * -3);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(0, cubeSize * -5, cubeSize * 2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(-cubeSize, cubeSize * -5, 0);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -2, cubeSize * -5, cubeSize * 3);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -3, cubeSize * -5, -cubeSize);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -4, cubeSize * -5, cubeSize * -2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -5, cubeSize * -5, cubeSize);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -6, cubeSize * -5, cubeSize * -3);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(-cubeSize, cubeSize * -6, cubeSize);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -2, cubeSize * -6, cubeSize * 2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -3, cubeSize * -6, cubeSize * -2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -4, cubeSize * -6, 0);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -5, cubeSize * -6, -cubeSize);
	scene.add(o);

	// looping back up
	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -5, cubeSize * -2, cubeSize * 3);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -6, cubeSize * -2, cubeSize * 2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -7, cubeSize * -2, cubeSize * -4);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -5, cubeSize * -3, cubeSize * -4);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -6, cubeSize * -3, cubeSize * -2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize * -7, cubeSize * -3, cubeSize * 4);
	scene.add(o);


	// adding cubes (redundant in 'J') for 'S', starting at "center" of J

	var o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(0, 0, cubeSize * 2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize, 0, cubeSize);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(-cubeSize, 0, cubeSize * -2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize, cubeSize, cubeSize);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize, cubeSize, -cubeSize);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(-cubeSize, cubeSize, 0);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(0, cubeSize * 2, cubeSize * 3);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(0, cubeSize * 3, cubeSize * -3);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize, cubeSize * 3, cubeSize * 2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(-cubeSize, cubeSize * 3, cubeSize * -4);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(0, cubeSize * 4, cubeSize * 4);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(cubeSize, cubeSize * 4, cubeSize * -4);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(-cubeSize, cubeSize * 4, cubeSize * 2);
	scene.add(o);

	o = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
	o.position.set(0, -cubeSize, cubeSize * -3);
	scene.add(o);


}
