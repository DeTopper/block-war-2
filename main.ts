let MC_Looking_Right = sprites.create(img`
    ................................
    ................................
    ................................
    ............b....b..............
    .............b..b...............
    ..............bb................
    ..............bb................
    .............b88b...............
    ............b8888b..............
    ........ffffffffffffff..........
    ........ff3333ff3333ff..........
    ........f333333333333f..........
    ........f333ff33ff333f..........
    ........f333f633f6333f..........
    ........f333333333333f..........
    ........ff3233ff3323ff..........
    ........ff3323333233ff..........
    ........f333322223333f..........
    ........f333333333333f..........
    ........f333333333333f..........
    ........ff3333ff3333ff..........
    ........ffffffffffffff..........
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
let MC_Looking_Up = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ............b....b..............
    .............b..b...............
    ..............bb................
    ..............bb................
    .............b88b...............
    ............b8888b..............
    ........ffffffffffffff..........
    ........ff3333ff3333ff..........
    ........f333333333333f..........
    ........f333f6336f333f..........
    ........f333ff33ff333f..........
    ........f333333333333f..........
    ........ff3233ff3323ff..........
    ........ff3323333233ff..........
    ........f333322223333f..........
    ........f333333333333f..........
    ........f333333333333f..........
    ........ff3333ff3333ff..........
    ........ffffffffffffff..........
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
let MC_Looking_Left = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    .............b....b.............
    ..............b..b..............
    ...............bb...............
    ...............bb...............
    ..............b88b..............
    .............b8888b.............
    .........ffffffffffffff.........
    .........ff3333ff3333ff.........
    .........f333333333333f.........
    .........f333ff33ff333f.........
    .........f3336f336f333f.........
    .........f333333333333f.........
    .........ff3233ff3323ff.........
    .........ff3323333233ff.........
    .........f333322223333f.........
    .........f333333333333f.........
    .........f333333333333f.........
    .........ff3333ff3333ff.........
    .........ffffffffffffff.........
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
let MC_Looking_Down = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ............b....b..............
    .............b..b...............
    ..............bb................
    ..............bb................
    .............b88b...............
    ............b8888b..............
    ........ffffffffffffff..........
    ........ff3333ff3333ff..........
    ........f333333333333f..........
    ........f333ff33ff333f..........
    ........f333f6336f333f..........
    ........f333333333333f..........
    ........ff3233ff3323ff..........
    ........ff3323333233ff..........
    ........f333322223333f..........
    ........f333333333333f..........
    ........f333333333333f..........
    ........ff3333ff3333ff..........
    ........ffffffffffffff..........
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
let Main_Enemy = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ..................4.............
    ..............4...24............
    .............444.442............
    ............44242424............
    ...........4422444444...........
    .........f824242424248f.........
    .........8f8888888888f8.........
    .........f88bbb88bbb88f.........
    .........8f8888888888f8.........
    .........f888cc88cc888f.........
    .........8f8882882888f8.........
    ......f33f888888888888f33f......
    .........8f8888cc8888f8.........
    .........f8888cbbc8888f.........
    .........8f88cb88bc88f8.........
    .........f888b8888b888f.........
    .........8f8888888888f8.........
    .........f8..3....3..8f.........
    ............fff..fff............
    ...........ff.f..f.ff...........
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Enemy)
let Bullet_going_right = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 4 4 b b b b b b b b . . . . 
    . . 4 4 b b b b b b b b b . . . 
    . . 4 4 b b b b b b b b b b . . 
    . . 4 4 b b b b b b b b b . . . 
    . . 4 4 b b b b b b b b . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let Bullet_going_up = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b . . . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let Bullet_going_left = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . b b b b b b b b 4 4 . . . 
    . . b b b b b b b b b 4 4 . . . 
    . b b b b b b b b b b 4 4 . . . 
    . . b b b b b b b b b 4 4 . . . 
    . . . b b b b b b b b 4 4 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let Bullet_going_down = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . . . b . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
