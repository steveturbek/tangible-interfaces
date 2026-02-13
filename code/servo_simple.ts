// @ts-nocheck
//
//  this program demonstrates simple movement of a servo motor

servos.P0.setRange(0, 180);
basic.showIcon(IconNames.Heart);
let direction = 1;
let angle = 0;

basic.forever(function () {
  if (angle > 180 || angle < 0) {
    direction = direction * -1;
  }
  angle += direction;
  servos.P0.setAngle(angle);
  serial.writeValue("angle", angle);
});
