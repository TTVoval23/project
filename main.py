def on_forever():
    basic.show_leds("""
        . . . . .
                . # . . #
                . . . # .
                . . # . .
                . # . . .
    """)
    basic.show_leds("""
        . . # . .
                . . # . .
                . # # . .
                . . # . .
                . . # . .
    """)
    basic.show_leds("""
        # . . . .
                . . . . .
                # . . . .
                . # . . .
                . . # . .
    """)
    basic.show_string("homerun")
basic.forever(on_forever)
