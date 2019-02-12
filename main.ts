//% block="mouseBot-Motoren"
//% color="#0064A2"
enum mouseBotMotors {
    //% block=Links
    Links,
    //% block=Rechts
    Rechts
}

//% block="mouseBot-Linienfolger"
//% color="#0064A2"
enum mouseBotLineFollowers {
    //% block=Links
    Links,
    //% block=Rechts
    Rechts
}

//% block="LED-Farben"
//% color="#0064A2"
enum colorsLEDs {
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
//% weight=5 color=#0064A2 icon="\uf110"
namespace mouseBot {


    //% block="Motor %motor mit Geschwindigkeit %velocity"
    //% velocity.min=-100 velocity.max= 100 velocity.defl=30
    export function MotorX(motor: mouseBotMotors, velocity: number) {

    }
    //% block="Beide Motoren mit Geschwindigkeit %velocity"
    //% velocity.min=-100 velocity.max= 100 velocity.defl=30
    export function MotorLeftandRight(velocity: number) {

    }
    //% block="Beide Motoren auslaufen lassen"
    export function MotorLeftandRightRunDown() {

    }
    //% block="Beide Motoren stoppen"
    export function MotorLeftandRightStop() {

    }
    //% block="Ultraschallsensor-Distanz (in cm)"
    export function GetUltrasonicDist(): number {
        let dist = 0
        return dist;
    }  

    //% block="Setze Farbe von allen RGB-LED auf %colorLEDs"
    //% color.defl=Red
    export function showColor(colorLEDs:colorsLEDs) {
    } 

    //% block="Setze Farbe von RGB-LED %ledNumber auf %ledColor"
    //% ledNumber.min=0 ledNumber.max= 6 color.defl=Red
    export function setColorOfLed(ledNumber: number,ledColor:colorsLEDs) {
    } 
    //% block="Setze Helligkeit von RGB-LED %ledNumber auf %ledBrightness"
    //% ledNumber.min=0 ledNumber.max= 6 brightness.min=0 brightness.max=100 brightness.defl=20
    export function setBrightnessOfLed(ledNumber: number,ledBrightness: number) {
    } 

    //% block="Zeige Regenbogen von Farbton %startC bis %endC"
    //% shift.defl=1
    export function showRainbow(startC: number,endC: number) {
    }
    //% block="Verschiebe RGB-LEDs um %ledsShift"
    //% shift.defl=1
    export function shiftLEDs(ledsShift: number) {
    }
    //% block="Rotiere RGB-LEDs um %ledsRotate"
    //% rotate.defl=1
    export function rotateLEDs(ledsRotate: number) {
    }   
}
