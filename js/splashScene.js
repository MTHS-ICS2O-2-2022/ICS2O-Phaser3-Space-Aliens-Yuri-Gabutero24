/*Global Phaser*/

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: April 2023
// This is the Splash Scene

/**
 * This class is the splash scene.
 */
class SplashScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor () {
    super({key: 'splashScene'})

    this.splashSceneBackgroundImage = null
  }

/**
 * can be defined on your own scenes
 * this method is called by the scene manager when the scene starts,
 *  before preload() and create().
 * @param {object} data - any data passed via ScenePlugin.add() or ScenePlugin.start()
 */
init (data) {
  this.cameras.main.setBackgroundColor("ffffff")
}

/**
 * can be defined on your own scenes
 * use it to load assets
 */
preload() {
  console.log("Splash Scene")
  this.load.image("splashSceneBackground", "./assets/splashSceneImage.png")
}

/**
 * can be defined on your own scenes
 * use it to create game objects
 * @param {object} data - any data passed via ScenePlugin.add() or ScenePlugin.start()
 */
create(data) {
  this.splashSceneBackgroundImage = this.add.sprite(0, 0, "splashSceneBackground")
  this.splashSceneBackgroundImage.x = 1920 / 2
  this.splashSceneBackgroundImage.y = 1080 / 2
}

/**
 * should be overridden by your own scenes
 * this method is called once per game step while the scene is active
 * @param {number} time - the current time
 * @param {number} delta - the delta time in ms since the last frame
 */
update(time, delta) {
  this.scene.switch("titleScene")
  }
}

export default SplashScene