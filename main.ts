namespace SpriteKind {
    export const gold = SpriteKind.create()
    export const ghost = SpriteKind.create()
    export const spawner = SpriteKind.create()
    export const chest = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ghost, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 1000)
    info.changeLifeBy(-2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.spawner, function (sprite, otherSprite) {
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    otherSprite.destroy()
    mySprite3.ay = 300
    animation.runImageAnimation(
    mySprite3,
    [img`
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 1 f 5 5 f 1 . . . . . . 
        . . . . 4 5 5 5 5 4 . . . . . . 
        . . 5 . 4 4 4 4 4 4 . 5 . . . . 
        . . 5 . 4 4 4 4 4 4 . 5 . . . . 
        . . 5 . . . . . . . . 5 . . . . 
        . . 5 . 5 . . . . . . 5 . 5 . . 
        . . 5 . 5 . . . 5 . . 5 . 5 . . 
        . . . . 5 . . . 5 . . . . 5 . . 
        . . 5 . 5 . 5 . 5 . 5 . . 5 . . 
        . . 5 . . . 5 . 5 . 5 . . 5 . . 
        . . 5 . . . 5 . 5 . 5 . . 5 . . 
        . . 5 . . . 5 . . . 5 . . . . . 
        . . 5 . . . 5 . . . 5 . . . . . 
        . . . . . . 5 . . . . . . . . . 
        `,img`
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 1 f 5 5 f 1 . 5 . . . . 
        . . . . 4 5 5 5 5 4 . 5 . . . . 
        . . . . 4 4 4 4 4 4 . 5 . . . . 
        . . . 5 4 4 4 4 4 4 . 5 . . . . 
        . . . 5 . . . . . . . 5 . 5 . . 
        . . . 5 . 5 . . . . . . . 5 . . 
        . . . 5 . 5 . . . 5 . . . 5 . . 
        . . . 5 . 5 . . . 5 . . . 5 . . 
        . . . . . 5 . 5 . 5 . 5 . 5 . . 
        . . . . 5 . . 5 . 5 . 5 . 5 . . 
        . . . . 5 . . 5 . 5 . 5 . . . . 
        . . . . 5 . . 5 . . . 5 . . . . 
        . . . . 5 . . 5 . . . 5 . . . . 
        . . . . 5 . . 5 . . . . . . . . 
        `,img`
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . 1 f 5 5 f 1 5 . . . . . 
        . . . . 4 5 5 5 5 4 5 . . . . . 
        . . . . 4 4 4 4 4 4 5 . . . . . 
        . . . . 4 4 4 4 4 4 5 . 5 . . . 
        . . . 5 . . . . . . . . 5 . . . 
        . . . 5 . . . 5 . . . . 5 . . . 
        . . . 5 . . . 5 . . . . 5 . . . 
        . . . 5 . . . 5 . . 5 . 5 . . . 
        . . . 5 . . . 5 . . 5 . 5 . 5 . 
        . . . . . . 5 . . . 5 . . . 5 . 
        . . . . . . 5 . . . 5 . 5 . 5 . 
        . . . . . . 5 . . . 5 . 5 . 5 . 
        . . . . . . 5 . . . . . 5 . 5 . 
        . . . . . . 5 . . . . . 5 . . . 
        `,img`
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 1 f 5 5 f 1 . 5 . . . . 
        . . . . 4 5 5 5 5 4 . 5 . . . . 
        . . . . 4 4 4 4 4 4 . 5 . . . . 
        . . . 5 4 4 4 4 4 4 . 5 . . . . 
        . . . 5 . . . . . . . 5 . 5 . . 
        . . . 5 . 5 . . . . . . . 5 . . 
        . . . 5 . 5 . . . 5 . . . 5 . . 
        . . . 5 . 5 . . . 5 . . . 5 . . 
        . . . . . 5 . 5 . 5 . 5 . 5 . . 
        . . . . 5 . . 5 . 5 . 5 . 5 . . 
        . . . . 5 . . 5 . 5 . 5 . . . . 
        . . . . 5 . . 5 . . . 5 . . . . 
        . . . . 5 . . 5 . . . 5 . . . . 
        . . . . 5 . . 5 . . . . . . . . 
        `],
    100,
    true
    )
    mySprite3.setPosition(mySprite.x - 25, mySprite.y)
    mySprite3.follow(mySprite, 35)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -85
    }
})
function game_start () {
    if (current_level == 0) {
        tiles.setTilemap(tilemap`level2`)
    } else if (current_level == 1) {
        tiles.setTilemap(tilemap`level3`)
    } else if (current_level == 2) {
        tiles.setTilemap(tilemap`level1`)
    } else if (current_level == 3) {
        tiles.setTilemap(tilemap`level6`)
    } else {
        game.over(true, effects.confetti)
    }
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile6`)
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
        mySprite2 = sprites.create(img`
            . . . . d . . . . d d . . . . . 
            . . . . d . . . . . d . . . . . 
            . . . . d . . . . . d . . . . . 
            . . . . d . . . . . d . . . . . 
            . . . . d . . . . . d . . . . . 
            . . . . d d . d d d d . . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.gold)
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . . . . . f f . . . . 
            . . . . . . . f f f 5 5 f . . . 
            . . . . f f f 5 5 5 5 5 5 f . . 
            . f f f 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 5 5 5 5 5 1 1 1 1 1 f 
            f 1 5 5 5 5 5 1 1 1 4 4 4 4 4 f 
            f 5 1 5 1 1 1 4 4 4 4 4 4 4 4 f 
            f 5 5 1 4 4 4 4 4 4 4 4 4 4 4 f 
            f 5 5 4 4 4 4 4 4 4 4 4 f f f . 
            . f 5 4 4 4 4 4 4 f f f . . . . 
            . . f 4 4 4 f f f . . . . . . . 
            . . . f f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . f f f 5 5 f . . . 
            . . . . f f f 5 5 5 5 5 5 f . . 
            . f f f 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 5 5 5 5 5 1 1 1 1 1 f 
            f 1 5 5 5 5 5 1 1 1 4 4 4 4 4 f 
            f 5 1 5 1 1 1 4 4 4 4 4 4 4 4 f 
            f 5 5 1 4 4 4 4 4 4 4 4 4 4 4 f 
            f 5 5 4 4 4 4 4 4 4 4 4 f f f . 
            . f 5 4 4 4 4 4 4 f f f . . . . 
            . . f 4 4 4 f f f . . . . . . . 
            . . . f f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . f f f 5 5 f . . . 
            . . . . f f f 5 5 5 5 5 5 f . . 
            . f f f 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 5 5 5 5 5 1 1 1 1 1 f 
            f 1 5 5 5 5 5 1 1 1 4 4 4 4 4 f 
            f 5 1 5 1 1 1 4 4 4 4 4 4 4 4 f 
            f 5 5 1 4 4 4 4 4 4 4 4 4 4 4 f 
            f 5 5 4 4 4 4 4 4 4 4 4 f f f . 
            . f 5 4 4 4 4 4 4 f f f . . . . 
            . . f 4 4 4 f f f . . . . . . . 
            . . . f f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . f f f 5 5 f . . . 
            . . . . f f f 5 5 5 5 5 5 f . . 
            . f f f 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 5 5 5 5 5 1 1 1 1 1 f 
            f 1 5 5 5 5 5 1 1 1 4 4 4 4 4 f 
            f 5 1 5 1 1 1 4 4 4 4 4 4 4 4 f 
            f 5 5 1 4 4 4 4 4 4 4 4 4 4 4 f 
            f 5 5 4 4 4 4 4 4 4 4 4 f f f . 
            . f 5 4 4 4 4 4 4 f f f . . . . 
            . . f 4 4 4 f f f . . . . . . . 
            . . . f f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . f f f 5 5 f . . . 
            . . . . f f f 5 5 5 5 5 5 f . . 
            . f f f 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 5 5 5 5 5 1 1 1 1 1 f 
            f 1 5 5 5 5 5 1 1 1 4 4 4 4 4 f 
            f 5 1 5 1 1 1 4 4 4 4 4 4 4 4 f 
            f 5 5 1 4 4 4 4 4 4 4 4 4 4 4 f 
            f 5 5 4 4 4 4 4 4 4 4 4 f f f . 
            . f 5 4 4 4 4 4 4 f f f . . . . 
            . . f 4 4 4 f f f . . . . . . . 
            . . . f f f . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . f f f 5 5 f . . . 
            . . . . f f f 5 5 5 5 5 5 f . . 
            . f f f 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 5 5 5 5 5 1 1 1 1 1 f 
            f 1 5 5 5 5 5 1 1 1 4 4 4 4 4 f 
            f 5 1 5 1 1 1 4 4 4 4 4 4 4 4 f 
            f 5 5 1 4 4 4 4 4 4 4 4 4 4 4 f 
            f 5 5 4 4 4 4 4 4 4 4 4 f f f . 
            . f 5 4 4 4 4 4 4 f f f . . . . 
            . . f 4 4 4 f f f . . . . . . . 
            . . . f f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . f f f 5 5 f . . . 
            . . . . f f f 5 5 5 5 5 5 f . . 
            . f f f 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 5 5 5 5 5 1 1 1 1 1 f 
            f 1 5 5 5 5 5 1 1 1 4 4 4 4 4 f 
            f 5 1 5 1 1 1 4 4 4 4 4 4 4 4 f 
            f 5 5 1 4 4 4 4 4 4 4 4 4 4 4 f 
            f 5 5 4 4 4 4 4 4 4 4 4 f f f . 
            . f 5 4 4 4 4 4 4 f f f . . . . 
            . . f 4 4 4 f f f . . . . . . . 
            . . . f f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . f f f 5 5 f . . . 
            . . . . f f f 5 5 5 5 5 5 f . . 
            . f f f 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 5 5 5 5 5 1 1 1 1 1 f 
            f 1 5 5 5 5 5 1 1 1 4 4 4 4 4 f 
            f 5 1 5 1 1 1 4 4 4 4 4 4 4 4 f 
            f 5 5 1 4 4 4 4 4 4 4 4 4 4 4 f 
            f 5 5 4 4 4 4 4 4 4 4 4 f f f . 
            . f 5 4 4 4 4 4 4 f f f . . . . 
            . . f 4 4 4 f f f . . . . . . . 
            . . . f f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile9`)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile10`)) {
        spawner = sprites.create(img`
            b b b b b b b b b b b b b b b . 
            b . . . . b b b b b b b b b b . 
            b . . . . b b b . . . . . b b . 
            b . . . b b b . b b b b b b b b 
            b . . . . b . b . b b b b b b b 
            b b b b b . b b b b . . . b b b 
            . b . . . b . b . b . . . b b b 
            b b b b b . . b b b b b b b b b 
            b . . b b . . . . b . . . . b b 
            b b . b . b b . b b b b b b b b 
            b . b . b b b b . b . . . . b . 
            b . . b . b . . . b . . . b b . 
            b . . b b . b b b . . b b . . b 
            b . b . . b . . . b b b . . . b 
            b b b . . b b b b . . . . . b b 
            . . b b b b b b b b b b b b b b 
            `, SpriteKind.spawner)
        tiles.placeOnTile(spawner, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
        ghast = sprites.create(img`
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 f f f 1 1 f f f 1 1 1 . . 
            . . 1 1 d d 1 1 d d 1 1 1 1 . . 
            . . 1 1 d 1 1 1 1 d 1 1 1 1 . . 
            . . b b 1 1 1 1 1 1 1 b b 1 . . 
            . . 1 1 1 f f f f d 1 1 1 1 . . 
            . . 1 1 d 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 . d 1 . d 1 . . 1 . d d . 
            . . 1 . . 1 1 . 1 1 d 1 1 . d d 
            . . . 1 . d 1 d . 1 . . 1 . . . 
            . . . . . . 1 . . . . . . . . . 
            `, SpriteKind.ghost)
        tiles.placeOnTile(ghast, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runMovementAnimation(
        ghast,
        "c 0 -100 0 100 0 0",
        1000,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile15`)) {
        spawner = sprites.create(img`
            . . 4 4 4 4 4 e e e e e e e . . 
            4 4 4 4 4 4 4 e e e e e e e e e 
            4 4 4 4 4 4 4 e e e e e e e e e 
            4 4 4 4 4 4 e e e e e e e e e e 
            5 5 5 5 4 e e e e e e e 5 5 5 5 
            4 4 4 5 5 e e e e e e 5 5 e e e 
            4 4 4 4 5 5 e e e e 5 5 e e e e 
            4 4 4 4 e 5 5 5 5 5 5 e e e e e 
            4 4 4 4 e e 5 e e 5 e e e e e e 
            4 4 4 e e e 5 5 5 5 e e e e e e 
            4 4 4 e e e e e e e e e e e e e 
            4 4 4 e e e e e e e e e e e e e 
            4 4 4 e e e e e e e e e e e e e 
            4 4 4 4 e e e e e e e e e e e e 
            4 4 4 4 e e e e e e e e e e e e 
            . f 4 4 4 e e e e e e e e e f . 
            `, SpriteKind.chest)
        tiles.placeOnTile(spawner, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile0`, function (sprite, location) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.chest, function (sprite, otherSprite) {
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    current_level += 1
    game_start()
    spawner.destroy(effects.spray, 500)
    mySprite3.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gold, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 1000)
    if (sprite.y < otherSprite.y) {
        info.changeScoreBy(2)
    } else {
        info.changeLifeBy(-1)
    }
    if (sprite.y == otherSprite.y) {
        info.changeLifeBy(-1)
    }
})
let ghast: Sprite = null
let spawner: Sprite = null
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
let current_level = 0
game.splash("Find your way to the Chest of Glory", "Left and Right to Move, A(SPACE) to jump")
current_level = 0
scene.setBackgroundImage(img`
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222eeeee222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222eeeeeeeeeeeeeeee222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    22222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    22222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222222222222222222222222222222222222222222222222222222222222222222
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee222222222222222222222222222222222222222222222222222222222222222222222222222222222
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222222222222222222222222222222222222222222222222222222222222222222222222222
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222222222222222222222222222222222222222222222222222222222222
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee222222222222222222222222222222222222222222222222222222222222222222222222222
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222222222222222222222222222222222222222222222222222222222222222222222
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44444444444444422222222224444444444444444444444422222222222222222222
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444444444444444444444444444444442222222222222222222
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44444444444444444444444444444444444444444222222222222222444
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444444444444444442222222224444444
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44444444444444444444444444444444444444444444444444444
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44444444444444444444444444444444444444444444444
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444444
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444444444444
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444444444
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444444
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44444444444444
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44444444444
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee444444444
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44444
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2eeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ee2eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeee2eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
mySprite = sprites.create(img`
    . . . . f f f f f f f . . . . . 
    . . . f 2 2 2 2 2 2 2 f . . f . 
    . . . f 2 2 2 2 2 2 2 f f f f . 
    . . . f f f f f f f f f f f . . 
    . . . f f f d 1 d 1 d f . . . . 
    . f f f b d d f d f d f . . . . 
    f 2 f f b b b d d d d d f . . . 
    f 2 2 2 f f b b f f d d 9 9 9 . 
    f 2 2 f 2 f f f f f f f . b 9 9 
    . f f 2 f 2 2 2 f 2 f . b e b 9 
    . . f 2 f 2 2 2 f 2 f b e b . 9 
    . . f b d f 2 2 f 2 f d b . . 9 
    . . f b b f 2 2 f 2 f b f . . . 
    . . . f f f f f f f f f . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . 2 2 2 . . 2 2 2 . . . . 
    `, SpriteKind.Player)
game_start()
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 100
scene.cameraFollowSprite(mySprite)
mySprite.setBounceOnWall(false)
info.setLife(5)
game.onUpdate(function () {
    if (mySprite.vx < 0) {
        mySprite.setImage(img`
            . . . . . f f f f f f f . . . . 
            . f . . f 2 2 2 2 2 2 2 f . . . 
            . f f f f 2 2 2 2 2 2 2 f . . . 
            . . f f f f f f f f f f f . . . 
            . . . . f d 1 d 1 d f f f . . . 
            . . . . f d f d f d d b f f f . 
            . . . f d d d d d b b b f f 2 f 
            . 9 9 9 d d f f b b f f 2 2 2 f 
            9 9 b . f f f f f f f 2 f 2 2 f 
            9 b e b . f 2 f 2 2 2 f 2 f f . 
            9 . b e b f 2 f 2 2 2 f 2 f . . 
            9 . . b d f 2 f 2 2 f d b f . . 
            . . . f b f 2 f 2 2 f b b f . . 
            . . . . f f f f f f f f f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . 2 2 2 . . 2 2 2 . . . . 
            `)
    } else if (mySprite.vy < 0) {
        mySprite.setImage(img`
            . . . . f f f f f f f . . . . . 
            . . . f 2 2 2 2 2 2 2 f . . f . 
            . . . f 2 2 2 2 2 2 2 f f f f . 
            . . . f f f f f f f f f f f . . 
            . . . f f f d 1 d 1 d f . . . . 
            . f f f b d d f d f d f . . . . 
            f 2 f f b b b d d d d d 9 9 9 . 
            f 2 2 2 f f b b f f d d . b 9 9 
            f 2 2 f 2 f f f f f f f b e b 9 
            . f f 2 f 2 2 2 f 2 f b e b . 9 
            . . f 2 f 2 2 2 f 2 f d b . . 9 
            . . f b d f 2 2 f 2 f b f . . . 
            . . f b b f 2 2 f f f f . . . . 
            . . f f f f f f f f f . . . . . 
            . . . f f f f . . 2 2 2 . . . . 
            . . . 2 2 2 . . . . . . . . . . 
            `)
    } else if (mySprite.vy > 0) {
        mySprite.setImage(img`
            . . . . f f f f f f f . . . . . 
            . . . f 2 2 2 2 2 2 2 f . . f . 
            . . . f 2 2 2 2 2 2 2 f f f f . 
            . . . f f f f f f f f f f f . . 
            . f f f f f d 1 d 1 d f . . . . 
            f 2 2 f b d d f d f d f . . . . 
            f 2 2 f b b b 1 1 1 d d f . . . 
            f 2 2 2 f f b 2 2 2 d d f . . . 
            . f f f f f f f f f f f . . . . 
            f d d 2 2 2 2 2 f 2 f f f f . . 
            f d b 2 2 2 2 2 f 2 f 2 d d f . 
            . f f f f f 2 2 f 2 f 2 d b f . 
            . . . . f 2 2 2 f 2 f f f f . . 
            . . . . f f f f f f f . . . . . 
            . . . 2 2 2 f f f 2 2 2 . . . . 
            . . . 2 2 2 . . . 2 2 2 . . . . 
            `)
    } else if (mySprite.vx < 0 && mySprite.vy < 0) {
        mySprite.setImage(img`
            . . . . . f f f f f f f . . . . 
            . f . . f 2 2 2 2 2 2 2 f . . . 
            . f f f f 2 2 2 2 2 2 2 f . . . 
            . . f f f f f f f f f f f . . . 
            . . . . f d 1 d 1 d f f f . . . 
            . . . . f d f d f d d b f f f . 
            . 9 9 9 d d d d d b b b f f 2 f 
            9 9 b . d d f f b b f f 2 2 2 f 
            9 b e b f f f f f f f 2 f 2 2 f 
            9 . b e b f 2 f 2 2 2 f 2 f f . 
            9 . . b d f 2 f 2 2 2 f 2 f . . 
            . . . f b f 2 f 2 2 f d b f . . 
            . . . . f f f f 2 2 f b b f . . 
            . . . . . f f f f f f f f f . . 
            . . . . 2 2 2 . . f f f f . . . 
            . . . . . . . . . . 2 2 2 . . . 
            `)
    } else {
        mySprite.setImage(img`
            . . . . f f f f f f f . . . . . 
            . . . f 2 2 2 2 2 2 2 f . . f . 
            . . . f 2 2 2 2 2 2 2 f f f f . 
            . . . f f f f f f f f f f f . . 
            . . . f f f d 1 d 1 d f . . . . 
            . f f f b d d f d f d f . . . . 
            f 2 f f b b b d d d d d f . . . 
            f 2 2 2 f f b b f f d d 9 9 9 . 
            f 2 2 f 2 f f f f f f f . b 9 9 
            . f f 2 f 2 2 2 f 2 f . b e b 9 
            . . f 2 f 2 2 2 f 2 f b e b . 9 
            . . f b d f 2 2 f 2 f d b . . 9 
            . . f b b f 2 2 f 2 f b f . . . 
            . . . f f f f f f f f f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . 2 2 2 . . 2 2 2 . . . . 
            `)
    }
})
