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
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 500000);
    camera.position.x = 30000;
    camera.position.y = 30000;
    camera.position.z = 30000;
    camera.up.x = 1;
    camera.up.y = 1;
    camera.up.z = 1;
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
    light.position.set(100000, 100000, 200000);
    scene.add(light);
}


function readJSON() {
    $.ajaxSettings.async = false; 
    $.getJSON("result.json",function(json){
        $.each(json, function(ifcObjectIndex, ifcObject){ 
            if(ifcObject["noVertices"] !== 0)
            //if(ifcObject["globalId"] === "3KuQVjTrvCR9JuCewVbNQn")
            {
                var geometry = new THREE.Geometry();
                
                var noVertices = ifcObject["noVertices"];
                var vertices = ifcObject["vertices"];
                //document.writeln(vertices);
                var indicesForFaces = ifcObject["indicesForFaces"];
                var noPrimitivesForFaces = ifcObject["noPrimitivesForFaces"];
                //vertices
                for(let i = 0; i < noVertices; i++)
                {
                    let x = vertices[6*i+0];
                    let y = vertices[6*i+1];
                    let z = vertices[6*i+2];
                    var vertice = new THREE.Vector3(x, y, z);
                    geometry.vertices.push(vertice);
                }

                //faces
                for(let i = 0; i < noPrimitivesForFaces; i++)
                {
                    var face = new THREE.Face3(
                        indicesForFaces[3*i+0],
                        indicesForFaces[3*i+1],
                        indicesForFaces[3*i+2]
                        );
                    geometry.faces.push(face);
                }

                for ( var i = 0; i < geometry.faces.length; i++ ) {
                    geometry.faces[i].color.set(0xFF0000);
                }

                //calculate norm for lighting
                geometry.computeFaceNormals();
                geometry.computeVertexNormals();

                var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors} );
                let mesh = new THREE.Mesh( geometry,material);
                mesh.position = new THREE.Vector3(0,0,0);
                scene.add(mesh);
            }
        });
    });
}

var cube;
var mesh;
function initObject() { 
    var geometry = new THREE.Geometry();

    var ver_0 = new THREE.Vector3(9000, -3000, 0);
    var ver_1 = new THREE.Vector3(-9000, 3000, 0);
    var ver_2 = new THREE.Vector3(0, 6000, 0);
    var ver_3 = new THREE.Vector3(0, 0, 9000);
    geometry.vertices.push(ver_0);
    geometry.vertices.push(ver_1);
    geometry.vertices.push(ver_2);
    geometry.vertices.push(ver_3);

    var face_0 = new THREE.Face3(0, 1, 2);
    var face_1 = new THREE.Face3(0, 2, 3);
    var face_2 = new THREE.Face3(0, 1, 3);
    var face_3 = new THREE.Face3(2, 1, 3);
    geometry.faces.push(face_0);
    geometry.faces.push(face_1);
    geometry.faces.push(face_2);
    geometry.faces.push(face_3);

    for ( let i = 0; i < geometry.faces.length; i++ ) {
        geometry.faces[i].color.set(0xFF0000);
    }

    //calculate norm for lighting
    geometry.computeFaceNormals();
    geometry.computeVertexNormals();

    var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors} );
    mesh = new THREE.Mesh( geometry,material);
    mesh.position = new THREE.Vector3(0,0,0);
    scene.add(mesh);
}


function threeStart() {
    initThree();
    initCamera();
    initScene();
    initLight();
    //initObject();
    readJSON();
    animation();
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
*/

// 帧循环、游戏循环
function animation()
{
    //rotateProperty();
    //rotateFunction();
    renderer.render(scene, camera);
    //requestAnimationFrame(animation);
    //stats.update();
}

threeStart();