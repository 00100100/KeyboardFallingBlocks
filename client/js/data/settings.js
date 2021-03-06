"use strict";

/**
 * settings.js
 *
 * holds user defined settings and manages it
 */

var settings = {

    //version of save
    //these are defaults. they are overwritten by cookies.js in main.js
    enableGhost : true,
    rollingCancel : true,
    keyDownDoesHardDrop : false,
    spaceDoesHardDrop : false,
    piecePreviewCount : 7,
    PIECE_PREVIEW_MAX: 7,  //limit of 7 (do not increase)
    pieceGenerator : pieceGeneratorBag,

    incrementPiecePreview : function () {

        if(settings.piecePreviewCount == settings.PIECE_PREVIEW_MAX)
            settings.piecePreviewCount = 1;
        else
            settings.piecePreviewCount++;
    },

    togglePieceGenerator : function(){

        if(settings.pieceGenerator == pieceGeneratorBag){
            settings.pieceGenerator = pieceGeneratorRandom;
        }
        else{
            settings.pieceGenerator = pieceGeneratorBag;
        }

    }

};
