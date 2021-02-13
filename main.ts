function Set_Colors () {
    color.setColor(1, color.rgb(0, 0, 0))
    color.setColor(2, color.rgb(0, 155, 130))
    color.setColor(3, color.rgb(234, 248, 191))
    color.setColor(4, color.rgb(0, 105, 146))
    color.setColor(5, color.rgb(39, 71, 110))
    color.setColor(6, color.rgb(0, 29, 74))
    color.setColor(7, color.rgb(255, 255, 255))
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
            scene.cameraFollowSprite(mySprite)
            controller.moveSprite(mySprite, 150, 150)
            tiles.setTilemap(tilemap`level1`)
            color.clearFadeEffect()
        })
    }
})
let mySprite: Sprite = null
let textSprite: TextSprite = null
Set_Colors()
blockMenu.showMenu(["Play"], MenuStyle.List, MenuLocation.BottomHalf)
blockMenu.setColors(3, 4)
scene.setBackgroundColor(5)
textSprite = textsprite.create("Puzzles N' Platforms", 0, 3)
textSprite.setPosition(70, 19)
