export default class Xyz{

    constructor(scale,target,projection,x = 27.56659, y = 53.9){
        this.urlServer = 'http://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png';
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

    init(layer) {
    return new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: this.urlServer
        })
    });
    }
}

