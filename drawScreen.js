function drawScreen() {
  textSize(18);
  if (isConnected) {
    background(0, 255, 0);
    text('Connected', 100, 20);
  } else {
    background(255, 0, 0);
    textAlign(LEFT, TOP);
    text('Disconnected', 100, 20);
  }

  text(receivedValue, 15, 40);
  
  if(oldColorPickerValue != ledColorPicker.value() && millis()-millisecondTimerStart>50 && isConnected){
    oldColorPickerValue = ledColorPicker.value();
    sendData("LED Color" + ledColorPicker.value()+ "\n");
    millisecondTimerStart = millis();
  }
  
}
