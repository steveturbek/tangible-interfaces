// @ts-nocheck

// a very simple demo of sending messages from one microbit to another

radio.setGroup(1);
input.onButtonPressed(Button.A, function () {
  radio.sendString("Micro Chat");
});

radio.onReceivedString(function (receivedString: string) {
  basic.showString(receivedString);
});
