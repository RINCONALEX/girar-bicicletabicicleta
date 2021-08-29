basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # . # #
            # # # # #
            . # # # .
            `)
    } else {
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                . . # . .
                . # # . .
                # # # # #
                . # # . .
                . . # . .
                `)
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showLeds(`
                . . # . .
                . . # # .
                # # # # #
                . . # # .
                . . # . .
                `)
        }
    }
})
