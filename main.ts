enum NeoPixelColors {
    //% block=Rot
    Red = 0xFF0000,
    //% block=Orange
    Orange = 0xFFA500,
    //% block=Gelb
    Yellow = 0xFFFF00,
    //% block=Grün
    Green = 0x00FF00,
    //% block=Blau
    Blue = 0x0000FF,
    //% block=Indigo
    Indigo = 0x4b0082,
    //% block=Violet
    Violet = 0x8a2be2,
    //% block=Pink
    Purple = 0xFF00FF,
    //% block=Weiss
    White = 0xFFFFFF,
    //% block=Aus
    Black = 0x000000
}




//% color=#008272 weight=30 icon="\uf1b9"
namespace MBMotoren {
    //% blockId=motorleftright block="Beide Motoren mit Geschwindigkeit %velocity"
    //% weight=90 blockGap=10 
    //% velocity.min=-100 velocity.max= 100 velocity.defl=30
    export function MotorLeftandRight(velocity: number) {
        pins.analogWritePin(AnalogPin.C16, velocity);
    }
    //% blockId=motorleftright block="Linker Motoren mit Geschwindigkeit %velocity"
    //% weight=90 blockGap=10 
    //% velocity.min=-100 velocity.max= 100 velocity.defl=30
    export function MotorLeft(velocity: number) {
        pins.analogWritePin(AnalogPin.C16, velocity);
    }
    //% blockId=motorleftright block="Rechter Motoren mit Geschwindigkeit %velocity"
    //% weight=90 blockGap=10 
    //% velocity.min=-100 velocity.max= 100 velocity.defl=30
    export function MotorRight(velocity: number) {
        pins.analogWritePin(AnalogPin.C16, velocity);
    }
}    
//% weight=100 color=#0064A2 icon="\uf110" block="RGB-LEDs"
namespace MBLEDs{
    //% blockId=motorleftright block="Setze LED %lednum auf Farbe %ledcol
    //% weight=90 blockGap=10 
    //% velocity.min=-100 velocity.max= 100 velocity.defl=30
    export function (lednum: number, ledcol:NeoPixelColors){
        pins.analogWritePin(AnalogPin.C16, velocity);
    }
}    
