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

    //Update for Class Dialog
    //this.mDialog.update();

        //Button is clicked
        const button1 = document.getElementById('button1');
        if(button1 != null){
        button1.addEventListener('click', function(){
            window.mIsOptionClicked = true;

            if(button1.parentNode){    
                button1.parentNode.removeChild(button1);
        }
        });
    }


    //When button is clicked
    if(window.mIsOptionClicked){
        this.mDialogueSet[this.mCounter].mVisible = false;
        this.mCounter = 6;
        this.mDialogueSet[this.mCounter].mVisible = true;
        
        window.mIsOptionClicked = false;

        //setTimeout(function(){}, 1000);
    }

    console.log("window.mIsOptionClicked = " + window.mIsOptionClicked);
   

    //Button is not clicked and mouse is clicked
    if(engine.input.isButtonClicked(engine.input.eMouseButton.eLeft) && (!window.mIsOptionClicked)){

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