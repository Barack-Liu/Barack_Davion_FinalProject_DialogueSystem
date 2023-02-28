/*
 * File: dialogue_ui.js
 *
 * Define avatar, name frame, dialogue frame
 * 
 */
"use strict";

class DialogueUI {
    constructor(renderable) {
        this.mRenderComponent = renderable;
        this.mVisible = true;
        this.mUIAvatar = texture;
        this.mUILocation = float;
        this.mUISize = float;
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

export default DialogueUI;