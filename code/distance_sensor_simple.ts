// @ts-nocheck

// Distance sensor

// Set up
let DistanceInCM = 0;
led.enable(true);

// main loop of program
basic.forever(function () {
  DistanceInCM = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.Centimeters);
  led.plotBarGraph(DistanceInCM, 40);
  serial.writeLine("DistanceInCM=" + DistanceInCM);
});
