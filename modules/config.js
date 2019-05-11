export default function(x,y,scale,target){


    return {
        map: new ol.Map({target: target }),
        view: new ol.View({
            center: [x,y],
            zoom: scale
        })
    };
}