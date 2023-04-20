/*Global Phaser*/

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: April 2023
// This is the Phaser 3 game config file

// scene import statements
import splashScene from './splashScene.js'

// create the new scenes
const splashScene = new splashScene()

/**
 * Start Phaser game.
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
  },
},

  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // placing it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
// console.log(game)

// load scenes
// note: only any "key" is global and can not be reused
game.scene.add("splashScene", splashScene)

// start scene
game.scene.start ("splashScene")
