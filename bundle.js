

import map from './modules/config.js';
import openStreetMap from './modules/openStreetMap.js';
import bingMap from './modules/bingMap.js';
import xyzMap from './modules/xyz.js';
import arc from './modules/arcGIS.js';
import wmsMap from './modules/wms.js';
import stamenMap from './modules/stamen.js';


/* ---INIT--- */

let config = map(4188426.7147939987,7508764.236877314,12,'map');
document.querySelector('.ol-attribution').remove();


    function openStreet(){
        let streetMap = new openStreetMap();
        config.map.addLayer(streetMap.init());
        config.map.setView(config.view);
    }

    function bing(){
        let bing = new bingMap();
        config.map.addLayer(bing.init());
        config.map.setView(config.view);
    }

    function xyz(){
        let xyz = new xyzMap();
        config.map.addLayer(xyz.init());
        config.map.setView(config.view);
    }

    function arcGIS(map = '/NatGeo_World_Map/MapServer'){
        
        let arcGis = new arc();
        config.map.addLayer(arcGis.init(map));
        config.map.setView(config.view);
    }

    function wms(){

        let wms = new wmsMap();
        config.map.addLayer(wms.init());
        config.map.setView(config.view);
    }

    function stamen(){
        let stamenMaps = new stamenMap();
        config.map.addLayer(stamenMaps.init('watercolor'));
        config.map.addLayer(config.view);
    }

if (location.hash === '') openStreet(map);

window.addEventListener('hashchange',hashDetected,false);
document.addEventListener('DOMContentLoaded',hashDetected,false);

function hashDetected(e){

    let hash = window.location.hash;
    
    let canvas = document.querySelector('.ol-unselectable');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);

    if (hash === '#bing'){
        clearActive(hash);
        bing();
    }

    if (hash === '#' || hash === ''){
        clearActive('#');
        openStreet();
    }

    if (hash === '#xyz'){
        clearActive(hash);
        xyz();
    }

    if (hash === '#arcgis'){
        clearActive(hash);
        arcGIS();
    }

    if(hash === '#wms'){

        clearActive(hash);
        wms();
    }

    // if(hash === '#stamen'){

    //     clearActive(hash);
    //     stamen();
    // }
}


function clearActive(hash){

    let active = document.querySelector('.active');
    let unactive = document.querySelector(`a[href='${hash}']`);

    active.classList.toggle('active');
    unactive.classList.toggle('active');

}