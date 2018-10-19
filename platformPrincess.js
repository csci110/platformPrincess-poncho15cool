import {game, Sprite} from "../sgc/sgc.js";

game.setBackground("water.png");
game.setBackground("water.png", 500, 0);

class wall extends Sprite {
    constructor(x, y, name, image){
    super();
    this.x = x;
    this.y = y;
    this.name = name;
    this.setImage(image);
    this.accelerateOnBounce = false;
   }
}

let Wall = new wall (0,175);

class Support extends Sprite {
    constructor(x, y, image){
    super();
    this.x = x;
    this.y = y;
    this.setImage(image);
    }
}

class Platform extends Support {
    constructor(x, y, image){
    super();
    this.name = "A platform";
    this.accelerateOnBounce = false;
    }
}