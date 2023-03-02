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
    //let mdt = "Hi, Warrior";
    //let echo;

    // main character updates
    // this.mPatrols.update(this.mCamera, this.mHero);
    // this.mHero.update(this.mCamera);
    
    //this.mZoomCams.update();

    // echo = "DyePacks(" + this.mHero.numDyePacks() + ")";
    // echo += " Patrols(" + this.mPatrols.size() + ")";
    // echo += " AutoSpawn(" + this.mPatrols.getAutoSpawnMode() + ")";
    //echo = "Hi, Warrior";
    //this.mDialogueText.setText(mdt);

    //Test left mouse botton click
    if(engine.input.isButtonClicked(engine.input.eMouseButton.eLeft)){
        if(this.mCounter < 3){
            this.mDialogueSet[this.mCounter].mVisible = true;
            this.mCounter += 1;
        }
        
        //console.log("mCounter = ", this.mCounter);
    }
}

export default MyGame;