var color = new Array('#fff', '#ff0', '#f00', '#000', '#00f', '#0ff')
document.body.style.backgroundColor = 'blue'
if (window.DeviceMotionEvent) {
  var speed = 25
  var x = (y = z = lastX = lastY = lastZ = 0)
  window.addEventListener(
    'devicemotion',
    function() {
      var acceleration = event.accelerationIncludingGravity
      x = acceleration.x
      y = acceleration.y
      if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed) {
        document.body.style.backgroundColor =
          color[Math.round(Math.random() * 10) % 6]
      }
      lastX = x
      lastY = y
    },
    false
  )
}
