
//% weight=0  color="#0064A2" icon="\uf535" block="mouseBot"
namespace MB {
    //% blockId=motorleftright block="Beide Motoren mit Geschwindigkeit %velocity"
    //% weight=90 blockGap=10 
    //% velocity.min=-100 velocity.max= 100 velocity.defl=30
    export function MotorLeftandRight(velocity: number) {
        pins.analogWritePin(AnalogPin.C16, velocity);
    }
}    
