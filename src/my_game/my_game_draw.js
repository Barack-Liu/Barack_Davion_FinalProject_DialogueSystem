/*
 * File: my_game_draw.js 
 * This is the logic of our game. 
 */

"use strict";  // Operate in Strict mode such that variables must be declared before used!

import MyGame from "./my_game_init.js";
import engine from "../engine/index.js";

MyGame.prototype.drawWorld = function(cam) {
        cam.setViewAndCameraMatrix();

        this.mBg.draw(cam);

        // this.mAvatar.draw(cam);
        // this.mTextBg.draw(cam);
        // this.mNameBg.draw(cam);
        // this.mDialogueText.draw(cam);
        // this.mNameText.draw(cam);

        //Draw dialogue system 1
        //this.mDialogue.draw(cam);

        //Draw dialogue system 2
        //this.mDialogue2.draw(cam);
        
        //Draw dialogue system 3
        //this.mDialogue3.draw(cam);    
        
        //Draw all available dialogue
        for(let i = 0; i < 3; i++){
            if(this.mDialogueSet[i].mVisible){
                this.mDialogueSet[i].draw(cam); 
            }
        }
        
    }
    //
    // This is the draw function, make sure to setup proper drawing environment, and more
    // importantly, make sure to _NOT_ change any state.
MyGame.prototype.draw = function() {
        // Step A: clear the canvas
        engine.clearCanvas([1, 1, 1, 1]); // clear to light gray
        this.drawWorld(this.mCamera);
        //this.mZoomCams.draw();
    }

export default MyGame;