
export default class BingMap{

    constructor(){}

    init() {
    return new ol.layer.Tile({
        source: new ol.source.BingMaps({
            key: 'AkPePzQAUoC7qKlVTNT4nw0Ykq2EJ4nLE9Iq8-7NZY4wI2Owxebqqur_4zMiboZh',
            imagerySet: "AerialWithLabels"
        })
    });
    }
}