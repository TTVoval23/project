// it needs the bat to hit the ball then say homerun forever
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . . #
        . . . # .
        . . # . .
        . # . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        # . . . .
        . # . . .
        . . # . .
        `)
    basic.showString("homerun")
})
