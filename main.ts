function goLeft () {
    pins.analogWritePin(AnalogPin.P16, 1023 * 4.0 / 20)
    pins.analogWritePin(AnalogPin.P8, 1023 * 2.0 / 20)
    pause(1000)
    stop()
}
function goRight() {
    pins.analogWritePin(AnalogPin.P16, 1023 * 2.0 / 20)
    pins.analogWritePin(AnalogPin.P8, 1023 * 1.0 / 20)
    pause(1000)
    stop()
}
function forward() {
    pins.analogWritePin(AnalogPin.P16, 1023 * 4.0 / 20)
    pins.analogWritePin(AnalogPin.P8, 1023 * 1.0 / 20)
    pause(2000)
    stop()
}

function back() {
    pins.analogWritePin(AnalogPin.P16, 1023 * 1.0 / 20)
    pins.analogWritePin(AnalogPin.P8, 1023 * 2.0 / 20)
    pause(2000)
    stop()
}

function stop(){
    pins.analogWritePin(AnalogPin.P16, 0)
    pins.analogWritePin(AnalogPin.P8, 0)
}
radio.onReceivedString(function (receivedString) {
   
    
    switch (receivedString) {
        case "0":
            basic.showArrow(ArrowNames.West)
            goLeft()
            break
        case "1":
            basic.showArrow(ArrowNames.North)
            forward()
            break
        case "2":
            basic.showArrow(ArrowNames.East)
            goRight()
            break
        case "3":
            basic.showArrow(ArrowNames.South)
            back()
            break
    }

    
})
radio.setGroup(1)
pins.analogSetPeriod(AnalogPin.P8, 20)
pins.analogSetPeriod(AnalogPin.P16, 20)
basic.forever(function () {

})
