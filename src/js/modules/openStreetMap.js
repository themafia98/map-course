export default class OpenStreetMap{

    constructor(scale,target,projection,x = 27.56659, y = 53.9){
        this.key = 'AkPePzQAUoC7qKlVTNT4nw0Ykq2EJ4nLE9Iq8-7NZY4wI2Owxebqqur_4zMiboZh';
        this.map = new ol.Map({
            controls: ol.control.defaults().extend([
                new ol.control.ZoomSlider(),
                new ol.control.OverviewMap(),
                new ol.control.ScaleLine(),
                new ol.control.MousePosition({
                    projection: projection,
                    coordinateFormat: coordinate => {
                        return ol.coordinate.format(coordinate, '{y}, {x}', 5);
                    }
                })
            ]),
            target: target 
        });
        this.view = new ol.View({
            center: ol.proj.fromLonLat([x,y]),
            zoom: scale
        });
    };

    init(layer = new ol.source.OSM()) {
        return new ol.layer.Tile({
            source: layer
        });
    }
}

/*
* ol.control.ZoomSlider scale
* ol.control.MousePosition  mouse coords on canvas
* ol.control.OverviewMap mini map
* ol.control.ScaleLine current scale
*/
