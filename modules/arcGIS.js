export default class ArcGIS{

    constructor(scale,target,projection,x = 27.56659, y = 53.9){
        this.urlServer = 'http://server.arcgisonline.com/arcgis/rest/services';
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

    init(mapServer){
        return new ol.layer.Tile({
            source: new ol.source.TileArcGISRest({
                url: this.urlServer + mapServer
            })
        });
    }

    swipe(map,canvas){

        let currentMousePosition = [0, 0];
        canvas.on('pointermove', function (e) {
            // запоминаем положение мыши при движении курсора над картой
            currentMousePosition = e.pixel;
            // необходимо вызывать принудительную отрисовку карты, иначе эффекты не будут обновляться
            canvas.render();
        });

           // обработка события перед отрисовкой слоя
        map.on('precompose', function(event) {
        let ctx = event.context;

        let x = currentMousePosition[0];
        let y = currentMousePosition[1];


        // ctx.save();
        // ctx.beginPath();
        // // область просмотра - окружность с радиусом 100
        // ctx.arc(x, y, 100, 0, 2 * Math.PI);
        // // устанавливаем белую границу
        // ctx.lineWidth = 6;
        // ctx.strokeStyle = 'rgba(255,255,255,0.75)';
        // ctx.stroke();
        // ctx.clip();


        // отображаем квадрат 100х100 с центром в текущих координатах мыши        
        // ctx.save();
        // ctx.beginPath();
        // ctx.rect(x - 100, y - 100, 200, 200);
        // ctx.clip();



        // // ограничиваем область по вертикали от левого края до указателя мыши
        // ctx.save();
        // ctx.beginPath();
        // ctx.rect(0, 0, currentMousePosition[0], ctx.canvas.height);
        // ctx.clip();
    });

    // сразу после отрисовки слоя возвращаем область отрисовки в начальную форму
        map.on('postcompose', function(event) {
        let ctx = event.context;
        ctx.restore();
    });
    }
}

/*
* ol.control.ZoomSlider отображает полоску масштабов с указанием текущего уровня
* ol.control.MousePosition показывает координаты текущего положения мыши
* ol.control.OverviewMap показывает уменьшенную обзорную карту
* ol.control.ScaleLine отображает текущий масштаб
*/