
export default class BingMap{

    constructor(scale,target,projection,x = 27.56659, y = 53.9){
        this.key = 'AjU6I-HYoV1NTQEERQs6cENf3ts6xdSUXcq5-iWdjR4CSJQuxgiglKTxuzVyhfZH';
        this.map = new ol.Map({
            controls: ol.control.defaults().extend([
                new ol.control.ZoomSlider(),
                new ol.control.MousePosition({
                    // используется градусная проекция
                    projection: projection,
                    // переопределяем функцию вывода координат
                    coordinateFormat: coordinate => {
                        // сначала широта, потом долгота и ограничиваем до 5 знаков после запятой
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

/*
* ol.control.ZoomSlider отображает полоску масштабов с указанием текущего уровня
* ol.control.MousePosition показывает координаты текущего положения мыши
* ol.control.OverviewMap показывает уменьшенную обзорную карту
* ol.control.ScaleLine отображает текущий масштаб
*/