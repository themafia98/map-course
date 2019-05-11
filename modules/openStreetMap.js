
export default class OpenStreetMap{

    constructor(){}

    init() {
    return new ol.layer.Tile({
        source: new ol.source.OSM()
    });
    }
}