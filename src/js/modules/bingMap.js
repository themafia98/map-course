
export default class BingMap{

    constructor(scale,target,projection,x = 27.56659, y = 53.9){
        this.key = 'AjU6I-HYoV1NTQEERQs6cENf3ts6xdSUXcq5-iWdjR4CSJQuxgiglKTxuzVyhfZH';
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
    }

    init(layer = "AerialWithLabels") {
    return new ol.layer.Tile({
        source: new ol.source.BingMaps({
            key: this.key,
            imagerySet: layer
        })
    });
    }
}
