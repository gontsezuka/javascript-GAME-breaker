import { detectCollision } from './collisionDetection.js';

export class Brick 
{
    constructor(game, position)
    {
        this.image = document.getElementById("img_brick");
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.game = game;

        this.position = position;
        this.width = 80;
        this.height = 24;
        this.markedForDeletion = false;
    }


    draw(ctx)
    {
        ctx.drawImage(this.image,this.position.x, this.position.y,this.width, this.height);
    }

    update(deltaTime)
    {
        if(detectCollision(this.game.ball, this))
        {
            this.game.ball.speed.y = -this.game.ball.speed.y;
            this.markedForDeletion= true;
            /**
             * After it is hit we are going to update all objects
             */
        }
    }
}