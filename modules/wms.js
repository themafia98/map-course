export default class Wms{

    constructor(scale,target,projection,x = 27.56659, y = 53.9){
        this.map = new ol.Map({
            controls: ol.control.defaults().extend([
                new ol.control.ZoomSlider(),
                new ol.control.MousePosition({
                    // use coords projection
                    projection: projection,
                    coordinateFormat: coordinate => {
                        return ol.coordinate.format(coordinate, '{y}, {x}', 5);
                    }
                }),
                new ol.control.OverviewMap(),
                new ol.control.ScaleLine()
            ]),
            target: target 
        });
        this.view = new ol.View({
            center: ol.proj.fromLonLat([x,y]),
            zoom: scale
        });
    }

    init(layer = 'osm', params = {'LAYERS': 'osm_auto:all'},urlServer = 'http://129.206.228.72/cached/'){
        return new ol.layer.Tile({
                source: new ol.source.TileWMS({
                url: urlServer + layer,
                params: params,
                })
        });
    }
}

/*
* ol.control.ZoomSlider scale
* ol.control.MousePosition  mouse coords on canvas
* ol.control.OverviewMap mini map
* ol.control.ScaleLine current scale
*/