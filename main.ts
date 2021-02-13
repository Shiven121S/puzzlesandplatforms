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
            color.clearFadeEffect()
        })
    }
})
Set_Colors()
blockMenu.showMenu(["Play"], MenuStyle.List, MenuLocation.BottomHalf)
blockMenu.setColors(2, 4)
scene.setBackgroundColor(5)
let textSprite = textsprite.create("Puzzles N' Platforms", 0, 2)
textSprite.setPosition(70, 19)
