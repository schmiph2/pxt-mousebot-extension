enum MBPixelColors {
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

enum MBMotor {
    //% block=Links
    left=0,
    //% block=Rechts
    right=1
}  
enum MBLinefollower {
    //% block=Links
    left=0,
    //% block=Rechts
    right=1
}      

//% color=#0064A2 weight=25 icon="\uf1b9" block="MouseBot-Motoren"
namespace MBMotoren {  

    //% blockId=motorleftright block="Beide Motoren mit Geschwindigkeit %velocity"
    //% weight=0 blockGap=10 
    //% velocity.min=-100 velocity.max= 100 velocity.defl=30
    export function MotorLeftandRight(velocity: number) {
        pins.analogWritePin(AnalogPin.C16, 0);
    }
    //% blockId=motorX block="Motor %mbmotor| mit Geschwindigkeit %velocity"
    //% weight=0 blockGap=10 
    //% velocity.min=-100 velocity.max= 100 velocity.defl=30
    export function MotorLeft(mbmotor: MBMotor, velocity: number) {
        pins.analogWritePin(AnalogPin.C16, 0);
    }
}    
//% weight=20 color=#0064A2 icon="\uf110" block="MouseBot-LEDs"
namespace MBLEDs{
    
    
    //% blockId=setLEDCol block="Setze LED %lednum| auf Farbe %ledcol"
    //% weight=0 blockGap=10 
    //% lednum.min=0 lednum.max=6 lednum.defl=0
    //% ledcol.defl=MBPixelColors.Red
    export function setLEDtoColor(lednum: number, ledcol:MBPixelColors){
        pins.analogWritePin(AnalogPin.C16, 0);
    }
}    

//% weight=15 color=#0064A2 icon="\uf4d7" block="MouseBot-Sensoren"
namespace MBSensors{
    //% blockId=ultrasonicDist block="Lese Ultraschallsensor-Distanz"
    //% weight=0 blockGap=10 
    export function ultrasonicDistance(): number{
        let dist=1;
        return dist;
    }
    //% blockId=linefol block="Lese Linienfolger %lfol"
    //% weight=0 blockGap=10 
    export function linefollower(lfol: MBLinefollower): number {
        let dist=1;
        return dist;
    }
}    
