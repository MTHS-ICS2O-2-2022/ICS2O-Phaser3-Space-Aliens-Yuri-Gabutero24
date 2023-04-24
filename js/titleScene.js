/*Global Phaser*/

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: April 2023
// This is the Title scene

/**
 * This class is the title scene.
 */
class TitleScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor () {
    super({key: 'titleScene'})
  }

/**
 * can be defined on your own scenes
 * this method is called by the scene manager when the scene starts,
 *  before preload() and create().
 * @param {object} data - any data passed via ScenePlugin.add() or ScenePlugin.start()
 */
init (data) {
  this.cameras.main.setBackgroundColor(ffffff)
}

/**
 * can be defined on your own scenes
 * use it to load assets
 */
preload() {
  console.log("Title Scene")
}

/**
 * can be defined on your own scenes
 * use it to create game objects
 * @param {object} data - any data passed via ScenePlugin.add() or ScenePlugin.start()
 */
create(data) {
  // pass
}

/**
 * should be overridden by your own scenes
 * this method is called once per game step while the scene is active
 * @param {number} time - the current time
 * @param {number} delta - the delta time in ms since the last frame
 */
update(time, delta) {
  //pass
  }
}

export default TitleScene