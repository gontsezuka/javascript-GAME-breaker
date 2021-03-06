import { Paddle } from "./paddle.js";
import { InputHandler } from "./input.js";
import { Ball } from "./ball.js";
import { Game } from "./game.js"


let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH= 800;
const GAME_HEIGHT= 600;


ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);

ctx.fillStyle = '#00f';


//let paddle = new Paddle(GAME_WIDTH,GAME_HEIGHT);
//paddle.draw(ctx);


//new InputHandler(paddle);

//let ball = new Ball(GAME_WIDTH,GAME_HEIGHT);
let game = new Game(GAME_WIDTH,GAME_HEIGHT);

//game.start();
let lastTime = 0;

let name ="Gontse";
let array_name = new Array(name.split(""));

array_name.forEach(function(element) {
    alert(element);
});

alert(array_name);

function gameLoop(timeStamp)
{
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);

    game.update(deltaTime);
    game.draw(ctx);

    // paddle.update(deltaTime);
    // paddle.draw(ctx); //Removed - 35 Minutes

    // ball.update(deltaTime);
    // ball.draw(ctx);

    requestAnimationFrame(gameLoop);

}
requestAnimationFrame(gameLoop);



/**
 * NEXT WE WILL HANLDE KEYBOARD INPUTS
 * 
 * Moving paddle with keys
 * Stopping paddle with keys
 * 16 Minutes
 */


 /**
  *Drawing the ball image
  * 23 Minutes
  * 
  * Moving Ball
  * 27 Minutes
  * 
  * Bouncing of ball
  * 29 Minutes
  */

 /**
  * Refactoring
  * 32 Minutes
  */

 /**
  * Collision Detection
  * between ball and paddle
  * 39 Minutes
  */


 /**
  * Loading Bricks
  * 43 Minutes
  */


 /**
  * Loading Levels 
  * 46 Minutes
  */

 /**
  * Collision Detection With Bricks
  * 51 Minutes
  */

 /**
  * Pause Screen
  * 56 Minutes
  */

 /**
  * Simple Start Menu
  * 1 Hour 2 Minutes
  */

 /**
  * GAME OVER
  * 1 Hour 6 Minutes
  * 
  */

 /**
  * Completing Levels
  * 1 Hour 10 Minutes
  *
  */