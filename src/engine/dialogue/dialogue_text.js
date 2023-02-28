/*
 * File: dialogue_text.js
 *
 * Define avatar, name frame, dialogue frame
 * 
 */
"use strict";

class DialogueText {
    constructor(renderable) {
        this.mRenderComponent = renderable;
        this.mVisible = true;
        this.mTextFont = font;
        this.mTextColor = float4;
        this.mTextSize = float;
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

    draw(aCamera) {
        if (this.isVisible()) {
            this.mRenderComponent.draw(aCamera);
        }
    }

}

export default DialogueText;