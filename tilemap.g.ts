// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1900190005060101010101010101010101010101010101010101010101020705060101010101010101010101010101010102020a03040101020801010101010101010101010101010101020208010101010208010101010101010101010102020202010101080201010101080202020202020202020202020202020201010706010101020705050505050505050505050505050602010101080101010101010101010101010101010102020208020101020801010101010101010101010101010101010102080101010a09010101010101010101010101010101010101010801010108010101010101010101010101010101010101010a09010101070601010101010101010101010101010101010108010101010208010101010202020201010101010101010101080201010102080101010102020202010101010101010101010802010101010801010101010a05060201010202010101010108010101010208010101010208010802020a0505060202020208020101010a09010101010a0901070505090101070505050509020101010801010101010801010101010101010101010101010201010107060101010108020101010101010101010101010202010101010801010101070601010101010101010101010101010101010a09010101010108010101010101010101010101010101010208010101010102070602020a0506020202020202020101010208010101010102010705050901070505050505050505050505090101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
..22222222222222222222222
....2222222222222222...2.
22..2222222222222222...22
22..22222222222....222..2
222.................22..2
22..................222.2
222222222222222.....22..2
22222222222222222..222..2
222222222222222222.222.22
22222222222222222..222..2
22222222222222222.2222..2
222....2222222222..222..2
222....2222222222..2222.2
2222....22..22222.2222..2
222..2.............222..2
222..2....22.......222.22
222.22222222222222.222..2
222..222222222222..2222.2
222..22222222222222222..2
2222.2222222222222222..22
222...............222..22
222.2....2.............22
2222222222222222222222222
2222222222222222222222222
2222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile9":
            case "tile11":return tile11;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
