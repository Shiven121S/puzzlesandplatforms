namespace SpriteKind {
    export const Shard = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameStarted) {
        mySprite.vy = -215
    }
})
sprites.onCreated(SpriteKind.Shard, function (sprite) {
    tiles.placeOnRandomTile(sprite, assets.tile`myTile13`)
    animation.runImageAnimation(
    sprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f 4 4 f f . . . . . . 
        . . . . f 4 4 4 6 f . . . . . . 
        . . . . f 4 5 6 6 f . . . . . . 
        . . . . f 5 5 6 6 f . . . . . . 
        . . . . f f 5 6 6 f . . . . . . 
        . . . . . f 5 5 6 f f . . . . . 
        . . . . . f f 5 6 6 f . . . . . 
        . . . . . . f 5 5 f f . . . . . 
        . . . . . . f f 5 f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f 4 4 f f . . . . . . 
        . . . . f 4 4 4 6 f . . . . . . 
        . . . . f 4 5 6 6 f . . . . . . 
        . . . . f 5 5 6 6 f . . . . . . 
        . . . . f f 5 6 6 f . . . . . . 
        . . . . . f 5 5 6 f f . . . . . 
        . . . . . f f 5 6 6 f . . . . . 
        . . . . . . f 5 5 f f . . . . . 
        . . . . . . f f 5 f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f 4 4 f f . . . . . . 
        . . . . f 4 4 4 6 f . . . . . . 
        . . . . f 4 5 6 6 f . . . . . . 
        . . . . f 5 5 6 6 f . . . . . . 
        . . . . f f 5 6 6 f . . . . . . 
        . . . . . f 5 5 6 f f . . . . . 
        . . . . . f f 5 6 6 f . . . . . 
        . . . . . . f 5 5 f f . . . . . 
        . . . . . . f f 5 f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f 4 4 f f . . . . . . 
        . . . . f 4 4 4 6 f . . . . . . 
        . . . . f 4 5 6 6 f . . . . . . 
        . . . . f 5 5 6 6 f . . . . . . 
        . . . . f f 5 6 6 f . . . . . . 
        . . . . . f 5 5 6 f f . . . . . 
        . . . . . f f 5 6 6 f . . . . . 
        . . . . . . f 5 5 f f . . . . . 
        . . . . . . f f 5 f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f 4 4 f f . . . . . . 
        . . . . f 4 4 4 6 f . . . . . . 
        . . . . f 4 5 6 6 f . . . . . . 
        . . . . f 5 5 6 6 f . . . . . . 
        . . . . f f 5 6 6 f . . . . . . 
        . . . . . f 5 5 6 f f . . . . . 
        . . . . . f f 5 6 6 f . . . . . 
        . . . . . . f 5 5 f f . . . . . 
        . . . . . . f f 5 f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f 4 4 f f . . . . . . 
        . . . . f 4 4 4 6 f . . . . . . 
        . . . . f 4 5 6 6 f . . . . . . 
        . . . . f 5 5 6 6 f . . . . . . 
        . . . . f f 5 6 6 f . . . . . . 
        . . . . . f 5 5 6 f f . . . . . 
        . . . . . f f 5 6 6 f . . . . . 
        . . . . . . f 5 5 f f . . . . . 
        . . . . . . f f 5 f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f 4 4 f f . . . . . . 
        . . . . f 4 4 4 6 f . . . . . . 
        . . . . f 4 5 6 6 f . . . . . . 
        . . . . f 5 5 6 6 f . . . . . . 
        . . . . f f 5 6 6 f . . . . . . 
        . . . . . f 5 5 6 f f . . . . . 
        . . . . . f f 5 6 6 f . . . . . 
        . . . . . . f 5 5 f f . . . . . 
        . . . . . . f f 5 f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile11`)
        LeversPushed += 1
    } else {
        sprite.say("Press Space", 1000)
    }
})
function Set_Colors () {
    color.setColor(2, color.rgb(0, 155, 130))
    color.setColor(3, color.rgb(234, 248, 191))
    color.setColor(4, color.rgb(0, 105, 146))
    color.setColor(5, color.rgb(39, 71, 110))
    color.setColor(6, color.rgb(0, 29, 74))
}
blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "Play") {
        color.FadeToBlack.startScreenEffect(750)
        timer.after(1500, function () {
            textSprite.setText("Choose Map")
            textSprite.setPosition(75, 19)
            blockMenu.closeMenu()
            blockMenu.showMenu(["Map 1", "Map 2", "Map 3"], MenuStyle.List, MenuLocation.BottomHalf)
            color.clearFadeEffect()
        })
    } else if (option == "Map 1") {
        color.FadeToBlack.startScreenEffect(750)
        timer.after(1500, function () {
            blockMenu.closeMenu()
            blockMenu.setControlsEnabled(false)
            textSprite.destroy()
            mySprite = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 3 3 3 3 3 3 . . . . . 
                . . . . . 3 3 3 3 3 3 . . . . . 
                . . . . . 3 3 3 3 3 3 . . . . . 
                . . . . . 3 3 3 3 3 3 . . . . . 
                . . . . . 3 3 3 3 3 3 . . . . . 
                . . . . . 3 3 3 3 3 3 . . . . . 
                . . . . . 3 3 3 3 3 3 . . . . . 
                . . . . . 3 3 3 3 3 3 . . . . . 
                . . . . . 3 3 3 3 3 3 . . . . . 
                . . . . . 3 3 3 3 3 3 . . . . . 
                . . . . . 3 3 3 3 3 3 . . . . . 
                . . . . . 3 3 3 3 3 3 . . . . . 
                `, SpriteKind.Player)
            mySprite.ay = 200
            scene.cameraFollowSprite(mySprite)
            controller.moveSprite(mySprite, 150, 0)
            tiles.setTilemap(tilemap`level1`)
            Types_of_Shards = [0, 1]
            for (let index2 = 0; index2 < 8; index2++) {
                timeSharde = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f . . . . . . . . 
                    . . . . . f 4 4 f f . . . . . . 
                    . . . . f 4 4 4 6 f . . . . . . 
                    . . . . f 4 5 6 6 f . . . . . . 
                    . . . . f 5 5 6 6 f . . . . . . 
                    . . . . f f 5 6 6 f . . . . . . 
                    . . . . . f 5 5 6 f f . . . . . 
                    . . . . . f f 5 6 6 f . . . . . 
                    . . . . . . f 5 5 f f . . . . . 
                    . . . . . . f f 5 f . . . . . . 
                    . . . . . . . f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Shard)
            }
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
            LeversPushed = 0
            Levers = 12
            Map = 1
            color.clearFadeEffect()
            gameStarted = true
        })
    }
})
sprites.onOverlap(SpriteKind.Shard, SpriteKind.Shard, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(sprite, assets.tile`myTile13`)
})
let Map = 0
let Levers = 0
let timeSharde: Sprite = null
let Types_of_Shards: number[] = []
let LeversPushed = 0
let mySprite: Sprite = null
let textSprite: TextSprite = null
let gameStarted = false
gameStarted = false
Set_Colors()
blockMenu.showMenu(["Play"], MenuStyle.List, MenuLocation.BottomHalf)
blockMenu.setColors(3, 4)
scene.setBackgroundColor(5)
textSprite = textsprite.create("Puzzles N' Platforms", 0, 3)
textSprite.setPosition(70, 19)
game.onUpdate(function () {
    if (gameStarted) {
        if (Map == 1) {
            if (LeversPushed == Levers) {
                tiles.setWallAt(tiles.getTileLocation(23, 1), false)
                tiles.setTileAt(tiles.getTileLocation(23, 1), assets.tile`myTile4`)
            }
        }
    }
})
