// MakeCode blocks for Infrared
// Original Code by 劉正吉 https://github.com/lioujj/pxt-IR
// MIT License
// Changes for Calliope Mini by M. Klein
//
//% weight=0 color=#87bc4b icon="\uf1eb" block="Test 2345"
namespace IR {
    export enum encodingType {
        //% block="NEC"
        NEC,
        //% block="SONY"
        SONY
    }
    let tempHandler: Action;
    let irLed = AnalogPin.C16; // P16 -> C16 Änderung für Calliope Mini
    const pwmPeriod = 26;
    pins.analogWritePin(irLed, 0);
    pins.analogSetPeriod(irLed, pwmPeriod);
    let send_init = false;
    let rec_init = false;
    let arr: number[] = []
    let received = false
    let first = true
    let rec_Type = ""
    let messageStr = ""
    let recPin = DigitalPin.C17 // P8 -> C17 Änderung für Calliope Mini
    let thereIsHandler = false
    arr = []

    function transmitBit(highTime: number, lowTime: number): void {
        pins.analogWritePin(irLed, 512);
        control.waitMicros(highTime);
        pins.analogWritePin(irLed, 0);
        control.waitMicros(lowTime);
    }

    /**
     *  set the infrared LED pin.
     */
    //% blockId=setIR_pin block="Test123 %myPin" blockExternalInputs=false
    //% weight=90 blockGap=10
    //% myPin.fieldEditor="gridpicker" myPin.fieldOptions.columns=4
    //% myPin.fieldOptions.tooltips="false" myPin.fieldOptions.width="300"
    export function setIR_pin123(myPin: AnalogPin) {
        irLed = myPin;
        pins.analogWritePin(irLed, 0);
        pins.analogSetPeriod(irLed, pwmPeriod);
        send_init = true;
    }
}    
