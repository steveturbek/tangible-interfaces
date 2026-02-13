// @ts-nocheck
/*
 This simple program takes in input from a KEYESTUDIO analog joystick
 Similar to seen on game console joysticks
 this component has 5 pins
 Y joystick direction - connect to pin 0
 X joystick direction - connect to pin 1
 S (switch) is the click action  - connect to pin 2
 
 the code in the X & Y variables does a few things
 MAP proportionally changes the input to a number between 0 & 4 ( the number of pixels on the screen)
 ROUND just rounds the number to a whole number
 If the switch (digital read pin 2) is clicked  (1 means clicked) it makes a sound and an animation
*/

let Y = 0;
let X = 0;
serial.redirectToUSB();
basic.showIcon(IconNames.Chessboard);
music.play(music.tonePlayable(262, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone);
basic.forever(function () {
  basic.clearScreen();
  X = Math.round(Math.map(pins.analogReadPin(AnalogReadWritePin.P1), 0, 1023, 4, 0));
  Y = Math.round(Math.map(pins.analogReadPin(AnalogReadWritePin.P0), 0, 1023, 0, 4));
  if (pins.digitalReadPin(DigitalPin.P2) == 1) {
    music.play(
      music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear),
      music.PlaybackMode.InBackground,
    );
    basic.showIcon(IconNames.SmallDiamond);
  } else {
    led.plotBrightness(X, Y, 255);
  }
  basic.pause(100);
  serial.writeNumbers([X, Y, 0]);
});
