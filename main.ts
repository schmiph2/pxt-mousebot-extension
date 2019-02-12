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
enum colors {
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

//% color="#0064A2"
namespace mouseBot {

    //% block="Addiere %a mit %b"
    export function add(a: number, b: number):number {
        return a+b;
    }


}
