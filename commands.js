function forward() {
  sendData("W\n");
  console.log("Forward")
}

function backward() {
  sendData("S\n");
  console.log("Backward")
}

function turnLeft() {
  sendData("A\n");
  console.log("Turn Left")
}

function turnRight() {
  sendData("D\n");
  console.log("Turn Right")
}

function sendStopCommand() {
  sendData("H\n");
  console.log("Stop")
}