// @ts-nocheck

// Tilt-to-navigate game:
// tilt the micro:bit to move a bright dot toward a dimmer dot on the 5x5 LED grid.
// Press A when you think you've reached it to check.

// Set up
let goal: game.LedSprite = null;
let player: game.LedSprite = null;
serial.redirectToUSB();
music.play(music.tonePlayable(262, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone);
player = game.createSprite(0, 0);
goal = game.createSprite(2, 2);

// main loop of program
basic.forever(function () {
  basic.clearScreen();
  if (input.acceleration(Dimension.X) > 500) {
    player.change(LedSpriteProperty.X, 1);
  } else if (input.acceleration(Dimension.X) < -500) {
    player.change(LedSpriteProperty.X, -1);
  }
  if (input.acceleration(Dimension.Y) > 500) {
    player.change(LedSpriteProperty.Y, 1);
  } else if (input.acceleration(Dimension.Y) < -500) {
    player.change(LedSpriteProperty.Y, -1);
  }
  led.plotBrightness(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y), 255);
  led.plotBrightness(goal.get(LedSpriteProperty.X), goal.get(LedSpriteProperty.Y), 119);
  serial.writeLine("X" + input.acceleration(Dimension.X) + " " + "Y" + input.acceleration(Dimension.Y) + " " + "Z" + input.acceleration(Dimension.Z));
  basic.pause(100);
});

// This section activates when a button is pressed
input.onButtonPressed(Button.A, function () {
  if (player.get(LedSpriteProperty.X) == goal.get(LedSpriteProperty.X) && player.get(LedSpriteProperty.Y) == goal.get(LedSpriteProperty.Y)) {
    serial.writeString("WON");
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone);
    basic.pause(1000);
  } else {
    music.play(music.tonePlayable(131, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone);
    basic.clearScreen();
    basic.pause(1000);
  }
});
