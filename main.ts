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
    left = 0,
    //% block=Rechts
    right = 1,
    //% block="Links + Rechts"
    leftAndRight = 2
}
enum MBLinefollower {
    //% block=Links
    left = 0,
    //% block=Rechts
    right = 1
}

namespace motors {

    //% blockId=mb_motorPower block="Motor %mbmotor| mit Geschwindigkeit %velocity"
    //% weight=0 blockGap=50 
    //% velocity.min=-100 velocity.max= 100 velocity.defl=30
    export function mb_motorPower(mbmotor: MBMotor, velocity: number) {
        pins.analogWritePin(AnalogPin.C16, 0);
    }
    //% blockId=mb_motorPowerDuration block="Motor %mbmotor| mit Geschwindigkeit %velocity| für %dur| ms"
    //% weight=0 blockGap=10 
    //% velocity.min=-100 velocity.max= 100 velocity.defl=30 dur.min=0 dur.max=100000
    export function mb_motorPowerDuration(mbmotor: MBMotor, velocity: number, dur: number) {
        pins.analogWritePin(AnalogPin.C16, 0);
    }

    //% blockId=mb_turnLeft block="Drehe nach Links"
    //% weight=0 blockGap=10 
    export function mb_turnLeft() {
        pins.analogWritePin(AnalogPin.C16, 0);
    }
    //% blockId=mb_turnLeftDuration block="Drehe nach Links für %dur| ms"
    //% weight=0 blockGap=10 
    //% dur.min=0 dur.max=100000
    export function mb_turnLeftDuration(dur: number) {
        pins.analogWritePin(AnalogPin.C16, 0);
    }
    
    //% blockId=mb_turnRight block="Drehe nach Rechts"
    //% weight=0 blockGap=10 
    export function mb_turnRight() {
        pins.analogWritePin(AnalogPin.C16, 0);
    }

    //% blockId=turnRightDuration block="Drehe nach Rechts für %dur| ms"
    //% weight=0 blockGap=10 
    //% dur.min=0 dur.max=100000
    export function turnRightDuration(dur: number) {
        pins.analogWritePin(AnalogPin.C16, 0);
    }

    //% blockId=mb_MotorStop block="Motor %mbmotor| Stopp"
    //% weight=0 blockGap=10 
    export function mb_MotorStop(mbmotor: MBMotor) {
        pins.analogWritePin(AnalogPin.C16, 0);
    }
    
        /**
     * Draws an image on the LED screen.
     * @param leds the pattern of LED to turn on/off
     * @param interval time in milliseconds to pause after drawing
     */
    //% help=basic/show-leds
    //% weight=95 blockGap=8
    //% imageLiteral=1 async
    //% blockId=device_show_leds
    //% block="show leds" icon="\uf00a"
    //% parts="ledmatrix"
    export function showLED(ImageLiteral leds) {
        pins.analogWritePin(AnalogPin.C16, 0);
    }
}





//% weight=20 color=#0064A2 icon="\uf0eb" block="MouseBot-LEDs" //icon must be from list https://semantic-ui.com/elements/icon.html
namespace MBLEDs {


    //% blockId=setLEDCol block="Setze LED %lednum| auf Farbe %ledcol"
    //% weight=0 blockGap=50 
    //% lednum.min=0 lednum.max=6 lednum.defl=0
    //% ledcol.defl=MBPixelColors.Red
    export function setLEDtoColor(lednum: number, ledcol: MBPixelColors) {
        pins.analogWritePin(AnalogPin.C16, 0);
    }
    //% blockId=showColor block="Setze alle LEDs auf Farbe %ledcol"
    //% weight=0 blockGap=10 
    //% ledcol.defl=MBPixelColors.Red
    export function showColor(ledcol: MBPixelColors) {
        pins.analogWritePin(AnalogPin.C16, 0);
    }
    //% blockId=showRainbow block="Zeige Regenbogen von Farbton %colStart| bis %colStop"
    //% weight=0 blockGap=10 colStart.min=0 colStart.max=255 colStart.defl=0 colStop.min=0 colStop.max=255 colStop.defl=255
    export function showRainbow(colStart: number, colStop: number) {
        pins.analogWritePin(AnalogPin.C16, 0);
    }
    //% blockId=shiftLEDs block="Verschiebe LEDs um %shiftVal"
    //% weight=0 blockGap=10 shiftVal.min=0 shiftVal.max=255 shiftVal.defl=1
    export function shiftLEDs(shiftVal: number) {
        pins.analogWritePin(AnalogPin.C16, 0);
    }

    //% blockId=rotLEDs block="Rotiere LEDs um %rotVal"
    //% weight=0 blockGap=10 rotVal.min=0 rotVal.max=255 rotVal.defl=1
    export function rotLEDs(rotVal: number) {
        pins.analogWritePin(AnalogPin.C16, 0);
    }
    //% blockId=ledbrightness block="Setze Helligkeit der LEDs auf %brightVal"
    //% weight=0 blockGap=10 brightVal.min=0 brightVal.max=255 brightVal.defl=100
    export function ledbrightness(brightVal: number) {
        pins.analogWritePin(AnalogPin.C16, 0);
    }
    //% blockId=ledVecColor block="Setze Farbe der LED %startLED| bis %stopLED| auf %ledcol"
    //% weight=0 blockGap=10 startLED.min=0 startLED.max=255 stopLED.min=0 stopLED.max=255 ledcol.defl=MBPixelColors.Red
    export function ledVecColor(startLED: number, stopLED: number, ledcol: MBPixelColors) {
        pins.analogWritePin(AnalogPin.C16, 0);
    }
    //% blockId=ledVecColor block="Rot %redVal Grün %greenVal| Blau %blueVal"
    //% weight=0 blockGap=10
    //% redVal.min=0 redVal.max=255 redVal.defl=255 greenVal.min=0 greenVal.max=255 greenVal.defl=0 blueVal.min=0 blueVal.max=255 blueVal.defl=255
    export function defCol(redVal: number, greenVal: number, blueVal: number): number {
        pins.analogWritePin(AnalogPin.C16, 0);
        let a = 1;
        return a;
    }

}    

namespace input {
    //% blockId=ultrasonicDist block="Lese Ultraschallsensor-Distanz"
    //% weight=0 blockGap=50 
    export function ultrasonicDistance(): number {
        let dist = 1;
        return dist;
    }
    //% blockId=linefol block="Lese Farbe von Linienfolger %lfol"
    //% weight=0 blockGap=10 
    export function linefollower(lfol: MBLinefollower): number {
        let dist = 1;
        return dist;
    }
    //% blockId=whiskers block="Schnurrhaare betätigt"
    //% weight=0 blockGap=10 
    export function whiskers(): boolean {
        let pressed = true;
        return pressed;
    }
    //% blockId=noseButton block="Schnauztaster betätigt"
    //% weight=0 blockGap=10 
    export function noseButton(): boolean {
        let pressed = true;
        return pressed;
    }

}   

