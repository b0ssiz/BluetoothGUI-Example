/*  
 * Bluetooth Test - Processing Side (In Chrome)
 * Arduino to HM10 module to Google Chrome
 * https://www.amazon.com/gp/product/B06WGZB2N4/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1
 * 
 * p5.ble.js
 https://yining1023.github.io/p5ble-website/
 
 * kevin darrah
 * 
 * Twitter: https://twitter.com/KDcircuits
 * For inquiries or design services:
 * https://www.kdcircuits.com
 * 
 * License?  Do whatever you want with this code - it's just a sample
 */

//globals
let blueToothCharacteristic;//this is a blu
let receivedValue = "";

let blueTooth;
let isConnected = false;


var millisecondTimerStart;
var oldColorPickerValue;


function setup() {

  createCanvas(windowWidth, windowHeight);


  // Create a p5ble class
  console.log("setting up");
  blueTooth = new p5ble();

  const connectButton = createButton('Connect');
  connectButton.mousePressed(connectToBle);
  connectButton.position(15, 15);

  const forward_button = createButton('Forward');
  forward_button.mousePressed(forward);
  forward_button.mouseReleased(sendStopCommand)
  forward_button.position(95, 100);

  const backward_button = createButton('Backward');
  backward_button.mousePressed(backward);
  backward_button.mouseReleased(sendStopCommand)
  backward_button.position(95, forward_button.y + forward_button.width + 80);

  const turn_left_button = createButton('Turn Left');
  turn_left_button.mousePressed(turnLeft);
  turn_left_button.mouseReleased(sendStopCommand)
  turn_left_button.position(15, forward_button.y + forward_button.width + 10);

  const turn_right_button = createButton('Turn Right');
  turn_right_button.mousePressed(turnRight);
  turn_right_button.mouseReleased(sendStopCommand)
  turn_right_button.position(170, forward_button.y + forward_button.width + 10);

  ledColorPicker = createColorPicker('#ff0000');
  ledColorPicker.position(300, 15);
  millisecondTimerStart = millis();
}


function draw() {
  drawScreen();
}
