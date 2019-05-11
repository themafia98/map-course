export default class Xyz{

    constructor(scale,target,projection,x = 27.56659, y = 53.9){
        this.urlServer = 'http://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png';
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

    init(layer) {
    return new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: this.urlServer
        })
    });
    }

    initGroup(...layer){
    //
    //     let count = layer.length;
    //     let layers = new Array(count);

    //     for (let i = 0; i < count; i++){
    //         layers.push(new ol.layer.Tile({
    //             source: new ol.source.MapQuest({layer: layer[i]})
    //         }));
    //     }

    //     return new ol.layer.Group({
    //         layers: layers
    // });
    }
}

/*
* ol.control.ZoomSlider отображает полоску масштабов с указанием текущего уровня
* ol.control.MousePosition показывает координаты текущего положения мыши
* ol.control.OverviewMap показывает уменьшенную обзорную карту
* ol.control.ScaleLine отображает текущий масштаб
*/