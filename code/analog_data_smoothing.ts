// @ts-nocheck

// basic analog sensor demo

// Set up
let ValueAsPercentage = 0;
let SmoothedValue = 0;
let maxValue = 0;
let minValue = 0;
let SensorMax = 0;
let SensorMin = 0;
// What the sensor reads in - will vary for each sensor
let RawSensorValue = 0;
// Min for the sensor DETERMINE BY TESTING
SensorMin = 0;
// Max for the sensor DETERMINE BY TESTING
SensorMax = 256;
// This gets reset by this program every run
minValue = 1023;
// This gets reset by this program every run
maxValue = 0;
SmoothedValue = 511;
ValueAsPercentage = 50;

// main loop of program

basic.forever(function () {
  basic.pause(100);
  RawSensorValue = input.lightLevel();
  CleanAnalogData(RawSensorValue);
  led.plotBarGraph(ValueAsPercentage, 100);
  serial.writeValue("RawSensor", RawSensorValue);
  serial.writeValue("Smoothed", SmoothedValue);
  serial.writeValue("%", ValueAsPercentage);
  serial.writeValue("Max", maxValue);
  serial.writeValue("Min", minValue);
});

function CleanAnalogData(input2: number) {
  // Ignore values outside the normal range.  Differs for each sensor
  if (input2 >= SensorMin && input2 <= SensorMax) {
    // Set new Max Value as new readings come in
    if (input2 > maxValue) {
      maxValue = input2;
    }
    // Set new Max Value as new readings come in
    if (input2 < minValue) {
      minValue = input2;
    }
    SmoothedValue = Math.round(SmoothedValue + (input2 - SmoothedValue) / 5);
    ValueAsPercentage = Math.round(Math.map(SmoothedValue, minValue, maxValue, 0, 100));
  }
}
