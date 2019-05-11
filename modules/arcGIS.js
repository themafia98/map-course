export default class ArcGIS{

    constructor(){
        this.urlServer = 'http://server.arcgisonline.com/arcgis/rest/services';
    }

    init(mapServer){
        return new ol.layer.Tile({
            source: new ol.source.TileArcGISRest({
                url: this.urlServer + mapServer
            })
        });
    }
}