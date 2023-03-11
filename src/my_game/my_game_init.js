/*
 * File: my_game_init.js 
 * This is the logic of our game. 
 */

"use strict";  // Operate in Strict mode such that variables must be declared before used!

import engine from "../engine/index.js";

class MyGame extends engine.Scene {
    constructor() {
        super();

        //Load transparency
        this.kTrans = "assets/transparency.png";

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

        this.kJSONSceneFile = "./assets/The_Miraculous_Journey_of_a_Adventurer.json";

        // Init main camera
        this.mCamera = null;

        //Init dialogue counter
        this.mCounter = 0;

        //Init transparency
        this.mTrans = null;

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
    
        this.aDialog = null;
        this.mDialog = null;

        //Check which option is clicked
        window.mIsOptionClicked1 = false;
        window.mIsOptionClicked2 = false;
        window.mIsOptionClicked3 = false;
        window.mIsOtherClicked = false;

        //Define a const parent node according to the first 'title' element
        //const buttonParentNode = document.querySelector('b').parentNode;

        //Define player's attributes
        this.mHealth = 10;
        this.mQi = 1;
        this.mAttack = 1;
        this.mDefend = 1;

        //Player's attribute
        this.kHealth = "Health:";
        this.kQi = "Qi:";
        this.kAttack = "Attack:";
        this.kDefend = "Defend:";  

        this.kHealthValue = 10;
        this.kQiValue = 1;
        this.kAttackValue = 1;
        this.kDefendValue = 1;   

        //Add attribute 1
        this.kHealthAdd1 = 0;
        this.kQiAdd1 = 0;
        this.kAttackAdd1 = 0;
        this.kDefendAdd1 = 0;           

        //Add attribute 2
        this.kHealthAdd2 = 0;
        this.kQiAdd2 = 0;
        this.kAttackAdd2 = 0;
        this.kDefendAdd2 = 0; 
        
        //Add attribute 3
        this.kHealthAdd3 = 0;
        this.kQiAdd3 = 0;
        this.kAttackAdd3 = 0;
        this.kDefendAdd3 = 0;         
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

        //Load transparency
        engine.texture.load(this.kTrans);
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

        //Unload transparency
        engine.json.unload(this.kTrans);
    }

    init() {
        this.mCamera = new engine.Camera(
            vec2.fromValues(89, 50),   
            // center of the camera is (89, 50)
            178,                       
            // width of camera is 178, height is 100
            [0, 0, 1780, 1000]           
            // left lower corner of viewport is (0,0)
            //viewport resolution is (1780, 1000)
        );
        this.mCamera.setBackgroundColor([1, 1, 1, 1]);

        //Large background image
        let bgR = new engine.TextureRenderable(this.kBg); 
        bgR.getXform().setSize(178, 100);
        bgR.getXform().setPosition(89, 50);
        this.mBg = new engine.GameObject(bgR);

        //Health
        this.mHealth = new engine.FontRenderable(this.kHealth);
        this.mHealth.setColor([1, 0, 0, 1]);
        this.mHealth.getXform().setPosition(10,95);
        this.mHealth.setTextHeight(3);     
        this.mHealth.setText("Health:" + this.kHealthValue);

        //Qi
        this.mQi = new engine.FontRenderable(this.kQi);
        this.mQi.setColor([1, 0, 0, 1]);
        this.mQi.getXform().setPosition(10,90);
        this.mQi.setTextHeight(3);   
        this.mQi.setText("Qi:" + this.kQiValue);        

        //Attack
        this.mAttack = new engine.FontRenderable(this.kAttack);
        this.mAttack.setColor([1, 0, 0, 1]);
        this.mAttack.getXform().setPosition(160,95);
        this.mAttack.setTextHeight(3);     
        this.mAttack.setText("Attack:" + this.kAttackValue);

        //Defend
        this.mDefend = new engine.FontRenderable(this.kDefend);
        this.mDefend.setColor([1, 0, 0, 1]);
        this.mDefend.getXform().setPosition(160,90);
        this.mDefend.setTextHeight(3);   
        this.mDefend.setText("Defend:" + this.kDefendValue);         
        
        //Parse Json
        let sceneInfo = engine.json.get(this.kJSONSceneFile);
        this._parseDialogues(sceneInfo);

        //Test oscillating
        // this.mDialogueSet[0].oscillatePlayer();
        // this.mDialogueSet[1].oscillatePlayer();
        // this.mDialogueSet[2].oscillatePlayer();

        //User case of Class Dialog
        // this.mDialog = new engine.Dialog();
        // this.mDialog.init([50, 20], 100, [120, 20], 1500, 300);
        // this.mDialog.setBackgroundTexture(this.kTextBg2);
        // this.mDialog.setAvatar(this.kAvatar3);
        // this.mDialog.setName("Pikachu");
        // this.mDialog.setParagraph("Recently, such <#12bcee#>people have been the focal point of a global <#eec812#>conversation. Facebook, for example, <#ee4412#>recently. made its profit after tax the latest line item to be given public <#2f23ab#>attention. The roll-out of a new ad platform meant that businesses have been given control over which users they can serve with the content they want to display.");

        // //Button 1
        // const button1 = document.createElement('button');
        // button1.textContent = 'Jump to P6';
        // button1.setAttribute('id', 'button1');
        // button1.setAttribute('class', 'my-button');
        // button1.style.fontSize = '30px';
        // button1.style.width = '593px';
        // button1.style.height = '100px';
        // button1.style.position = 'absolute';
        // button1.style.left = '593px';
        // button1.style.top = '200px';
        // document.body.appendChild(button1);    

        // //Button 2
        // const button2 = document.createElement('button');
        // button2.textContent = 'Jump to P12';
        // button2.setAttribute('id', 'button2');
        // button2.setAttribute('class', 'my-button');
        // button2.style.fontSize = '30px';
        // button2.style.width = '593px';
        // button2.style.height = '100px';
        // button2.style.position = 'absolute';
        // button2.style.left = '593px';
        // button2.style.top = '350px';
        // document.body.appendChild(button2);

        // //Button 3
        // const button3 = document.createElement('button');
        // button3.textContent = 'Jump to P18';
        // button3.setAttribute('id', 'button3');
        // button3.setAttribute('class', 'my-button');
        // button3.style.fontSize = '30px';
        // button3.style.width = '593px';
        // button3.style.height = '100px';
        // button3.style.position = 'absolute';
        // button3.style.left = '593px';
        // button3.style.top = '500px';
        // document.body.appendChild(button3);        
    }

    _parseDialogues(sceneInfo){
        let i;
        let dialogueSet = [];

        for(i = 0; i< sceneInfo.DialogueSet.length; i++){
            dialogueSet[i] = new engine.Dialogue(this.kBg, this.kAvatar, this.kTextBg, this.kNameText, this.kDialogueText);

            dialogueSet[i].setLargeBg(sceneInfo.DialogueSet[i].LargeBg);
            dialogueSet[i].setAvatar(sceneInfo.DialogueSet[i].Avatar);
            dialogueSet[i].setTextBg(sceneInfo.DialogueSet[i].TextBg);
            dialogueSet[i].setNameBg(sceneInfo.DialogueSet[i].NameBg);
            dialogueSet[i].setNameText(sceneInfo.DialogueSet[i].NameText);
            dialogueSet[i].setDialogueText(sceneInfo.DialogueSet[i].DialogueText[0], sceneInfo.DialogueSet[i].DialogueText[1], sceneInfo.DialogueSet[i].DialogueText[2]);

            dialogueSet[i].setCurrentNumber(sceneInfo.DialogueSet[i].CurrentNumber);
            dialogueSet[i].setHaveOption(sceneInfo.DialogueSet[i].HaveOption);
            dialogueSet[i].setOption1(sceneInfo.DialogueSet[i].Option1[0], sceneInfo.DialogueSet[i].Option1[1], sceneInfo.DialogueSet[i].Option1[2], sceneInfo.DialogueSet[i].Option1[3], sceneInfo.DialogueSet[i].Option1[4], sceneInfo.DialogueSet[i].Option1[5], sceneInfo.DialogueSet[i].Option1[6]);
            dialogueSet[i].setOption2(sceneInfo.DialogueSet[i].Option2[0], sceneInfo.DialogueSet[i].Option2[1], sceneInfo.DialogueSet[i].Option2[2], sceneInfo.DialogueSet[i].Option2[3], sceneInfo.DialogueSet[i].Option2[4], sceneInfo.DialogueSet[i].Option2[5], sceneInfo.DialogueSet[i].Option2[6]);
            dialogueSet[i].setOption3(sceneInfo.DialogueSet[i].Option3[0], sceneInfo.DialogueSet[i].Option3[1], sceneInfo.DialogueSet[i].Option3[2], sceneInfo.DialogueSet[i].Option3[3], sceneInfo.DialogueSet[i].Option3[4], sceneInfo.DialogueSet[i].Option3[5],  sceneInfo.DialogueSet[i].Option3[6]);

            // dialogueSet[i].setAttribute(sceneInfo.DialogueSet[i].AddAttribute[0], sceneInfo.DialogueSet[i].AddAttribute[1], sceneInfo.DialogueSet[i].Attribute[2], sceneInfo.DialogueSet[i].Attribute[3]);

            //Add the dialogue into the dialogue set
            this.mDialogueSet.push(dialogueSet[i]);

            console.log("dialogueSet" + i + ":" + dialogueSet[i].mEffectMode1);
        }
    }
}

export default MyGame;