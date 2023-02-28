/*
 * File: my_game_update.js 
 * This is the logic of our game. 
 */

"use strict";  // Operate in Strict mode such that variables must be declared before used!

import MyGame from "./my_game_draw.js";

// The Update function, updates the application state. Make sure to _NOT_ draw
// anything from this function!
MyGame.prototype.update = function () {
    let msg = "Status: ";
    let echo;

    // main character updates
    this.mPatrols.update(this.mCamera, this.mHero);
    this.mHero.update(this.mCamera);
    
    this.mZoomCams.update();

  
    echo = "DyePacks(" + this.mHero.numDyePacks() + ")";
    echo += " Patrols(" + this.mPatrols.size() + ")";
    echo += " AutoSpawn(" + this.mPatrols.getAutoSpawnMode() + ")";
    this.mMsg.setText(msg + echo);
}

export default MyGame;