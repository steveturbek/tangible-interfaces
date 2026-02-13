// @ts-nocheck

// basic analog sensor demo

// Set up
let AnalogReading = 0;
basic.showIcon(IconNames.Yes);

// main loop of program

basic.forever(function () {
  AnalogReading = pins.analogReadPin(AnalogPin.P0);
  led.plotBarGraph(AnalogReading, 1023);
  led.plotBarGraph(AnalogReading, 1023);
  serial.writeLine("Analog Reading" + AnalogReading + "|" + Math.map(AnalogReading, 0, 1023, 0, 99) + "%");
});
