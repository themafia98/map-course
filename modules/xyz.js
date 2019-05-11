export default class Xyz{

    constructor(){}

    init(layer) {
    return new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'http://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
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