export default class wms{

    constructor(){}

    init(){
        return new ol.layer.Tile({
                source: new ol.source.TileWMS({
                url: 'http://129.206.228.72/cached/osm',
                params: {'LAYERS': 'osm_auto:all'},
                })
        });
    }
}