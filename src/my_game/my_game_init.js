/*
 * File: my_game_init.js 
 * This is the logic of our game. 
 */

"use strict";  // Operate in Strict mode such that variables must be declared before used!

import engine from "../engine/index.js";

class MyGame extends engine.Scene {
    constructor() {
        super();

        //Load resources 1
        this.kBg = "assets/bg_1.png";
        this.kAvatar = "assets/avatar_1.png";
        this.kTextBg = "assets/dialogueFrame_1.png";
        this.kNameBg = "assets/dialogueFrame_1.png";
        this.kNameText = "Kid";
        this.kDialogueText = "Welcome to the world of Qi.";

       //Load resources 2
       this.kBg2 = "assets/bg_2.png";
       this.kAvatar2 = "assets/avatar_2.png";
       this.kTextBg2 = "assets/dialogueFrame_2.png";
       this.kNameBg2 = "assets/dialogueFrame_2.png";
       this.kNameText2 = "Didi";
       this.kDialogueText2 = "I have waited for 100 years.";      
       
       //Load resources 3
       this.kBg3 = "assets/bg_3.png";
       this.kAvatar3 = "assets/avatar_3.png";
       this.kTextBg3 = "assets/dialogueFrame_3.png";
       this.kNameBg3 = "assets/dialogueFrame_3.png";
       this.kNameText3 = "Pikachu";
       this.kDialogueText3 = "Do you want to be my master?";          

        this.kJSONSceneFile = "./assets/Chu_Han_Contention.json";

        // Init main camera
        this.mCamera = null;

        //Init dialogue counter
        this.mCounter = 0;

        //Init dialogue system 1
        this.mBg = null;
        this.mAvatar = null;
        this.mTextBg = null;
        this.mNameBg = null;
        this.mDialogueText = null;
        this.mNameText = null;

        this.mDialogue = null;

        //Init dialogue system 2
        this.mBg2 = null;
        this.mAvatar2 = null;
        this.mTextBg2 = null;
        this.mNameBg2 = null;
        this.mDialogueText2 = null;
        this.mNameText2 = null;        
        
        this.mDialogue2 = null;

        //Init dialogue system 3
        this.mBg3 = null;
        this.mAvatar3 = null;
        this.mTextBg3 = null;
        this.mNameBg3 = null;
        this.mDialogueText3 = null;
        this.mNameText3 = null;        
        
        this.mDialogue3 = null;        

        //Init dialogue system set
        this.mDialogueSet = [];
    }


    load() {
        //Load resources 1
        engine.texture.load(this.kBg);
        engine.texture.load(this.kAvatar);
        engine.texture.load(this.kTextBg);

        //Load resources 2
        engine.texture.load(this.kBg2);
        engine.texture.load(this.kAvatar2);
        engine.texture.load(this.kTextBg2);        
        
        //Load resources 3
        engine.texture.load(this.kBg3);
        engine.texture.load(this.kAvatar3);
        engine.texture.load(this.kTextBg3);   

        //Load Json file
        engine.json.load(this.kJSONSceneFile);
    }

    unload() {
        //Unload resources 1
        engine.texture.unload(this.kBg);
        engine.texture.unload(this.kAvatar);
        engine.texture.unload(this.kTextBg);

        //Unload resources 2
        engine.texture.unload(this.kBg2);
        engine.texture.unload(this.kAvatar2);
        engine.texture.unload(this.kTextBg2);

        //Unload resources 3
        engine.texture.unload(this.kBg3);
        engine.texture.unload(this.kAvatar3);
        engine.texture.unload(this.kTextBg3);

        //Unload Json
        engine.json.unload(this.kJSONSceneFile);
    }

    init() {
        // Step A: set up the cameras
        this.mCamera = new engine.Camera(
            vec2.fromValues(50, 50),   
            // center of the camera is (50, 50)
            100,                       
            // width of camera is 100, height is 100
            [0, 0, 1000, 1000]           
            // left lower corner of viewport is (0,0)
            //viewport resolution is (1000, 1000)
        );
        this.mCamera.setBackgroundColor([1, 1, 1, 1]);

        //Large background image
        let bgR = new engine.TextureRenderable(this.kBg); 
        bgR.getXform().setSize(100, 100);
        bgR.getXform().setPosition(50, 50);
        this.mBg = new engine.GameObject(bgR);

        // //Avatar
        // let avatarR = new engine.TextureRenderable(this.kAvatar);
        // avatarR.getXform().setSize(50, 75);
        // avatarR.getXform().setPosition(50, 50);
        // this.mAvatar = new engine.GameObject(avatarR);
        
        // //Text bg
        // let textBgR = new engine.TextureRenderable(this.kTextBg);
        // textBgR.getXform().setSize(90,30);
        // textBgR.getXform().setPosition(50, 20);
        // this.mTextBg = new engine.GameObject(textBgR);

        // //Name bg
        // let nameBgR = new engine.TextureRenderable(this.kNameBg);
        // nameBgR.getXform().setSize(20,6);
        // nameBgR.getXform().setPosition(15, 40);
        // this.mNameBg = new engine.GameObject(nameBgR);

        // //Dialogue text
        // this.mDialogueText = new engine.FontRenderable(this.kDialogueText);
        // this.mDialogueText.setColor([0.3, 0.6, 0.9, 1]);
        // this.mDialogueText.getXform().setPosition(10, 30);
        // this.mDialogueText.setTextHeight(3);

        // //Name text
        // this.mNameText = new engine.FontRenderable(this.kNameText);
        // this.mNameText.setColor([0.3, 0.6, 0.9, 1]);
        // this.mNameText.getXform().setPosition(15,40);
        // this.mNameText.setTextHeight(3);

        //Init Dialogue system 1
        // this.mDialogue = new engine.Dialogue(this.kAvatar, this.kTextBg, this.kNameText, this.kDialogueText);
        // this.mDialogueSet.push(this.mDialogue);

        //Init Dialogue system 2
        // this.mDialogue2 = new engine.Dialogue(this.kAvatar2, this.kTextBg2, this.kNameText2, this.kDialogueText2);
        // this.mDialogueSet.push(this.mDialogue2);

        //Init Dialogue system 3
        // this.mDialogue3 = new engine.Dialogue(this.kAvatar3, this.kTextBg3, this.kNameText3, this.kDialogueText3);
        // this.mDialogueSet.push(this.mDialogue3);

        //Parse Json
        let sceneInfo = engine.json.get(this.kJSONSceneFile);
        this._parseDialogues(sceneInfo);
    
    }

    _parseDialogues(sceneInfo){
        let i;
        let dialogueSet = [];

        for(i = 0; i< sceneInfo.DialogueSet.length; i++){
            dialogueSet[i] = new engine.Dialogue(this.kAvatar, this.kTextBg, this.kNameText, this.kDialogueText);

            dialogueSet[i].setAvatar(sceneInfo.DialogueSet[i].Avatar);
            dialogueSet[i].setTextBg(sceneInfo.DialogueSet[i].TextBg);
            dialogueSet[i].setNameBg(sceneInfo.DialogueSet[i].NameBg);
            dialogueSet[i].setNameText(sceneInfo.DialogueSet[i].NameText);
            dialogueSet[i].setDialogueText(sceneInfo.DialogueSet[i].DialogueText[0], sceneInfo.DialogueSet[i].DialogueText[1], sceneInfo.DialogueSet[i].DialogueText[2]);

            this.mDialogueSet.push(dialogueSet[i]);
        }
    }
}

export default MyGame;