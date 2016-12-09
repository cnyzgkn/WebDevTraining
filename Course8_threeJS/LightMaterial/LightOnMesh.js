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

var pointlight;
function initLight() {
    //点光源
    pointLight = new THREE.PointLight(0xFFFFFF, 1, 0);
    pointLight.position.set(100, 100, 100);
    scene.add(pointLight);
}

var cube;
function initObject() {
    
    // 初始化几何形状
    var geometry = new THREE.Geometry();

    // 设置顶点位置
    // 顶部4顶点
    geometry.vertices.push(new THREE.Vector3(-100, 200, -100));
    geometry.vertices.push(new THREE.Vector3(100, 200, -100));
    geometry.vertices.push(new THREE.Vector3(100, 200, 100));
    geometry.vertices.push(new THREE.Vector3(-100, 200, 100));
    // 底部4顶点
    geometry.vertices.push(new THREE.Vector3(-200, 0, -200));
    geometry.vertices.push(new THREE.Vector3(200, 0, -200));
    geometry.vertices.push(new THREE.Vector3(200, 0, 200));
    geometry.vertices.push(new THREE.Vector3(-200, 0, 200));

    // 设置顶点连接情况
    // 顶面
    geometry.faces.push(new THREE.Face3(0, 1, 3));
    geometry.faces.push(new THREE.Face3(1, 2, 3));
    // 底面
    geometry.faces.push(new THREE.Face3(4, 5, 6));
    geometry.faces.push(new THREE.Face3(5, 6, 7));
    // 四个侧面
    geometry.faces.push(new THREE.Face3(1, 5, 6));
    geometry.faces.push(new THREE.Face3(6, 2, 1));
    geometry.faces.push(new THREE.Face3(2, 6, 7));
    geometry.faces.push(new THREE.Face3(7, 3, 2));
    geometry.faces.push(new THREE.Face3(3, 7, 0));
    geometry.faces.push(new THREE.Face3(7, 4, 0));
    geometry.faces.push(new THREE.Face3(0, 4, 5));
    geometry.faces.push(new THREE.Face3(0, 5, 1));

    //计算物体法向量否则光照无法显示
    geometry.computeFaceNormals();
    geometry.computeVertexNormals();

    var material = new THREE.MeshPhongMaterial( { color:0xFF0000} );
    var mesh = new THREE.Mesh( geometry, material);
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