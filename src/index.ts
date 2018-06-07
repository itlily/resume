var container:HTMLElement  = document.getElementById('container')
var canvas:any = document.getElementById('canA')
var ctx:CanvasRenderingContext2D = canvas.getContext('2d')
var w:number = window.innerWidth
var h:number = container.clientHeight
var arrPoint:Array<number> = []

interface PointInterface {
  x: number
  y: number
}

class ArcPoint implements PointInterface {
  x: number
  y: number
  container:HTMLElement
  constructor () {
    this.x = 0
    this.y = 0
    this.container = container
  }
}
let mypoint:ArcPoint = new ArcPoint()
