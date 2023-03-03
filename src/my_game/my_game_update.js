/*
 * File: my_game_update.js 
 * This is the logic of our game. 
 */

"use strict";  // Operate in Strict mode such that variables must be declared before used!

import engine from "../engine/index.js";
import MyGame from "./my_game_draw.js";

// The Update function, updates the application state. Make sure to _NOT_ draw
// anything from this function!
MyGame.prototype.update = function () {
    //Left mouse botton click
    if(engine.input.isButtonClicked(engine.input.eMouseButton.eLeft)){
        if(this.mCounter < this.mDialogueSet.length){
            this.mDialogueSet[this.mCounter].mVisible = true;
            if(this.mCounter - 1 >= 0){
                this.mDialogueSet[this.mCounter - 1].mVisible = false;
            }

            this.mCounter += 1;
        }
    }
}

export default MyGame;