// @ts-nocheck

// basic demo code for KY-040 rotary encoder

let count = 0;
count = 50;
basic.showIcon(IconNames.SmallHeart);
RotaryEncoder.init(DigitalPin.P2, DigitalPin.P1, DigitalPin.P0);
led.plotBarGraph(50, 100);

RotaryEncoder.onRotateEvent(RotationDirection.Left, function () {
  count += 5;
  serial.writeValue("count", count);
  led.plotBarGraph(count, 100);
});

RotaryEncoder.onRotateEvent(RotationDirection.Right, function () {
  count += -5;
  serial.writeValue("count", count);
  led.plotBarGraph(count, 100);
});

RotaryEncoder.onPressEvent(function () {
  basic.showIcon(IconNames.Yes);
  count = 50;
  basic.pause(1000);
  led.plotBarGraph(count, 100);
});
