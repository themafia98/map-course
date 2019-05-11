
/*-------------------------------------------------------*/
/*--------  hosting: kindhearted-army.surge.sh ----------*/
/* Repository:  https://github.com/themafia98/map-course */
/* -------------------Pavel Petrovich------------------- */
/*------------------------------------------------------*/


import OpenStreetMap from './modules/openStreetMap.js';
import BingMap from './modules/bingMap.js';
import XyzMap from './modules/xyz.js';
import Arc from './modules/arcGIS.js';
import WmsMap from './modules/wms.js';
import StamenMap from './modules/stamen.js';


/* ---INIT--- */
let ctx = null;
let currentCoords = null;
let canvas = null;

    function openStreet(){
        let streetMap = new OpenStreetMap(12,'map','EPSG:4326');
        streetMap.map.addLayer(streetMap.init());
        streetMap.map.setView(streetMap.view);
        currentCoords = createOverlay();
        streetMap.map.addOverlay(currentCoords);
        eventsOpenLayers(streetMap.map,currentCoords);
    }

    function bing(){
        let bing = new BingMap(12,'map','EPSG:4326');
        bing.map.addLayer(bing.init());
        bing.map.setView(bing.view);
        currentCoords = createOverlay();
        bing.map.addOverlay(currentCoords);
        eventsOpenLayers(bing.map,currentCoords);
    }

    function xyz(){
        let xyz = new XyzMap(12,'map','EPSG:4326');
        xyz.map.addLayer(xyz.init());
        xyz.map.setView(xyz.view);
        currentCoords = createOverlay();
        xyz.map.addOverlay(currentCoords);
        eventsOpenLayers(xyz.map,currentCoords);
    }

    function arcGIS(map = '/NatGeo_World_Map/MapServer'){
        let arcGis = new Arc(12,'map','EPSG:4326');
        let mapCtx = arcGis.init(map);
        arcGis.map.addLayer(mapCtx);
        arcGis.map.setView(arcGis.view);
        currentCoords = createOverlay();
        arcGis.map.addOverlay(currentCoords);
        eventsOpenLayers(arcGis.map,currentCoords);
        arcGis.swipe(mapCtx,arcGis.map);
    }

    function wms(){
        let wms = new WmsMap(12,'map','EPSG:4326');
        wms.map.addLayer(wms.init());
        wms.map.setView(wms.view);
        currentCoords = createOverlay();
        wms.map.addOverlay(currentCoords);
        eventsOpenLayers(wms.map,currentCoords);
    }

    function stamen(){
        let stamenMaps = new StamenMap(12,'map','EPSG:4326');
        stamenMaps.map.addLayer(stamenMaps.init('watercolor'));
        stamenMaps.map.addLayer(stamenMaps.view);
    }



window.addEventListener('hashchange',hashDetected,false);
document.querySelector('.closer').addEventListener('click',clickEvent,false);
document.addEventListener('DOMContentLoaded',hashDetected,false);

function hashDetected(e){
    document.querySelector('.map').innerHTML = '';
    let hash = window.location.hash;
    canvas = document.querySelector('.ol-unselectable');
    if (canvas) {
        ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
    switch(hash){

        case '#bing': {
            clearActive(hash);
            bing();
            break;
        }
        case '#xyz': {
            clearActive(hash);
            xyz();
            break;
        }
        case '#arcgis': {
            clearActive(hash);
            arcGIS();
            break;
        }
        case '#wms': {
            clearActive(hash);
            wms();
            break;
        }
        default: {

            clearActive('#');
            openStreet();
        }
    }
}

function clickEvent(e){

    let target = e.target;
    
    if (target.classList[0] === 'closer' && !target.classList[1])
    target.parentElement.classList.toggle('hide');
}

    function eventsOpenLayers(map,currentCoords){

        map.on('singleclick', function(e) {

            let closer = document.querySelector('.closer').parentElement;
            if(closer.classList[1] === 'hide') closer.classList.toggle('hide');

            let coordinate = e.coordinate;
            let hdms = ol.coordinate.toStringHDMS(ol.proj.transform(
                coordinate, 'EPSG:3857', 'EPSG:4326'));
            document.querySelector('.popup-content')
            .innerHTML = '<p class ="popup-about">You clicked here:</p><code>' + hdms + '</code>';

            currentCoords.setPosition(coordinate);
        },false);
    }


function clearActive(hash){

    let active = document.querySelector('.active');
    let unactive = document.querySelector(`a[href='${hash}']`);

    active.classList.toggle('active');
    unactive.classList.toggle('active');

}


function createOverlay(item = document.querySelector('.hereCord')){
    if (!item) {
 
        let hereCords = document.createElement('div')
        let closer = document.createElement('input');
        let content = document.createElement('div')

        content.classList.add('popup-content');
        hereCords.classList.add('hereCord');
        closer.classList.add('closer');
        closer.setAttribute('type','button');
        closer.setAttribute('value','X');
        hereCords.addEventListener('click',clickEvent,false);
        hereCords.appendChild(closer);
        hereCords.appendChild(content);

        document.querySelector('.custom-controll').appendChild(hereCords);

        item = document.querySelector('.hereCord');
    }
    return new ol.Overlay({
        element: item
    });
}