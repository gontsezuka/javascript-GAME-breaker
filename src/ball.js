import { detectCollision } from './collisionDetection.js';


export class Ball {

    constructor(game)
    {
        this.image = document.getElementById('img_ball');
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.game = game;

      
        this.size = 16;
        this.reset();
    }

    draw(ctx)
    {
        ctx.drawImage(this.image,this.position.x,this.position.y,this.size,this.size);
    }

    reset()
    {
        this.position = {
            x:10,
            y:400
        }

        this.speed = {
            x:2,
            y:-2
        }
        
    }

    update(deltaTime)
    {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        /**
         * Checking collision with walls LEFT|RIGHT
         */
        if(this.position.x + this.size > this.gameWidth || this.position.x < 0)
        {
            this.speed.x = -this.speed.x;
        }

        /**
         * Checking collision with TOP
         */
        if(this.position.y < 0)
        {
            this.speed.y = -this.speed.y;
        }

        /**
         * Collision with Bottom
         */
        if(this.position.y + this.size > this.gameHeight )
        {
            this.game.lives--;
            this.reset();
        }

        /**
         * CHECK COLLISION WITH PADDLE
         */

          if(detectCollision(this,this.game.paddle))
          {
              this.speed.y = -this.speed.y;
              this.position.y = this.game.paddle.position.y - this.size;
          }


    }
}