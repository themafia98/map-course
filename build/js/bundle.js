/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ \"./src/style/style.css\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/bundle */ \"./src/js/bundle.js\");\n\r\n// WEBPACK ENTERY\r\n\r\n// STYLE\r\n\r\n\r\n// JS\r\n\r\n\r\nObject(_js_bundle__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return module; });\n/* harmony import */ var _modules_openStreetMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/openStreetMap.js */ \"./src/js/modules/openStreetMap.js\");\n/* harmony import */ var _modules_bingMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/bingMap.js */ \"./src/js/modules/bingMap.js\");\n/* harmony import */ var _modules_xyz_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/xyz.js */ \"./src/js/modules/xyz.js\");\n/* harmony import */ var _modules_arcGIS_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/arcGIS.js */ \"./src/js/modules/arcGIS.js\");\n/* harmony import */ var _modules_wms_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/wms.js */ \"./src/js/modules/wms.js\");\n/*-------------------------------------------------------*/\n\n/*--------  hosting: kindhearted-army.surge.sh ----------*/\n\n/* Repository:  https://github.com/themafia98/map-course */\n\n/* -------------------Pavel Petrovich------------------- */\n\n/*------------------------------------------------------*/\n\n\n\n\n\nfunction module() {\n  /* ---INIT--- */\n  var mapCtx = null; // map context\n\n  var mapCtx2 = null;\n  var currentCoords = null; // save coords\n\n  var isEventsLoop = document.querySelector('.loop');\n  var isEventsRect = document.querySelector('.rect');\n  var hepBasic = document.querySelector('.basicMap');\n  var heatmapLyaer = null;\n  var currentMap = null;\n\n  function openStreet() {\n    hepBasic.checked = true;\n    var streetMap = new _modules_openStreetMap_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](12, 'map', 'EPSG:4326');\n    mapCtx = streetMap.init(); // layer 1\n\n    mapCtx2 = new _modules_arcGIS_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().init('/World_Shaded_Relief/MapServer'); // layer 2\n\n    streetMap.map.addLayer(mapCtx2);\n    streetMap.map.addLayer(mapCtx);\n    streetMap.map.setView(streetMap.view);\n    currentCoords = createOverlay();\n    streetMap.map.addOverlay(currentCoords);\n    eventsOpenLayers(streetMap.map, currentCoords);\n    swipe(mapCtx, streetMap.map);\n    currentMap = streetMap;\n  }\n\n  function bing() {\n    hepBasic.checked = true;\n    var bing = new _modules_bingMap_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](12, 'map', 'EPSG:4326');\n    mapCtx = bing.init(); // layer 1\n\n    mapCtx2 = new ol.layer.Tile({\n      source: new ol.source.Stamen({\n        layer: 'watercolor'\n      })\n    }); // layer 2\n\n    bing.map.addLayer(mapCtx2);\n    bing.map.addLayer(mapCtx);\n    bing.map.setView(bing.view);\n    currentCoords = createOverlay();\n    bing.map.addOverlay(currentCoords);\n    eventsOpenLayers(bing.map, currentCoords);\n    swipe(mapCtx, bing.map);\n    currentMap = bing;\n  }\n\n  function xyz() {\n    hepBasic.checked = true;\n    var xyz = new _modules_xyz_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](12, 'map', 'EPSG:4326');\n    mapCtx = xyz.init(); // layer 1\n\n    mapCtx2 = new _modules_arcGIS_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().init('/World_Imagery/MapServer'); // layer 2\n\n    xyz.map.addLayer(mapCtx2);\n    xyz.map.addLayer(mapCtx);\n    xyz.map.setView(xyz.view);\n    currentCoords = createOverlay();\n    xyz.map.addOverlay(currentCoords);\n    eventsOpenLayers(xyz.map, currentCoords);\n    swipe(mapCtx, xyz.map);\n    currentMap = xyz;\n  }\n\n  function arcGIS() {\n    var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/NatGeo_World_Map/MapServer';\n    hepBasic.checked = true;\n    var arcGis = new _modules_arcGIS_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](12, 'map', 'EPSG:4326');\n    mapCtx = arcGis.init(map); // layer 1\n\n    mapCtx2 = arcGis.init('/World_Topo_Map/MapServer'); // layer 2\n\n    arcGis.map.addLayer(mapCtx2);\n    arcGis.map.addLayer(mapCtx);\n    arcGis.map.setView(arcGis.view);\n    currentCoords = createOverlay();\n    arcGis.map.addOverlay(currentCoords);\n    eventsOpenLayers(arcGis.map, currentCoords);\n    swipe(mapCtx, arcGis.map);\n    currentMap = arcGis;\n  }\n\n  function wms() {\n    hepBasic.checked = true;\n    var wms = new _modules_wms_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](12, 'map', 'EPSG:4326');\n    mapCtx = wms.init(); // layer 1\n\n    mapCtx2 = wms.init('', {\n      'LAYERS': 'ne:ne',\n      'TILED': true\n    }, 'https://ahocevar.com/geoserver/wms'); // layer 2\n\n    wms.map.addLayer(mapCtx2);\n    wms.map.addLayer(mapCtx);\n    wms.map.setView(wms.view);\n    currentCoords = createOverlay();\n    wms.map.addOverlay(currentCoords);\n    eventsOpenLayers(wms.map, currentCoords);\n    swipe(mapCtx, wms.map);\n    currentMap = wms;\n  }\n\n  window.addEventListener('hashchange', hashDetected, false);\n  document.addEventListener('click', function (e) {\n    if (e.target.dataset.type === 'on' && e.target.checked) {\n      heatmap('cities.json', currentMap.map);\n    } else if (e.target.dataset.type === 'off' && e.target.checked) {\n      var layers = currentMap.map.getLayers();\n      currentMap.map.removeLayer(heatmapLyaer);\n    }\n  }, false);\n  document.querySelector('.closer').addEventListener('click', clickEvent, false);\n  document.addEventListener('DOMContentLoaded', hashDetected, false);\n\n  function hashDetected(e) {\n    document.querySelector('.map').innerHTML = '';\n    var hash = window.location.hash;\n\n    switch (hash) {\n      case '#bing':\n        {\n          clearActive(hash);\n          bing();\n          break;\n        }\n\n      case '#xyz':\n        {\n          clearActive(hash);\n          xyz();\n          break;\n        }\n\n      case '#arcgis':\n        {\n          clearActive(hash);\n          arcGIS();\n          break;\n        }\n\n      case '#wms':\n        {\n          clearActive(hash);\n          wms();\n          break;\n        }\n\n      default:\n        {\n          clearActive('#');\n          openStreet();\n        }\n    }\n  }\n\n  function clickEvent(e) {\n    var target = e.target;\n    if (target.classList[0] === 'closer' && !target.classList[1]) target.parentElement.classList.toggle('hide');\n  }\n\n  function eventsOpenLayers(map, currentCoords) {\n    map.on('singleclick', function (e) {\n      var closer = document.querySelector('.closer').parentElement;\n      if (closer.classList[1] === 'hide') closer.classList.toggle('hide');\n      var coordinate = e.coordinate;\n      var hdms = ol.coordinate.toStringHDMS(ol.proj.transform(coordinate, 'EPSG:3857', 'EPSG:4326'));\n      document.querySelector('.popup-content').innerHTML = '<p class =\"popup-about\">You clicked here:</p><code>' + hdms + '</code>';\n      currentCoords.setPosition(coordinate);\n    }, false);\n  }\n\n  function clearActive(hash) {\n    var active = document.querySelector('.active');\n    var unactive = document.querySelector(\"a[href='\".concat(hash, \"']\"));\n    active.classList.toggle('active');\n    unactive.classList.toggle('active');\n  }\n\n  function createOverlay() {\n    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('.hereCord');\n\n    if (!item) {\n      var hereCords = document.createElement('div');\n      var closer = document.createElement('input');\n      var content = document.createElement('div');\n      content.classList.add('popup-content');\n      hereCords.classList.add('hereCord');\n      closer.classList.add('closer');\n      closer.setAttribute('type', 'button');\n      closer.setAttribute('value', 'X');\n      hereCords.addEventListener('click', clickEvent, false);\n      hereCords.appendChild(closer);\n      hereCords.appendChild(content);\n      document.querySelector('.custom-controll').appendChild(hereCords);\n      item = document.querySelector('.hereCord');\n    }\n\n    return new ol.Overlay({\n      element: item\n    });\n  }\n\n  function swipe(canvas, map) {\n    var currentMousePosition = [0, 0];\n    map.addEventListener('pointermove', pointMove, false);\n    canvas.addEventListener('precompose', preCompose, false);\n    map.addEventListener('postcompose', postCompose, false);\n\n    function pointMove(e) {\n      currentMousePosition = e.pixel;\n      map.render();\n    }\n\n    function postCompose(event) {\n      var ctx = event.context;\n      ctx.restore();\n    }\n\n    function preCompose(event) {\n      var ctx = event.context;\n\n      if (isEventsLoop.checked) {\n        ctx.save();\n        ctx.beginPath();\n        ctx.arc(currentMousePosition[0], currentMousePosition[1], 100, 0, 2 * Math.PI);\n        ctx.lineWidth = 6;\n        ctx.strokeStyle = 'rgba(255,255,255,0.75)';\n        ctx.stroke();\n        ctx.clip();\n      } else if (isEventsRect.checked) {\n        ctx.save();\n        ctx.beginPath();\n        ctx.rect(currentMousePosition[0] - 100, currentMousePosition[1] - 100, 200, 200);\n        ctx.lineWidth = 6;\n        ctx.strokeStyle = 'rgba(255,255,255,0.75)';\n        ctx.stroke();\n        ctx.clip();\n      }\n    }\n  }\n\n  function heatmap(file, map) {\n    heatmapLyaer = new ol.layer.Heatmap({\n      source: new ol.source.Vector({\n        url: file,\n        format: new ol.format.GeoJSON()\n      })\n    });\n    map.addLayer(heatmapLyaer);\n  }\n}\n\n//# sourceURL=webpack:///./src/js/bundle.js?");

/***/ }),

/***/ "./src/js/modules/arcGIS.js":
/*!**********************************!*\
  !*** ./src/js/modules/arcGIS.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ArcGIS; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ArcGIS =\n/*#__PURE__*/\nfunction () {\n  function ArcGIS(scale, target, projection) {\n    var x = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 27.56659;\n    var y = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 53.9;\n\n    _classCallCheck(this, ArcGIS);\n\n    this.urlServer = 'http://server.arcgisonline.com/arcgis/rest/services';\n    this.map = new ol.Map({\n      controls: ol.control.defaults().extend([new ol.control.ZoomSlider(), new ol.control.MousePosition({\n        projection: projection,\n        coordinateFormat: function coordinateFormat(coordinate) {\n          return ol.coordinate.format(coordinate, '{y}, {x}', 5);\n        }\n      }), new ol.control.OverviewMap(), new ol.control.ScaleLine()]),\n      target: target\n    });\n    this.view = new ol.View({\n      center: ol.proj.fromLonLat([x, y]),\n      zoom: scale\n    });\n    this.isEvents = true;\n  }\n\n  _createClass(ArcGIS, [{\n    key: \"init\",\n    value: function init(mapServer) {\n      return new ol.layer.Tile({\n        source: new ol.source.TileArcGISRest({\n          url: this.urlServer + mapServer\n        })\n      });\n    }\n  }]);\n\n  return ArcGIS;\n}();\n/*\r\n* ol.control.ZoomSlider scale\r\n* ol.control.MousePosition  mouse coords on canvas\r\n* ol.control.OverviewMap mini map\r\n* ol.control.ScaleLine current scale\r\n*/\n\n\n\n\n//# sourceURL=webpack:///./src/js/modules/arcGIS.js?");

/***/ }),

/***/ "./src/js/modules/bingMap.js":
/*!***********************************!*\
  !*** ./src/js/modules/bingMap.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BingMap; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar BingMap =\n/*#__PURE__*/\nfunction () {\n  function BingMap(scale, target, projection) {\n    var x = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 27.56659;\n    var y = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 53.9;\n\n    _classCallCheck(this, BingMap);\n\n    this.key = 'AjU6I-HYoV1NTQEERQs6cENf3ts6xdSUXcq5-iWdjR4CSJQuxgiglKTxuzVyhfZH';\n    this.map = new ol.Map({\n      controls: ol.control.defaults().extend([new ol.control.ZoomSlider(), new ol.control.MousePosition({\n        projection: projection,\n        coordinateFormat: function coordinateFormat(coordinate) {\n          return ol.coordinate.format(coordinate, '{y}, {x}', 5);\n        }\n      }), new ol.control.OverviewMap(), new ol.control.ScaleLine()]),\n      target: target\n    });\n    this.view = new ol.View({\n      center: ol.proj.fromLonLat([x, y]),\n      zoom: scale\n    });\n  }\n\n  _createClass(BingMap, [{\n    key: \"init\",\n    value: function init() {\n      var layer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"AerialWithLabels\";\n      return new ol.layer.Tile({\n        source: new ol.source.BingMaps({\n          key: this.key,\n          imagerySet: layer\n        })\n      });\n    }\n  }]);\n\n  return BingMap;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/modules/bingMap.js?");

/***/ }),

/***/ "./src/js/modules/openStreetMap.js":
/*!*****************************************!*\
  !*** ./src/js/modules/openStreetMap.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OpenStreetMap; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar OpenStreetMap =\n/*#__PURE__*/\nfunction () {\n  function OpenStreetMap(scale, target, projection) {\n    var x = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 27.56659;\n    var y = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 53.9;\n\n    _classCallCheck(this, OpenStreetMap);\n\n    this.key = 'AkPePzQAUoC7qKlVTNT4nw0Ykq2EJ4nLE9Iq8-7NZY4wI2Owxebqqur_4zMiboZh';\n    this.map = new ol.Map({\n      controls: ol.control.defaults().extend([new ol.control.ZoomSlider(), new ol.control.OverviewMap(), new ol.control.ScaleLine(), new ol.control.MousePosition({\n        projection: projection,\n        coordinateFormat: function coordinateFormat(coordinate) {\n          return ol.coordinate.format(coordinate, '{y}, {x}', 5);\n        }\n      })]),\n      target: target\n    });\n    this.view = new ol.View({\n      center: ol.proj.fromLonLat([x, y]),\n      zoom: scale\n    });\n  }\n\n  _createClass(OpenStreetMap, [{\n    key: \"init\",\n    value: function init() {\n      var layer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new ol.source.OSM();\n      return new ol.layer.Tile({\n        source: layer\n      });\n    }\n  }]);\n\n  return OpenStreetMap;\n}();\n/*\r\n* ol.control.ZoomSlider scale\r\n* ol.control.MousePosition  mouse coords on canvas\r\n* ol.control.OverviewMap mini map\r\n* ol.control.ScaleLine current scale\r\n*/\n\n\n\n\n//# sourceURL=webpack:///./src/js/modules/openStreetMap.js?");

/***/ }),

/***/ "./src/js/modules/wms.js":
/*!*******************************!*\
  !*** ./src/js/modules/wms.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Wms; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Wms =\n/*#__PURE__*/\nfunction () {\n  function Wms(scale, target, projection) {\n    var x = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 27.56659;\n    var y = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 53.9;\n\n    _classCallCheck(this, Wms);\n\n    this.map = new ol.Map({\n      controls: ol.control.defaults().extend([new ol.control.ZoomSlider(), new ol.control.MousePosition({\n        // use coords projection\n        projection: projection,\n        coordinateFormat: function coordinateFormat(coordinate) {\n          return ol.coordinate.format(coordinate, '{y}, {x}', 5);\n        }\n      }), new ol.control.OverviewMap(), new ol.control.ScaleLine()]),\n      target: target\n    });\n    this.view = new ol.View({\n      center: ol.proj.fromLonLat([x, y]),\n      zoom: scale\n    });\n  }\n\n  _createClass(Wms, [{\n    key: \"init\",\n    value: function init() {\n      var layer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'osm';\n      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n        'LAYERS': 'osm_auto:all'\n      };\n      var urlServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'http://129.206.228.72/cached/';\n      return new ol.layer.Tile({\n        source: new ol.source.TileWMS({\n          url: urlServer + layer,\n          params: params\n        })\n      });\n    }\n  }]);\n\n  return Wms;\n}();\n/*\r\n* ol.control.ZoomSlider scale\r\n* ol.control.MousePosition  mouse coords on canvas\r\n* ol.control.OverviewMap mini map\r\n* ol.control.ScaleLine current scale\r\n*/\n\n\n\n\n//# sourceURL=webpack:///./src/js/modules/wms.js?");

/***/ }),

/***/ "./src/js/modules/xyz.js":
/*!*******************************!*\
  !*** ./src/js/modules/xyz.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Xyz; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Xyz =\n/*#__PURE__*/\nfunction () {\n  function Xyz(scale, target, projection) {\n    var x = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 27.56659;\n    var y = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 53.9;\n\n    _classCallCheck(this, Xyz);\n\n    this.urlServer = 'http://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png';\n    this.map = new ol.Map({\n      controls: ol.control.defaults().extend([new ol.control.ZoomSlider(), new ol.control.MousePosition({\n        projection: projection,\n        coordinateFormat: function coordinateFormat(coordinate) {\n          return ol.coordinate.format(coordinate, '{y}, {x}', 5);\n        }\n      }), new ol.control.OverviewMap(), new ol.control.ScaleLine()]),\n      target: target\n    });\n    this.view = new ol.View({\n      center: ol.proj.fromLonLat([x, y]),\n      zoom: scale\n    });\n  }\n\n  _createClass(Xyz, [{\n    key: \"init\",\n    value: function init(layer) {\n      return new ol.layer.Tile({\n        source: new ol.source.XYZ({\n          url: this.urlServer\n        })\n      });\n    }\n  }]);\n\n  return Xyz;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/modules/xyz.js?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style/style.css?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });
//# sourceMappingURL=http://localhost:9001/../bundle.js.map