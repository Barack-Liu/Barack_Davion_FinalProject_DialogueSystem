/*
 * File: my_game_init.js 
 * This is the logic of our game. 
 */

"use strict";  // Operate in Strict mode such that variables must be declared before used!

import engine from "../engine/index.js";

import PatrolSet from "./objects/patrol/patrol_set.js";
import ZoomCamSystem from "./objects/zoom_cam/zoom_cam_system.js";
import Hero from "./objects/hero_update.js";

class MyGame extends engine.Scene {
    constructor() {
        super();
        this.kMinionSprite = "assets/minion_sprite.png";
        this.kBg = "assets/bg.png";

        // The camera to view the scene
        this.mCamera = null;

        this.mMsg = null;

        this.mBg = null;
        this.mHero = null;
        this.mPatrols = null;
        this.mZoomCams = null;
    }


    load() {
        engine.texture.load(this.kMinionSprite);
        engine.texture.load(this.kBg);
    }

    unload() {
        engine.texture.unload(this.kMinionSprite);
        engine.texture.unload(this.kBg);
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

        // sets the background to gray
        this.mZoomCams = new ZoomCamSystem(this);

        // the message
        this.mMsg = new engine.FontRenderable("Status Message");
        this.mMsg.setColor([1, 1, 1, 1]);
        this.mMsg.getXform().setPosition(2, 3);
        this.mMsg.setTextHeight(3);

        // the background
        // Large background image
        let bgR = new engine.TextureRenderable(this.kBg);
        
        //Background size in camera space is 100*100
        bgR.getXform().setSize(100, 100);
        //Background center in camera space is (50, 50)
        bgR.getXform().setPosition(50, 50);

        this.mBg = new engine.GameObject(bgR);

        this.mHero = new Hero(this.kMinionSprite, this.mZoomCams);
        this.mPatrols = new PatrolSet(this.kMinionSprite);
        this.mPatrols.newPatrol();
    }
}

export default MyGame;