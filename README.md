# CSS452 Final Project - API Documentation
Davion_Barack_FinalProject_DialogueSystem

# Team Information
Authors: Barack, Davion
Date: March 14th, 2023

# Project Purpose
Our API library is designed to support game developers to design their dialogue games conveniently and fast. They basically needn’t make any modifications to the MyGame template which we provide. 

We support the automatic drawing of the dialogue system. We also enable game developers to provide different options for the game players. When players choose different options, the story can flow in different directions, hero attributes can be changed, or some special effect will happen.

All the work for the game developers is only to provide the picture resources in a JSON file. In this way, we humongously decrease the hardness to design a dialogue system. And the game developers can put most of their energy into writing the story, which is the core of this type of game.

# Dialogue Class API
**constructor(largeBg, avatar, textBg, nameText, dialogueText)**<br>
Parse all required dialogue information from a JSON file.

**dialogue.init()**<br>
Init a dialogue system with avatar, character name, character dialogue.

**dialogue.update()**<br>
Update the dialogue system when the player makes certain decisions from the given options.

**dialogue.draw()**<br>
Draw the whole dialogue system.

**drawOption(optTex1, optTex2, optTex3)**<br>
Draw the options.

**setLargeBg(larBg)**<br>
Set the background for the whole dialogue system.

**setAvatar(ava)**<br>
Set the avatar when a character shows up.

**setTextBg(texBg)**<br>
Set the dialogue style for the dialogue content.

**setNameBg(namBg)**<br>
Set the dialogue style for the character name.

**setNameText(namTex)**<br>
Set the text content for the character name.

**setDialogueText(diaTex1, diaTex2, diaTex3)**<br>
Set the dialogue content.

**setCurrentNumber(curNum)**<br>
Set the current dialogue number.

**setHaveOption(havOpt)**<br>
Set the flag whether this dialogue has options or not.

**setPlayerAttribute(hea, qi, att, def)**<br>
Set the content for the player attribute.

**setOption1(optTex, optNexNum, HeaTex, addHea, QiTex, addQi, AttTex, addAtt, DefTex, addDef, effMod)**<br>
Set the content for the first option.

**setOption2(optTex, optNexNum, HeaTex, addHea, QiTex, addQi, AttTex, addAtt, DefTex, addDef, effMod)**<br>
Set the content for the second option.

**setOption3(optTex, optNexNum, HeaTex, addHea, QiTex, addQi, AttTex, addAtt, DefTex, addDef, effMod)**<br>
Set the content for the third option.

**oscillatePlayer()**<br>
Trigger for the special effect.

**stopOscillatePlayer()**<br>
Stop the special effect trigger.
