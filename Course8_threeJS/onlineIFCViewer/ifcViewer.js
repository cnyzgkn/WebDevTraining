/*
* 围绕某个 x,y,z轴测试
*/

var renderer;
var stats;

function initThree() {
    width = document.getElementById('canvas-frame').clientWidth;
    height = document.getElementById('canvas-frame').clientHeight;
    renderer = new THREE.WebGLRenderer({
        antialias : true
    });
    renderer.setSize(width, height);
    document.getElementById('canvas-frame').appendChild(renderer.domElement);
    renderer.setClearColor(0xFFFFFF, 1.0);

    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.getElementById('canvas-frame').appendChild(stats.domElement);
}

var camera;
function initCamera() {
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 100000);
    camera.position.x = 10000;
    camera.position.y = 30000;
    camera.position.z = 60000;
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
    light = new THREE.AmbientLight(0xFF0000);
    light.position.set(10000, 10000, 20000);
    scene.add(light);

}

function readJSON() {
    $.getJSON("result.json",function(json){
        $.each(json, function(ifcObjectIndex, ifcObject){ 
            if(ifcObject["noVertices"] !== 0)
            {
                var geometry = new THREE.Geometry();
                var noVertices = ifcObject["noVertices"];
                var vertices = ifcObject["vertices"];
                //document.writeln(vertices);
                var indicesForFaces = ifcObject["indicesForFaces"];
                var noPrimitivesForFaces = ifcObject["noPrimitivesForFaces"];
                for(let i = 0; i < noPrimitivesForFaces; i++)
                {
                    let x = vertices[6 * indicesForFaces[3*i+0] + 0];
                    let y = vertices[6 * indicesForFaces[3*i+0] + 1];
                    let z = vertices[6 * indicesForFaces[3*i+0] + 2];
                }


                var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors} );
                mesh = new THREE.Mesh( geometry,material);
                mesh.position = new THREE.Vector3(0,0,0);
                scene.add(mesh);
            }
        });
    });
}

/*
var cube;
var mesh;
function initObject() {
   
    var geometry = new THREE.BoxGeometry( 10000, 10000, 10000 );
    
    for ( var i = 0; i < geometry.faces.length; i += 2 ) {

        var hex = Math.random() * 0xffffff;
        geometry.faces[ i ].color.setHex( hex );
        geometry.faces[ i + 1 ].color.setHex( hex );

    }
    
    var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors} );
    mesh = new THREE.Mesh( geometry,material);
    mesh.position = new THREE.Vector3(0,0,0);
    scene.add(mesh);
}
*/

function threeStart() {
    /*
    initThree();
    initCamera();
    initScene();
    initLight();
    initObject();
    
    */
    readJSON();
    //animation();
}

/*
function rotateFunction()
{
    mesh.rotateX(0.02);
    mesh.rotateY(0.02);
    mesh.rotateZ(0.02);
}

function rotateProperty()
{
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;
}

// 帧循环、游戏循环
function animation()
{
    //rotateProperty();
    rotateFunction();
    renderer.render(scene, camera);
    requestAnimationFrame(animation);
    stats.update();
}
*/

threeStart();