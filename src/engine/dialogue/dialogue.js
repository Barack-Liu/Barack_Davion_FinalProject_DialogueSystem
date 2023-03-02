/*
 * File: dialogue.js
 *
 * Define dialogue system
 * 
 */
"use strict";
import DialogueUI from "./dialogue_ui.js";
import DialogueText from "./dialogue_text.js";
import engine from "../index.js";

class Dialogue {
    constructor(avatar, textBg, nameText, dialogueText) {
        //this.mRenderComponent = renderable;
        this.mVisible = false;

        this.mDialogueUI = null;
        this.mDialogueText = null;

        this.kAvatar = avatar;
        this.kTextBg = textBg;
        this.kNameBg = textBg;
        this.kDialogueText = dialogueText;
        this.kNameText = nameText;

        //Init avatar
        let hAvatar = new engine.TextureRenderable(this.kAvatar);
        hAvatar.getXform().setSize(50, 75);
        hAvatar.getXform().setPosition(50, 50);
        this.mAvatar = new engine.GameObject(hAvatar);
        
        //Init text bg
        let hTextFrame = new engine.TextureRenderable(this.kTextBg);
        hTextFrame.getXform().setSize(90,30);
        hTextFrame.getXform().setPosition(50, 20);
        this.mTextBg = new engine.GameObject(hTextFrame);

        //Init name bg
        let hNameFrame = new engine.TextureRenderable(this.kNameBg);
        hNameFrame.getXform().setSize(20,6);
        hNameFrame.getXform().setPosition(15, 40);
        this.mNameBg = new engine.GameObject(hNameFrame);

        //Name text
        this.mNameText = new engine.FontRenderable(this.kNameText);
        this.mNameText.setColor([0.3, 0.6, 0.9, 1]);
        this.mNameText.getXform().setPosition(15,40);
        this.mNameText.setTextHeight(3);   

        //Dialogue text 1
        this.mDialogueText1 = new engine.FontRenderable(this.kDialogueText);
        this.mDialogueText1.setColor([0.3, 0.6, 0.9, 1]);
        this.mDialogueText1.getXform().setPosition(10, 30);
        this.mDialogueText1.setTextHeight(3);    
        
        //Dialogue text 2
        this.mDialogueText2 = new engine.FontRenderable(this.kDialogueText);
        this.mDialogueText2.setColor([0.3, 0.6, 0.9, 1]);
        this.mDialogueText2.getXform().setPosition(10, 30);
        this.mDialogueText2.setTextHeight(3);   
        
         //Dialogue text 3
         this.mDialogueText3 = new engine.FontRenderable(this.kDialogueText);
         this.mDialogueText3.setColor([0.3, 0.6, 0.9, 1]);
         this.mDialogueText3.getXform().setPosition(10, 30);
         this.mDialogueText3.setTextHeight(3);          
    }

    getXform() { 
        return this.mRenderComponent.getXform(); 
    }

    setVisibility(f) { 
        this.mVisible = f; 
    }

    isVisible() { 
        return this.mVisible; 
    }

    getRenderable() { 
        return this.mRenderComponent; 
    }

    update() {
        // simple default behavior
        let pos = this.getXform().getPosition();
    }

    draw(cam) {
        if (this.isVisible()) {
            this.mAvatar.draw(cam);
            this.mTextBg.draw(cam);
            this.mNameBg.draw(cam);
            this.mNameText.draw(cam);
            this.mDialogueText1.draw(cam);
            this.mDialogueText2.draw(cam);
            this.mDialogueText3.draw(cam);
        }
    }

    setAvatar(ava){
        let hAvatar = new engine.TextureRenderable(ava);
        hAvatar.getXform().setSize(40, 60);
        hAvatar.getXform().setPosition(50, 60);
        this.mAvatar = new engine.GameObject(hAvatar);
    }

    setTextBg(texBg){
        let hTextFrame = new engine.TextureRenderable(texBg);
        hTextFrame.getXform().setSize(90,30);
        hTextFrame.getXform().setPosition(50, 20);
        this.mTextBg = new engine.GameObject(hTextFrame);
    }

    setNameBg(namBg){
        let hNameFrame = new engine.TextureRenderable(namBg);
        hNameFrame.getXform().setSize(20,6);
        hNameFrame.getXform().setPosition(15, 40);
        this.mNameBg = new engine.GameObject(hNameFrame);
    }

    setNameText(namTex){
        this.mNameText = new engine.FontRenderable(namTex);
        this.mNameText.setColor([1, 0, 0, 1]);
        this.mNameText.getXform().setPosition(10,40);
        this.mNameText.setTextHeight(3);   
    }

    setDialogueText(diaTex1, diaTex2, diaTex3){
        this.mDialogueText1 = new engine.FontRenderable(diaTex1);
        this.mDialogueText1.setColor([0.9, 0.9, 0.9, 1]);
        this.mDialogueText1.getXform().setPosition(10, 30);
        this.mDialogueText1.setTextHeight(3);

        this.mDialogueText2 = new engine.FontRenderable(diaTex2);
        this.mDialogueText2.setColor([0.9, 0.9, 0.9, 1]);
        this.mDialogueText2.getXform().setPosition(10, 20);
        this.mDialogueText2.setTextHeight(3);

        this.mDialogueText3 = new engine.FontRenderable(diaTex3);
        this.mDialogueText3.setColor([0.9, 0.9, 0.9, 1]);
        this.mDialogueText3.getXform().setPosition(10, 10);
        this.mDialogueText3.setTextHeight(3);
    }

}

export default Dialogue;