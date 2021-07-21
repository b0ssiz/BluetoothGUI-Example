function LEDon() {
  sendData("LED Color" + ledColorPicker.value()+ "\n");
  console.log("LED_ON")
}
function LEDoff() {
  sendData("LED OFF\n");
  console.log("LED_OFF")
}
