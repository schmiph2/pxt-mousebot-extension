
//% weight=0  color="#0064A2" icon="\uf544" block="mouseBot"
namespace MB {
    //% blockId=motorleftright block="Beide Motoren mit Geschwindigkeit %velocity"
    //% weight=90 blockGap=10 
    //% velocity.min=-100 velocity.max= 100 velocity.defl=30
    export function MotorLeftandRight(velocity: number) {
        pins.analogWritePin(AnalogPin.C16, velocity);
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
