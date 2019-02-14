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
    right=1,
    //% block="Links + Rechts"
    leftAndRight=2
}  
enum MBLinefollower {
    //% block=Links
    left=0,
    //% block=Rechts
    right=1
}      

//namespace motors {  
//
//    //% blockId=MotorPower block="Motor %mbmotor| mit Geschwindigkeit %velocity"
//    //% weight=0 blockGap=10 
//    //% velocity.min=-100 velocity.max= 100 velocity.defl=30
//    export function MotorPower(mbmotor: MBMotor, velocity: number) {
//        pins.analogWritePin(AnalogPin.C16, 0);
//    }
//    //% blockId=MotorPowerDuration block="Motor %mbmotor| mit Geschwindigkeit %velocity| für %dur ms"
//    //% weight=0 blockGap=10 
//    //% velocity.min=-100 velocity.max= 100 velocity.defl=30 dur.min=0 dur.max=100000
//    export function MotorPowerDuration(mbmotor: MBMotor, velocity: number, dur: number) {
//        pins.analogWritePin(AnalogPin.C16, 0);
//    }    
//    //% blockId=turnLeft block="Drehe nach Links"
//    //% weight=0 blockGap=10 
//    export function turnLeft() {
//        pins.analogWritePin(AnalogPin.C16, 0);
//    }  
//    //% blockId=turnLeftDuration block="Drehe nach Links für %dur ms"
//    //% weight=0 blockGap=10 
//    //% dur.min=0 dur.max=100000
//    export function turnLeftDuration(dur: number) {
//        pins.analogWritePin(AnalogPin.C16, 0);
//    }      
//    
//    //% blockId=turnRight block="Drehe nach Rechts für %dur ms"
//    //% weight=0 blockGap=10 
//    export function turnRight() {
//        pins.analogWritePin(AnalogPin.C16, 0);
//    }         
//    //% blockId=turnRightDuration block="Drehe nach Links für %dur ms"
//    //% weight=0 blockGap=10 
//    //% dur.min=0 dur.max=100000
//    export function turnRightDuration(dur: number) {
//        pins.analogWritePin(AnalogPin.C16, 0);
//    }        
//    //% blockId=MotorStop block="Motor %mbmotor Stopp"
//    //% weight=0 blockGap=10 
//    export function MotorStop(mbmotor: MBMotor) {
//        pins.analogWritePin(AnalogPin.C16, 0);
//    }    
//} 
    
    
    
    
    
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

    
    
    
    
    
//namespace input{
//    //% blockId=ultrasonicDist block="Lese Ultraschallsensor-Distanz"
//    //% weight=0 blockGap=10 
//    export function ultrasonicDistance(): number{
//        let dist=1;
//        return dist;
//    }
//    //% blockId=linefol block="Lese Farbe von Linienfolger %lfol"
//    //% weight=0 blockGap=10 
//    export function linefollower(lfol: MBLinefollower): number {
//        let dist=1;
//        return dist;
//    }
//    //% blockId=whiskers block="Schnurrhaare betätigt"
//    //% weight=0 blockGap=10 
//    export function whiskers(): boolean {
//        let pressed=true;
//        return pressed;
//    }
//    //% blockId=noseButton block="Schnautztaster betätigt"
//    //% weight=0 blockGap=10 
//    export function noseButton(): boolean {
//        let pressed=true;
//        return pressed;
//    }
//        
//}    
