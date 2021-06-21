import { Paddle } from './paddle.js';
import { InputHandler } from './input.js';
import { Ball } from './ball.js'
import { Brick } from './brick.js';
import { buildLevel, level1} from './levels.js';



const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
}

export class Game {

    constructor(gameWidth,gameHeight)
    {
        this.gameWidth= gameWidth;
        this.gameHeight = gameHeight;
    }

    start()
    {
        this.gamestate = GAMESTATE.RUNNING;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        let bricks = buildLevel(this,level1);

        
        this.gameObjects = [this.ball, this.paddle, ...bricks];
        new InputHandler(this.paddle,this);
    }


    update(deltaTime)
    {
      
         if(this.gamestate == GAMESTATE.PAUSED )
         {
            return;
         }


     this.gameObjects.forEach(object => object.update(deltaTime));

     /**
      * We are going to filter through all bricks not marked for deletion
      * 
      */
     this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion)

    }

    draw(ctx)
    {
       // this.paddle.draw(ctx);
       // this.ball.draw(ctx);

       this.gameObjects.forEach(object => object.draw(ctx));

       if(this.gamestate == GAMESTATE.PAUSED)
       {
        ctx.rect(0,0,this.gameWidth,this.gameHeight);
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Paused", this.gameWidth/2, this.gameHeight/2);
       }
    }


    togglePause()
    {
        //Introducing game states - paused, Running and over
        if(this.gamestate == GAMESTATE.PAUSED)
        {
            this.gamestate = GAMESTATE.RUNNING;
        }else{
            this.gamestate = GAMESTATE.PAUSED;
        }
    }
}