
# CSS452 Final Project - API Documentation

This API library is designed for the CSS 452 Final Project.

## Project Information

**Project name**<br> 
API Library for Dialogue Adventure System 

**Authors**<br> 
Barack, Davion

**Advisor**<br> 
Professor Kelvin

**Date**<br> 
March 14th, 2023

## Project Purpose

- Our API library is designed to support game developers to design their dialogue games conveniently and fast. They basically needn’t make any modifications to the MyGame template which we provide. 

- We support the automatic drawing of the dialogue system. We also enable game developers to provide different options for the game players. When players choose different options, the story can flow in different directions, hero attributes can be changed, or some special effect will happen.

- All the work for the game developers is only to provide the picture resources in a JSON file. In this way, we humongously decrease the hardness to design a dialogue system. And the game developers can put most of their energy into writing the story, which is the core of this type of game.

## JSON Format - Version_1.0

**LargeBg**<br>
*File path*. Define the file path for the background picture.

**Avatar**<br>
*File Path*. Define the file path for the avatar picture.

**TextBg**<br>
*File Path*. Define the file path for the text background.

**NameBg**<br>
*File Path*. Define the file path for the name background.

**NameText**<br>
*String*. Define the content for the avatar name.

**DialogueText**<br>
*Three-String array*. Define the text content for the dialogue.

**CurrentNumber**<br>
*Int*. Define the current Number for the dialogue.

**PlayAttribute**<br>
*Four-String array*. Define the name for the attributes of the hero.

**HaveOption**<br>
*Bool*. Define whether this dialogue provide options or not.

**Option1**<br>
*Eleven-Element array*. Define the information for the first option.<br>
Parameter[0]. *String*. Define the text content for the first option.<br>
Parameter[1]. *Int*. Define the serial number of the next dialouge.<br>
Parameter[2]. *String*. Define the name for the first hero attribute.<br>
Parameter[3]. *Int*. Define the value added for the first hero attribute.<br>
Parameter[4]. *String*. Define the name for the second hero attribute.<br>
Parameter[5]. *Int*. Define the value added for the second hero attribute.<br>
Parameter[6]. *String*. Define the name for the third hero attribute.<br>
Parameter[7]. *Int*. Define the value added for the third hero attribute.<br>
Parameter[8]. *String*. Define the name for the forth hero attribute.<br>
Parameter[9]. *Int*. Define the value added for the forth hero attribute.<br>
Parameter[10]. *Bool*. Define whether a special effect will be triggered or not.

**Option2**<br>
*Eleven-Element array*. Define the information for the second option.<br>
Parameter[0]. *String*. Define the text content for the second option.<br>
Parameter[1]. *Int*. Define the serial number of the next dialouge.<br>
Parameter[2]. *String*. Define the name for the first hero attribute.<br>
Parameter[3]. *Int*. Define the value added for the first hero attribute.<br>
Parameter[4]. *String*. Define the name for the second hero attribute.<br>
Parameter[5]. *Int*. Define the value added for the second hero attribute.<br>
Parameter[6]. *String*. Define the name for the third hero attribute.<br>
Parameter[7]. *Int*. Define the value added for the third hero attribute.<br>
Parameter[8]. *String*. Define the name for the forth hero attribute.<br>
Parameter[9]. *Int*. Define the value added for the forth hero attribute.<br>
Parameter[10]. *Bool*. Define whether a special effect will be triggered or not.

**Option3**<br>
*Eleven-Element array*. Define the information for the third option.<br>
Parameter[0]. *String*. Define the text content for the third option.<br>
Parameter[1]. *Int*. Define the serial number of the next dialouge.<br>
Parameter[2]. *String*. Define the name for the first hero attribute.<br>
Parameter[3]. *Int*. Define the value added for the first hero attribute.<br>
Parameter[4]. *String*. Define the name for the second hero attribute.<br>
Parameter[5]. *Int*. Define the value added for the second hero attribute.<br>
Parameter[6]. *String*. Define the name for the third hero attribute.<br>
Parameter[7]. *Int*. Define the value added for the third hero attribute.<br>
Parameter[8]. *String*. Define the name for the forth hero attribute.<br>
Parameter[9]. *Int*. Define the value added for the forth hero attribute.<br>
Parameter[10]. *Bool*. Define whether a special effect will be triggered or not.

**Sample Code**<br>
```json
        {
            "LargeBg": "assets/bg_1.png",
            "Avatar": "assets/avatar_1.png",
            "TextBg": "assets/dialogueFrame_1.png",
            "NameBg": "assets/dialogueFrame_1.png",
            "NameText": "You",
            "DialogueText": ["What would you say to Kid?", "", ""],
            "CurrentNumber": 6,
            "PlayerAttribute": ["Health", "Qi", "Attack", "Defend"],
            "HaveOption": true,
            "Option1": ["Yes, I know, I will study hard under Professor Didi's advisory.", 9, "Health", 0, "Qi", 0, "Attack", 0, "Defend", 0, 0],
            "Option2": ["Please continue.", 8, "Health", 0, "Qi", 0, "Attack", 0, "Defend", 0, 0],
            "Option3": ["Shut up!", 7, "Health", 0, "Qi", 0, "Attack", 0, "Defend", 0, 0]
        }
```

## Dialogue Class API - Version_1.0

**constructor(largeBg, avatar, textBg, nameText, dialogueText)**<br>
largeBg is file path.<br>
avatar is file path.<br>
textBg is file path.<br>
nameText is string.<br>
dialogueText is string.<br>
Define the attributes of the class.

**init()**<br>
Init a dialogue system with avatar, character name, character dialogue.

**getXform()**<br>
Return the position of this renderable.

**setVisivility(f)**<br>
f is bool.<br>
Set the visivility of this dialogue.

**getRenderable()**<br>
Retrun this renderable.

**update()**<br>
Update the dialogue system when the player makes certain decisions from the given options.

**draw(cam)**<br>
cam is Camera Class.<br>
Draw the whole dialogue system.

**drawOption(optTex1, optTex2, optTex3)**<br>
optTex1 is String.<br>
optTex2 is String.<br>
optTex3 is String.<br>
Draw the options.

**setLargeBg(larBg)**<br>
larBg is file path.<br>
Set the background for the whole dialogue system.

**setAvatar(ava)**<br>
ava is file path.<br>
Set the avatar when a character shows up.

**setTextBg(texBg)**<br>
texBg is file path.<br>
Set the dialogue style for the dialogue content.

**setNameBg(namBg)**<br>
namBg is file path.<br>
Set the dialogue style for the character name.

**setNameText(namTex)**<br>
namTex is String.<br>
Set the text content for the character name.

**setDialogueText(diaTex1, diaTex2, diaTex3)**<br>
diaTex1 is String.<br>
diaTex2 is String.<br>
diaTex3 is String.<br>
Set the dialogue content.

**setCurrentNumber(curNum)**<br>
curNum is int.<br>
Set the current dialogue number.

**setHaveOption(havOpt)**<br>
havOpt is bool.<br>
Set the flag whether this dialogue has options or not.

**setPlayerAttribute(hea, qi, att, def)**<br>
hea is string.<br>
qi is string.<br>
att is string.<br>
def is string.<br>
Set the content for the player attribute.

**setOption1(optTex, optNexNum, HeaTex, addHea, QiTex, addQi, AttTex, addAtt, DefTex, addDef, effMod)**<br>
optTex is string.<br>
optNexNum is int.<br>
HeaTex is string.<br>
addHea is int.<br>
QiTex is string.<br>
addQi is int.<br>
AttTex is string.<br>
addAtt is int.<br>
DefTex is string.<br>
addDef is int.<br>
effMod is int.<br>
Set the content for the first option.

**setOption2(optTex, optNexNum, HeaTex, addHea, QiTex, addQi, AttTex, addAtt, DefTex, addDef, effMod)**<br>
optTex is string.<br>
optNexNum is int.<br>
HeaTex is string.<br>
addHea is int.<br>
QiTex is string.<br>
addQi is int.<br>
AttTex is string.<br>
addAtt is int.<br>
DefTex is string.<br>
addDef is int.<br>
effMod is int.<br>
Set the content for the second option.

**setOption3(optTex, optNexNum, HeaTex, addHea, QiTex, addQi, AttTex, addAtt, DefTex, addDef, effMod)**<br>
optTex is string.<br>
optNexNum is int.<br>
HeaTex is string.<br>
addHea is int.<br>
QiTex is string.<br>
addQi is int.<br>
AttTex is string.<br>
addAtt is int.<br>
DefTex is string.<br>
addDef is int.<br>
effMod is int.<br>
Set the content for the third option.

**oscillatePlayer()**<br>
Trigger for the special effect.

**stopOscillatePlayer()**<br>
Stop the special effect trigger.

## Dialogue Advanture System - Version 2.0

### Library Update Notes

Version 2.0 improved many features basing on the version 1.0. The major improvement is that it increases the flexiblitiy of the API.
> 1. Users can generate as many properties as they like instead of fiexed four properties.
> 2. Users can generate as many options as they like instead of fixed three options.
> 3. Users can hihglight words in the text with any colors using a six-digit hex number.
> 4. Users can adjust the speed of playing for the text.
> 5. We add a paragraph renderable to implement the features in 3 and 4. 
> 6. Users can easily add functions to modify some attributes in the engine and link with options. So players can execute the function by clicking options.
> 7. We made the project more organized for users.

## Dialog Class

**constructor()**<br>
Create the class and set all fields to null
```javascript
constructor() {
    this.mDialogCam = null;
    this.mCamBg = null;
    this.mNameCam = null;
    this.mNameBg = null;
    this.mNameRenderable = null;
    this.mAvatar = null;
    this.mTextRenderable = null;
    this.mNextDialog = null;
    this.mHasEndTag = false;
}
```

**init(dc)**<br>
Create a Dialog camera for displying dialogs.

**draw(cam)**<br>
Draw the whole dialog class and all components inside the class, including avatar texture, dialog frame, name tag, and dialog texts.

**update(myGame)**<br>
Update game state when options and forwarding are trigged. Execute options' corresponding functions.

**setAvatar(avatar)**<br>
Set texture for dialog character.

**setName(name)**<br>
Set name for dialog speaker.

**setNameTexture(tex)**<br>
Set name camera background texture.

**resizeNameTexture()**<br>
Resize name camera background texture to fix its new size after changing it.

**setBackgroundTexture(bgTex)**<br>
Set background texture.

**setEndTag(b)**<br>
Set a end tag to a certain dialog to define the end of game. It stops the game going to the next dialog.

**setParagraph(p)**<br>
Set dialog text to a paragraph renderable.

**setWidth(w)**<br>
Set width for dialog frame camera.

**setViewport(vp)**<br>
Set viweport for dialog frame camera.

**setCenter(center)**<br>
Set center for dialog frame camera.

**getCam()**<br>
Return dialog frame camera.

**getParagraph()**<br>
Return paragraph renerable.

**getBg()**<br>
Return background texture renderable.

**getAvatar()**<br>
Return avatar texture renderable.

## Option Class

**constructor()**<br>
``` javascript
constructor() {
    this.mTag = null;
    this.mOptionCam = null;
    this.mTextRenderable = null;
    this.mCamBg = null;
    this.mFuncName = [];
    this.mArguments = [];
    this.mAllowedClicked = null;
    this.mOptionGroup = null;
}

```
**init(center, width, vp)**<br>
Initialize option cameras.

**setExecute(ex)**<br>
Set execute command to array.

**draw()**<br>
Draw options.

**update(myGame)**<br>
Update and call execute() function to execute command when options are clicked.

**execute(myGame)**<br>
Execute all functions for the clicked option.

**setCurDialog(myGame, arg)**<br>
Jump to another dialog by seting current dialog pointer.

**modifyPropertyByName(myGame, arg)**<br>
Modify values for property by passing its name and changing value.

**modifyPropertyByIndex(myGame, index, value)**<br>
Modify values for property by passing its index and changing value.

**setPropertyByName(myGame, name, value)**<br>
Set values for property by passing its name and value.

**setPropertyByIndex(myGame, index, value)**<br>
Set values for property by passing its index and  value.

**setOptionGroup(gp)**<br>
Set option group.

**setClickRemaining(x)**<br>
Set allowing clicking times.

**setBackgroundTexture(bgTex)**<br>
Set option background texture.

**setParagraph(p)**<br>
Set option text.

**getCam()**<br>
Return option camera.

**getTag()**<br>
Return option text string.

## JSON File Format

**Game**<br>
Game title, not necessary.

**Property**<br>
Array that contains all properies

**SceneSet**<br>
Array that contains all dialogs

**DialogIndex**<br>
Index of dialog.

**DialogCam**<br>
Parameters for dialog camera

**DialogTexture**<br>
Path of dialog frame texture.

**AvatarTexture**<br>
Path of avatar texture.

**NameString**<br>
Name string.

**DialogText**<br>
Dialog text content.

**Option**<br>
A couple options contents. If no options needed, do not set this field.

**Content**<br>
Array that contains all options.

**Tag**<br>
Display text for the option.

**Execute**<br>
Functions that trigged by the option.

**Position**<br>
First option's camera position.

**Layout**<br>
Layout for options to render.

**Spacing**<br>
Space between two options renderable.

**Relationship**<br>
Relationship of the option group. "Together" means users can only choose one option among all options. "Separate" means each option is independent.

**Example**
```json
{
    "Game": "CSS 452 Demo1",
    "Property": [
        {
            "Attribute": "Correct",
            "Value": 0
        },
        {
            "Attribute": "Wrong",
            "Value": 0
        }
    ],
    "SceneSet": [
        {
            "DialogIndex": 0,
            "Dialog": {
                "DialogCam": {
                    "Center": [50, 20],
                    "Width": 100,
                    "Viewport": [120, 20, 1500, 300]
                },
                "DialogTexture": "assets/texture1.png",
                "AvatarTexture": "assets/texture2.png",
                "NameString": "You",
                "DialogText": "Text"
            }
        },
        {   
            "DialogIndex": 1,
            "Dialog": {
                "DialogCam": {
                    "Center": [50, 20],
                    "Width": 100,
                    "Viewport": [120, 20, 1500, 300]
                },
                "DialogTexture": "assets/texture1.png",
                "AvatarTexture": "assets/texture2.png",
                "NameString": "Mr. Question",
                "DialogText": "Text"
            },
            "Option": {
                "Content": [
                    {
                        "Tag": "<#ffffff#>Yes",
                        "Execute": [["setCurDialog", [5]],["modifyPropertyByName", ["Correct", 1]]]
                    }
                ],
                "Position": [[0, 0], 20, [100, 800, 350, 100]],
                "Layout": "Vertical",
                "Spacing": 120,
                "Relationship": "Together"
            }
        }
    ]
}

```

## Summary

- This API library is designed to support the dialgoues system. It enables the game developer to draw dialogue boxes, characters, and dialogue content quickly. Moreover, it provides drawing options for options. When game players click different options, the game can flow in different directions, the hero attributes can be changed, or some special effect will happen. <br>

- This API makes the development of a dialogue adventure game very simple. The game developer almost needs to write very little code. They can focus on finding the picture resources and writing the JSON file, which is the core of their games. <br>

- In addition, this API library can also integrate with other API libraries well, like the Particle System API library, Weather System API library, and other systems. The game developers can simple import our library and call the functions to draw the dialogues and options directly. Both version 1.0 and version 2.0 can be called in the above two ways.<br>

## Final Demo Video

https://youtu.be/FE4Pmw322g0