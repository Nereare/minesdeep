import { MainScene } from "./src/MainScene";

// font size
const FONT = 32;
// map dimensions
const ROWS = 20;
const COLS = 20;
// number of actors per level, including player
const ACTORS = 10;

const CONFIG = {
  type: Phaser.AUTO,
  width: COLS * FONT * 0.6,
  height: ROWS * FONT,
  backgroundColor: "#0a0a0a",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [ MainScene ]
};

var game = new Phaser.Game(CONFIG);

// https://code.tutsplus.com/how-to-make-your-first-roguelike--gamedev-13677t
