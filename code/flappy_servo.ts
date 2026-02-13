// @ts-nocheck

// a very simple demo of "steering" a bird up and down via a servo motor

input.onButtonPressed(Button.A, function () {
  if (birdY < maxY) {
    birdY += 10;
  }
});
input.onButtonPressed(Button.B, function () {
  if (birdY > minY) {
    birdY += -10;
  }
});
let minY = 0;
let maxY = 0;
let birdY = 0;
birdY = 100;
maxY = 180;
minY = 0;
servos.P0.setRange(minY, maxY);
basic.forever(function () {
  servos.P0.setAngle(birdY);
  basic.pause(200);
});
