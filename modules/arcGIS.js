export default class ArcGIS{

    constructor(scale,target,projection,x = 27.56659, y = 53.9){
        this.urlServer = 'http://server.arcgisonline.com/arcgis/rest/services';
        this.map = new ol.Map({
            controls: ol.control.defaults().extend([
                new ol.control.ZoomSlider(),
                new ol.control.MousePosition({
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

        this.isEvents = true;
    }

    init(mapServer){
        return new ol.layer.Tile({
            source: new ol.source.TileArcGISRest({
                url: this.urlServer + mapServer
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