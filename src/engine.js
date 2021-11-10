class Engine {
    constructor(model){
      this.canvas = document.getElementById("babylon");
      this.initModel = model;
    }
createDefaultEngine(){
  return new BABYLON.Engine(this.canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
    disableWebGL2Support: false
  });
}
async asyncEngineCreation() {
  try {
    return this.createDefaultEngine();
  } catch (e) {
    return this.createDefaultEngine();
  }
}
async initFunction() {
    this.engine = await this.asyncEngineCreation();
    console.log(this.engine);
    if (!this.engine) throw 'engine should not be null.';
    this.scene = await BABYLON.SceneLoader.LoadAsync(
      "scene/",
      this.initModel,
      this.engine
    );
    this.scene.activeCamera = new BABYLON.ArcRotateCamera("arcCamera", Math.PI / 2, Math.PI / 4, 10, new BABYLON.Vector3(0, 0, 0), this.scene);
    this.scene.activeCamera.position = new BABYLON.Vector3(-0.09972031532200253, 1.7090478603765704, 4.261209350010032);
    this.scene.activeCamera.target.y = 0.47
    // this.scene.activeCamera.attachControl(true);
    this.light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 10, 0), this.scene);

    // связанно с фрогом
    this.scene.animationGroups.forEach((item)=>{
      item.stop()
    })
    this.scene.animationGroups[5].play(true)
    this.scene.getMeshByName("Hammer").visibility = 0;
    this.scene.getMeshByName("Pistol").visibility = 0;

    // связанно с фрогом
    this.scene.onPointerObservable.add((pointerInfo) => {
      switch (pointerInfo.type) {
        case BABYLON.PointerEventTypes.POINTERDOWN:
          console.log("POINTER DOWN");
          break;
        case BABYLON.PointerEventTypes.POINTERUP:
          console.log("POINTER UP");
          break;
        case BABYLON.PointerEventTypes.POINTERMOVE:
          console.log("POINTER MOVE");
          break;
        }
      });
    let self = this;
    this.engine.runRenderLoop(function() {
        if (self.scene && self.scene.activeCamera) {
          self.scene.render();
        }
      });
    window.scene = this.scene;
    //this.camera = this.createCamera();
}
createCamera(){
  console.log(this.scene.activeCamera);
  return this.scene.activeCamera;
}
async asyncLoad(nameNum, names, isChar) {
  return new Promise(function(resolve, reject) {
    asyncLoad();
    function asyncLoad() {
      //BABYLON.SceneLoader.AppendAsync("scene/", names[nameNum].model, this.scene).then(() => {});
    }
  })
}
}
export{Engine}

// local.camTarget = {};
// local.camTarget.targetName = "hero";
// local.camTarget.position = local.hero.position;
// local.camTarget.rotation = local.hero.rotation;
// local.cameraParent = BABYLON.MeshBuilder.CreateBox("CB", {
//   height: .01,
//   width: .01,
//   depth: .01
// })
// local.cameraParent.visibility = 0;
// local.cameraParent.position = new BABYLON.Vector3(local.hero.position.x, local.hero.position.y + 2.3, local.hero.position.z);
// local.cameraParent.rotation = new BABYLON.Vector3(local.hero.rotation.x, local.hero.rotation.y, local.hero.rotation.z);
// local.curCamPos = new BABYLON.Vector3(-0.04231647145375691, 2.5949745264318524, 6.405287094651479);
// local.camera.setPosition(new BABYLON.Vector3(local.curCamPos.x, local.curCamPos.y, local.curCamPos.z));
// local.camera.target = new BABYLON.Vector3(0,0,0);
// local.camera.parent = local.cameraParent;