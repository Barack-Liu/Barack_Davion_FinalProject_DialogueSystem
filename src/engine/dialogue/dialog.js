import engine from "../index.js";

class Dialog {
    constructor() {
        this.mDialogCam = null;
        this.mCamBg = null;
        this.mNameCam = null;
        this.mNameRenderable = null;
        this.mAvatar = null;
        this.mTextRenderable = null;
    }

    init(center, width, btlCorner, rw, rh) {
        this.mDialogCam = new engine.Camera( 
            vec2.fromValues(center[0], center[1]),
            width,                       
            // width of camera is w,
            [btlCorner[0], btlCorner[1], rw, rh]           
            // bottom left coner at btlCorner
            //viewport resolution is (rx, ry)
        );
        this.mDialogCam.setBackgroundColor([1, 1, 0, 1]);


        // Avatar
    }

    draw(cam) {
        // cam.setViewAndCameraMatrix();
        this.mAvatar.draw(cam);

        this.mDialogCam.setViewAndCameraMatrix();
        this.mCamBg.draw(this.mDialogCam);
        this.mTextRenderable.draw(this.mDialogCam);

        this.mNameCam.setViewAndCameraMatrix();
        this.mNameRenderable.draw(this.mNameCam);
    }

    update() {
        this.mTextRenderable.update();
    }

    setAvatar(avatar) {
        this.mAvatar = new engine.TextureRenderable(avatar);
        this.mAvatar.getXform().setSize(40, 60);
        this.mAvatar.getXform().setPosition(89, 67);
    }

    setName(name, gap = 0) {
        // A font renderable for displaying avatar name
        this.mNameRenderable = new engine.FontRenderable(name);
        this.mNameRenderable.setTextHeight(2);
        this.mNameRenderable.setColor([1, 1, 1, 1]);
        this.mNameRenderable.getXform().setPosition(0, 0);
        let w = this.mNameRenderable.getStringWidth();
        
        let vp = this.mDialogCam.getViewport();
        let ratio = 1;
        let btltX = vp[0], btltY = vp[1] + vp[3] + gap;
        console.log(w);
        this.mNameCam = new engine.Camera( 
            vec2.fromValues(0, 0),
            w+4,                       
            [500, 900, 100, 2*ratio]           
        );
        this.mNameCam.setBackgroundColor[0, 0, 0, 1];
        
        
    }

    setBackgroundTexture(bgTex) {
        this.mCamBg = new engine.TextureRenderable(bgTex); 
        this.mCamBg.getXform().setPosition(this.mDialogCam.getWCCenter()[0], this.mDialogCam.getWCCenter()[1]);
        this.mCamBg.getXform().setSize(this.mDialogCam.getWCWidth(), this.mDialogCam.getWCHeight());
    }
    
    setParagraph(p) {
        this.mTextRenderable = new engine.ParagraphRenderable(p);
        this.mTextRenderable.init();
        this.mTextRenderable.setColor([1, 1, 1, 1]);
        this.mTextRenderable.setTextHeight(2);
        this.mTextRenderable.setPosition(2, 28);
        this.mTextRenderable.setLengthLimit(92);
        this.mTextRenderable.setPlayInterval(30);
    }
    // Set camera attribute
    setWidth(w) { this.mDialogCam.setWCWidth(w); }
    setViewport(vp) { this.mDialogCam.setViewport(vp); }
    setCenter(center) { this.mDialogCam.setWCCenter(center); }

    getCam() { return this.mDialogCam; }
    getParagraph() { return this.mTextRenderable; }
    getBg() { return this.mCamBg; }
    getAvatar() { return this.mAvatar; }

}

export default Dialog;