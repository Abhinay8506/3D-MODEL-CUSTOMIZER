import {proxy} from 'valtio';
import logo from "../assets/threejs.png";
const state=proxy({
    intro:true,
    color:'#05a5b0',
    isLogoTexture:false,
    isFullTexture:false,
    logoDecal:{logo},
    fullDecal:{logo},

});
export default state;