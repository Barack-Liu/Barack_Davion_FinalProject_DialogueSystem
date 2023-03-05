"use strict";

import FontRenderable from "./font_renderable.js";

class ParagraphRenderable {
    constructor(aString) {
        this.mTokens = aString.split(" ");
        this.mWordRenderable = [];
        this.mParagrahLengthLimit = null;
        this.mSpaceWidth = null;
        this.mStartX = null;
        this.mStartY = null;
        this.mHeight = null;
        this.hasColored = [];
    }

    init() {
        for (let i = 0; i < this.mTokens.length; i++) {
            let rend;
            let str = this.mTokens[i];
            console.log(str);
            // console.log(/^</i.test(str) && />$/i.test(str));
            // console.log(str.substring(9, str.length-1));
            // if a token contains <>
            if (/^</i.test(str) && />$/i.test(str)) {
                rend = new FontRenderable(str.substring(9, str.length-1));
                let r = parseInt(str.substring(2, 4), 16) / 255;
                let g = parseInt(str.substring(4, 6), 16) / 255;
                let b = parseInt(str.substring(6, 8), 16) / 255;
                console.log(r, g, b);
                rend.setColor([r, g, b, 1])
                this.hasColored.push(i);
            }
            else
                rend = new FontRenderable(str);
            this.mWordRenderable.push(rend);
        }
    }

    draw(camera) {
        for (let i = 0; i < this.mWordRenderable.length; i++) {
            this.mWordRenderable[i].draw(camera);
        }
    }



    setSpeed() {

    }

    setLengthLimit(l) { 
        this.mParagrahLengthLimit = l; 
        this.arrangeText();
    }

    setPosition(x, y) {
        this.mStartX = x;
        this.mStartY = y;
        this.arrangeText();
    }

    arrangeText() {
        let curX = this.mStartX;
        let curY = this.mStartY;
        let curLen = 0;
        let row = 1;
        if (this.mParagrahLengthLimit === null) {
            for (let i = 0; i < this.mWordRenderable.length; i++) {
                this.mWordRenderable[i].getXform().setPosition(curX, curY);
                curX += (this.mWordRenderable[i].getStringWidth() + this.mSpaceWidth);
            }
        }
        else {
            for (let i = 0; i < this.mWordRenderable.length; i++) {
                this.mWordRenderable[i].getXform().setPosition(curX, curY);
                // console.log(this.mWordRenderable[i].getStringWidth(), curLen, this.mParagrahLengthLimit);
                if (this.mWordRenderable[i].getStringWidth() + curLen > this.mParagrahLengthLimit) {
                    curX = this.mStartX;
                    curY = this.mStartY - row * this.mHeight;
                    row++;
                    curLen = 0;
                }
                else {
                    curX += (this.mWordRenderable[i].getStringWidth() + this.mSpaceWidth);
                    curLen += (this.mWordRenderable[i].getStringWidth() + this.mSpaceWidth);
                }
            }
        }
    }

    setColor(c) {
        for (let i = 0; i < this.mWordRenderable.length; i++) {
            if (!this.hasColored.includes(i))
                this.mWordRenderable[i].setColor(c);
        }
    }

    setHeight(h) {
        this.mHeight = h;
        for (let i = 0; i < this.mWordRenderable.length; i++) {
            this.mWordRenderable[i].setTextHeight(h);
        }
        if (this.mSpaceWidth === null) 
            this.mSpaceWidth = h/2;
    };

    setSpaceWidth(sw) { this.mSpaceWidth = sw; }
}

export default ParagraphRenderable;