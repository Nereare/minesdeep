export class MainScene extends Phaser.Scene {
  cursors;

  constructor() {
    super({ key: "MainScene" });
  }

  preload() {
    //
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update(time) {
    if (this.cursors.left.isDown) {
      //
    } else if (this.cursors.up.isDown) {
      //
    } else if (this.cursors.right.isDown) {
      //
    } else if (this.cursors.down.isDown) {
      //
    }
  }
}