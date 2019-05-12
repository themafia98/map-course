
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


/* ---INIT--- */
let mapCtx = null; // map context
let mapCtx2 = null;
let currentCoords = null; // save coords
let isEventsLoop = document.querySelector('.loop');
let isEventsRect = document.querySelector('.rect');

let hepBasic = document.querySelector('.basicMap');

let canvas = document.querySelector('.ol-unselectable'); // cav
let ctx = null;
let heatmapLyaer = null;

let currentMap = null;

    function openStreet(){

        hepBasic.checked = true;
        let streetMap = new OpenStreetMap(12,'map','EPSG:4326');
        mapCtx = streetMap.init();
        mapCtx2 = new Arc().init('/World_Shaded_Relief/MapServer');
        streetMap.map.addLayer(mapCtx2);
        streetMap.map.addLayer(mapCtx);
        streetMap.map.setView(streetMap.view);
        currentCoords = createOverlay();
        streetMap.map.addOverlay(currentCoords);
        eventsOpenLayers(streetMap.map,currentCoords);
        swipe(mapCtx,streetMap.map);

        currentMap = streetMap;
    }

    function bing(){

        hepBasic.checked = true;
        let bing = new BingMap(12,'map','EPSG:4326');
        mapCtx = bing.init();
        mapCtx2 = new ol.layer.Tile({
            source: new ol.source.Stamen({
                layer: 'watercolor'
            })
        });
        bing.map.addLayer(mapCtx2);
        bing.map.addLayer(mapCtx);
        bing.map.setView(bing.view);
        currentCoords = createOverlay();
        bing.map.addOverlay(currentCoords);
        eventsOpenLayers(bing.map,currentCoords);
        swipe(mapCtx,bing.map);

        currentMap = bing;
    }

    function xyz(){

        hepBasic.checked = true;
        let xyz = new XyzMap(12,'map','EPSG:4326');
        mapCtx = xyz.init();
        mapCtx2 = new Arc().init('/World_Imagery/MapServer'); // слой 2
        xyz.map.addLayer(mapCtx2);
        xyz.map.addLayer(mapCtx);
        xyz.map.setView(xyz.view);
        currentCoords = createOverlay();
        xyz.map.addOverlay(currentCoords);
        eventsOpenLayers(xyz.map,currentCoords);
        swipe(mapCtx,xyz.map);

        currentMap = xyz;
    }

    function arcGIS(map = '/NatGeo_World_Map/MapServer'){

        hepBasic.checked = true;
        let arcGis = new Arc(12,'map','EPSG:4326');
        mapCtx = arcGis.init(map); // слой 1
        mapCtx2 = arcGis.init('/World_Topo_Map/MapServer'); // слой 2
        arcGis.map.addLayer(mapCtx2);
        arcGis.map.addLayer(mapCtx);
        arcGis.map.setView(arcGis.view);
        currentCoords = createOverlay();
        arcGis.map.addOverlay(currentCoords);


        eventsOpenLayers(arcGis.map,currentCoords);
        swipe(mapCtx,arcGis.map);

        currentMap = arcGis;
    }

    function wms(){

        hepBasic.checked = true;
        let wms = new WmsMap(12,'map','EPSG:4326');
        mapCtx = wms.init();
        mapCtx2 = wms.init('',{'LAYERS': 'ne:ne', 'TILED': true},
                                'https://ahocevar.com/geoserver/wms'); // слой 2
        wms.map.addLayer(mapCtx2);
        wms.map.addLayer(mapCtx);
        wms.map.setView(wms.view);
        currentCoords = createOverlay();
        wms.map.addOverlay(currentCoords);
        eventsOpenLayers(wms.map,currentCoords);
        swipe(mapCtx,wms.map);

        currentMap = wms;
    }



window.addEventListener('hashchange',hashDetected,false);

document.addEventListener('click',(e) => {
    
    if (e.target.dataset.type === 'on' && e.target.checked){

        heatmap('cities.json',currentMap.map);
    } else if (e.target.dataset.type === 'off' && e.target.checked){
        
        let layers = currentMap.map.getLayers();
        
        currentMap.map.removeLayer(heatmapLyaer);
    }

},false);

document.querySelector('.closer').addEventListener('click',clickEvent,false);
document.addEventListener('DOMContentLoaded',hashDetected,false);

function hashDetected(e){
    document.querySelector('.map').innerHTML = '';
    let hash = window.location.hash;
    // if (canvas) {
    //     ctx = canvas.getContext('2d');
    //     ctx.clearRect(0,0,canvas.width,canvas.height);
    // }
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
            .innerHTML = '<p class ="popup-about">You clicked here:</p><code>' +
                        hdms + '</code>';

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


function swipe(canvas,map){
    let currentMousePosition = [0, 0];

        // обработка события перед отрисовкой слоя
        map.addEventListener('pointermove',pointMove,false);
        canvas.addEventListener('precompose',preCompose,false);
        map.addEventListener('postcompose',postCompose,false);

    function pointMove(e) {
        // запоминаем положение мыши при движении курсора над картой
        currentMousePosition = e.pixel;
        // необходимо вызывать принудительную отрисовку карты, иначе эффекты не будут обновляться
        map.render();
        }
        function postCompose(event){
        let ctx = event.context;
        ctx.restore();
    }

function preCompose(event){

    let ctx = event.context;
    if (isEventsLoop.checked){
        ctx.save();
        ctx.beginPath();
        ctx.arc(currentMousePosition[0], currentMousePosition[1], 100, 0, 2 * Math.PI);
        ctx.lineWidth = 6;
        ctx.strokeStyle = 'rgba(255,255,255,0.75)';
        ctx.stroke();
        ctx.clip();
    } else if (isEventsRect.checked){

        ctx.save();
        ctx.beginPath();
        ctx.rect(currentMousePosition[0]-100,currentMousePosition[1]-100,200,200);
        ctx.lineWidth = 6;
        ctx.strokeStyle = 'rgba(255,255,255,0.75)';
        ctx.stroke();
        ctx.clip();
    }
    }
}

function heatmap(file,map){ // теплокарта количества населения по городам

    heatmapLyaer = new ol.layer.Heatmap({
        source: new ol.source.Vector({
            url: file,
            format: new ol.format.GeoJSON()
        })
    });
    map.addLayer(heatmapLyaer);
}