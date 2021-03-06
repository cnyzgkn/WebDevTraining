var renderer, width, height;
function initThree() {
    width = document.getElementById('canvas').clientWidth;
    height = document.getElementById('canvas').clientHeight;
    renderer = new THREE.WebGLRenderer({
        antialias : true
    });
    renderer.setSize(width, height);
    document.getElementById('canvas').appendChild(renderer.domElement);
    renderer.setClearColor(0xFFFFFF, 1.0);
}

var camera;
function initCamera() {
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.x = 600;
    camera.position.y = 0;
    camera.position.z = 600;
    camera.up.x = 0;
    camera.up.y = 1;
    camera.up.z = 0;
    camera.lookAt({
        x : 0,
        y : 0,
        z : 0
    });
}

var scene;
function initScene() {
    scene = new THREE.Scene();
}

var light;
function initLight() {
    // A start
    // 第二个参数是光源强度，你可以改变它试一下
    light = new THREE.DirectionalLight(0xFF0000,1);
    // 位置不同，方向光作用于物体的面也不同，看到的物体各个面的颜色也不一样
    light.position.set(1,1,1);
    scene.add(light);
    // A end
}

function initObject() {
    var geometry = new THREE.CubeGeometry( 200, 100, 50, 4, 4);
    var material = new THREE.MeshPhongMaterial( { color:0xFFFFFF} );
    var mesh = new THREE.Mesh( geometry,material);
    mesh.position.set(0,0,0);
    scene.add(mesh);
}

function threeStart() {
    initThree();
    initCamera();
    initScene();
    initLight();
    initObject();
    renderer.clear();
    renderer.render(scene, camera);
}

threeStart();