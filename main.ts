input.onButtonPressed(Button.A, function () {
    Personaje.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Personaje.move(1)
})
function Nuevo_Enemigo () {
    Enemigo = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(350)
        Enemigo.change(LedSpriteProperty.Y, 1)
    }
}
let Enemigo: game.LedSprite = null
let Personaje: game.LedSprite = null
game.setScore(0)
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
Personaje = game.createSprite(2, 4)
Nuevo_Enemigo()
basic.forever(function () {
    if (Enemigo.isTouching(Personaje)) {
        basic.showIcon(IconNames.Sad)
        game.gameOver()
    }
    if (Enemigo.isTouchingEdge()) {
        game.addScore(1)
        Enemigo.delete()
        Nuevo_Enemigo()
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
    }
})
