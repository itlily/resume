var canvas = document.getElementById('canA')
    var ctx = canvas.getContext('2d')
    var w = canvas.width = window.innerWidth
    var h = canvas.height = window.innerHeight
    var arrPoint = []
    function random (min, max) {
      return Math.random() * (max-min) + min
    }
    // 绘制动的 点
    function Point() {
    }
    Point.prototype = {
      init () {
        this.x = random(0,w)
        this.y = 0
        this.vx = 5
        this.vy = 5
        this.h = random(1*h,1.2*h)
      },
      draw() {
        ctx.globalCompositeOperation = 'lighter'
        ctx.beginPath()
        ctx.fillStyle = '#ccc'
        //  x 坐标  y坐标 半径 起始角 结束角 顺时针绘图
        ctx.arc(this.x, this.y, 1.5, 0, 2*Math.PI, false)
        ctx.fill()
      },
      move() {
        if (this.y < this.h) {
            this.y += this.vy
            this.x += this.vx
        }
        this.draw()
      }
    }
    // 绘制多个的点
    function createPoint(num) {
      for (var i = 0; i < num; i++) {
        setTimeout(function(){
          var myPoint = new Point()
          myPoint.init()
          myPoint.draw()
          arrPoint.push(myPoint)
        },200*i)
      }
    }
    
    // 让每个点动起来
    function flashMove() {
      ctx.globalCompositeOperation = 'hard-light'
      ctx.fillStyle = 'rgba(20,20,20,0.15)'
      ctx.fillRect(0,0,window.innerWidth,window.innerHeight)
      for(var item of arrPoint) {
        item.move()
      }
    }
    function linePoint() {
      createPoint(10) 
       setInterval(function(){
        createPoint(10) 
      },6000)
    }
   linePoint()

   ;(function update() {
        flashMove()
        requestAnimationFrame(update)
    }())