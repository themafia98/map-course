!function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(o){return e[o]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,t){e.exports=t(2)},function(e,o,t){},function(e,o,t){"use strict";t.r(o);t(1);function n(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function e(o,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:27.56659,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:53.9;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),this.key="AkPePzQAUoC7qKlVTNT4nw0Ykq2EJ4nLE9Iq8-7NZY4wI2Owxebqqur_4zMiboZh",this.map=new ol.Map({controls:ol.control.defaults().extend([new ol.control.ZoomSlider,new ol.control.OverviewMap,new ol.control.ScaleLine,new ol.control.MousePosition({projection:n,coordinateFormat:function(e){return ol.coordinate.format(e,"{y}, {x}",5)}})]),target:t}),this.view=new ol.View({center:ol.proj.fromLonLat([r,a]),zoom:o})}var o,t,r;return o=e,(t=[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new ol.source.OSM;return new ol.layer.Tile({source:e})}}])&&n(o.prototype,t),r&&n(o,r),e}();function a(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function e(o,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:27.56659,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:53.9;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),this.key="AjU6I-HYoV1NTQEERQs6cENf3ts6xdSUXcq5-iWdjR4CSJQuxgiglKTxuzVyhfZH",this.map=new ol.Map({controls:ol.control.defaults().extend([new ol.control.ZoomSlider,new ol.control.MousePosition({projection:n,coordinateFormat:function(e){return ol.coordinate.format(e,"{y}, {x}",5)}}),new ol.control.OverviewMap,new ol.control.ScaleLine]),target:t}),this.view=new ol.View({center:ol.proj.fromLonLat([r,a]),zoom:o})}var o,t,n;return o=e,(t=[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"AerialWithLabels";return new ol.layer.Tile({source:new ol.source.BingMaps({key:this.key,imagerySet:e})})}}])&&a(o.prototype,t),n&&a(o,n),e}();function l(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(o,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:27.56659,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:53.9;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),this.urlServer="http://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",this.map=new ol.Map({controls:ol.control.defaults().extend([new ol.control.ZoomSlider,new ol.control.MousePosition({projection:n,coordinateFormat:function(e){return ol.coordinate.format(e,"{y}, {x}",5)}}),new ol.control.OverviewMap,new ol.control.ScaleLine]),target:t}),this.view=new ol.View({center:ol.proj.fromLonLat([r,a]),zoom:o})}var o,t,n;return o=e,(t=[{key:"init",value:function(e){return new ol.layer.Tile({source:new ol.source.XYZ({url:this.urlServer})})}}])&&l(o.prototype,t),n&&l(o,n),e}();function u(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(o,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:27.56659,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:53.9;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),this.urlServer="http://server.arcgisonline.com/arcgis/rest/services",this.map=new ol.Map({controls:ol.control.defaults().extend([new ol.control.ZoomSlider,new ol.control.MousePosition({projection:n,coordinateFormat:function(e){return ol.coordinate.format(e,"{y}, {x}",5)}}),new ol.control.OverviewMap,new ol.control.ScaleLine]),target:t}),this.view=new ol.View({center:ol.proj.fromLonLat([r,a]),zoom:o}),this.isEvents=!0}var o,t,n;return o=e,(t=[{key:"init",value:function(e){return new ol.layer.Tile({source:new ol.source.TileArcGISRest({url:this.urlServer+e})})}}])&&u(o.prototype,t),n&&u(o,n),e}();function d(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var p=function(){function e(o,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:27.56659,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:53.9;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),this.map=new ol.Map({controls:ol.control.defaults().extend([new ol.control.ZoomSlider,new ol.control.MousePosition({projection:n,coordinateFormat:function(e){return ol.coordinate.format(e,"{y}, {x}",5)}}),new ol.control.OverviewMap,new ol.control.ScaleLine]),target:t}),this.view=new ol.View({center:ol.proj.fromLonLat([r,a]),zoom:o})}var o,t,n;return o=e,(t=[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"osm",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{LAYERS:"osm_auto:all"},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"http://129.206.228.72/cached/";return new ol.layer.Tile({source:new ol.source.TileWMS({url:t+e,params:o})})}}])&&d(o.prototype,t),n&&d(o,n),e}();!function(){var e=null,o=null,t=null,n=document.querySelector(".loop"),a=document.querySelector(".rect"),l=document.querySelector(".basicMap"),u=null,d=null;function v(n){document.querySelector(".map").innerHTML="";var a=window.location.hash;switch(a){case"#bing":w(a),function(){l.checked=!0;var n=new i(12,"map","EPSG:4326");e=n.init(),o=new ol.layer.Tile({source:new ol.source.Stamen({layer:"watercolor"})}),n.map.addLayer(o),n.map.addLayer(e),n.map.setView(n.view),t=y(),n.map.addOverlay(t),m(n.map,t),h(e,n.map),d=n}();break;case"#xyz":w(a),function(){l.checked=!0;var n=new c(12,"map","EPSG:4326");e=n.init(),o=(new s).init("/World_Imagery/MapServer"),n.map.addLayer(o),n.map.addLayer(e),n.map.setView(n.view),t=y(),n.map.addOverlay(t),m(n.map,t),h(e,n.map),d=n}();break;case"#arcgis":w(a),function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/NatGeo_World_Map/MapServer";l.checked=!0;var r=new s(12,"map","EPSG:4326");e=r.init(n),o=r.init("/World_Topo_Map/MapServer"),r.map.addLayer(o),r.map.addLayer(e),r.map.setView(r.view),t=y(),r.map.addOverlay(t),m(r.map,t),h(e,r.map),d=r}();break;case"#wms":w(a),function(){l.checked=!0;var n=new p(12,"map","EPSG:4326");e=n.init(),o=n.init("",{LAYERS:"ne:ne",TILED:!0},"https://ahocevar.com/geoserver/wms"),n.map.addLayer(o),n.map.addLayer(e),n.map.setView(n.view),t=y(),n.map.addOverlay(t),m(n.map,t),h(e,n.map),d=n}();break;default:w("#"),function(){l.checked=!0;var n=new r(12,"map","EPSG:4326");e=n.init(),o=(new s).init("/World_Shaded_Relief/MapServer"),n.map.addLayer(o),n.map.addLayer(e),n.map.setView(n.view),t=y(),n.map.addOverlay(t),m(n.map,t),h(e,n.map),d=n}()}}function f(e){var o=e.target;"closer"!==o.classList[0]||o.classList[1]||o.parentElement.classList.toggle("hide")}function m(e,o){e.on("singleclick",function(e){var t=document.querySelector(".closer").parentElement;"hide"===t.classList[1]&&t.classList.toggle("hide");var n=e.coordinate,r=ol.coordinate.toStringHDMS(ol.proj.transform(n,"EPSG:3857","EPSG:4326"));document.querySelector(".popup-content").innerHTML='<p class ="popup-about">You clicked here:</p><code>'+r+"</code>",o.setPosition(n)},!1)}function w(e){var o=document.querySelector(".active"),t=document.querySelector("a[href='".concat(e,"']"));o.classList.toggle("active"),t.classList.toggle("active")}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.querySelector(".hereCord");if(!e){var o=document.createElement("div"),t=document.createElement("input"),n=document.createElement("div");n.classList.add("popup-content"),o.classList.add("hereCord"),t.classList.add("closer"),t.setAttribute("type","button"),t.setAttribute("value","X"),o.addEventListener("click",f,!1),o.appendChild(t),o.appendChild(n),document.querySelector(".custom-controll").appendChild(o),e=document.querySelector(".hereCord")}return new ol.Overlay({element:e})}function h(e,o){var t=[0,0];o.addEventListener("pointermove",function(e){t=e.pixel,o.render()},!1),e.addEventListener("precompose",function(e){var o=e.context;n.checked?(o.save(),o.beginPath(),o.arc(t[0],t[1],100,0,2*Math.PI),o.lineWidth=6,o.strokeStyle="rgba(255,255,255,0.75)",o.stroke(),o.clip()):a.checked&&(o.save(),o.beginPath(),o.rect(t[0]-100,t[1]-100,200,200),o.lineWidth=6,o.strokeStyle="rgba(255,255,255,0.75)",o.stroke(),o.clip())},!1),o.addEventListener("postcompose",function(e){e.context.restore()},!1)}window.addEventListener("hashchange",v,!1),document.addEventListener("click",function(e){var o,t;"on"===e.target.dataset.type&&e.target.checked?(o="cities.json",t=d.map,u=new ol.layer.Heatmap({source:new ol.source.Vector({url:o,format:new ol.format.GeoJSON})}),t.addLayer(u)):"off"===e.target.dataset.type&&e.target.checked&&(d.map.getLayers(),d.map.removeLayer(u))},!1),document.querySelector(".closer").addEventListener("click",f,!1),document.addEventListener("DOMContentLoaded",v,!1)}()}]);
//# sourceMappingURL=bundle.js.map