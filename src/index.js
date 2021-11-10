import './styles/index.scss';
import './assets/fonts/BlenderPro-Bold.ttf';
import './assets/fonts/BlenderPro-Book.ttf';
import './assets/fonts/TrebleBold.ttf';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
import {Engine} from './engine.js';

let isMobileOrTablet = function() {
  var check = false
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    check = true;
    local.isMobile = true;
  }
  if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) {
    check = true;
  }
  if (navigator.platform === 'iPhone' && navigator.maxTouchPoints > 1) {
    local.isIphone = true;
    check = true;
  }
  if (navigator.platform === 'iPad' && navigator.maxTouchPoints > 1) {
    check = true;
  }
  return check;
}
class App{
  constructor(){
    this.engine = new Engine("FROG_F_V07.glb");
  }
}
let app =  new App();
app.engine.initFunction();
setTimeout(()=>{
  app.scene = app.engine.scene;
}, 300)

window.app = app;


