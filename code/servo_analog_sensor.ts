// @ts-nocheck
//
//  this program demonstrates simple control of a servo motor

let servo = 0;
basic.showIcon(IconNames.SmallHeart);
serial.redirectToUSB();
basic.forever(function () {
  servo = Math.map(pins.analogReadPin(AnalogReadWritePin.P1), 0, 2, 0, 10);
  led.plotBarGraph(servo, 180);
  pins.servoWritePin(AnalogPin.P0, servo);
  serial.writeLine("" + servo);
});
