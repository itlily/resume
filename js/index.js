var container = document.getElementById('container');
var canvas = document.getElementById('canA');
var ctx = canvas.getContext('2d');
var w = window.innerWidth;
var h = container.clientHeight;
var arrPoint = [];
var ArcPoint = /** @class */ (function () {
    function ArcPoint() {
        this.x = 0;
        this.y = 0;
        this.container = container;
    }
    return ArcPoint;
}());
var mypoint = new ArcPoint();
