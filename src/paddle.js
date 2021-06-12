/**
 * We need to export the default class 
 * So we access the class in another JS
 * File
 * 
 * Do not use default when exporting the class {N.B}
 */

 export class Paddle
 {
     constructor(game)
     {
         this.gameWidth = game.gameWidth;
         this.width=150;
         this.height=20;
        // this.game = game;
 
         this.maxSpeed = 7;
         this.speed = 0;
 
         this.position = {
             x: game.gameWidth/2 - this.width/2,
             y: game.gameHeight - this.height-10,
         }
 
     }
 
 
     moveLeft()
     {
         //It will be moving -10px per second 17M
         this.speed = -this.maxSpeed;
     }
 
     moveRight()
     {
         this.speed = this.maxSpeed;
     }
 
 
     stop()
     {
         this.speed = 0;
     }
 
 
     draw(ctx)
     {
         ctx.fillStyle= '#0ff'
         ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
     }
 
     /**
      * HOW MUCH TIME SINCE THIS HAS BEEN UPDATED
      * @param {} deltaTime 
      */
     update(deltaTime)
     {
        //  if(!deltaTime)// Removed in 27 Minutes
        //  return;
         
        // this.position.x += 5 / deltaTime;
 
        this.position.x += this.speed;
        /**
         * Then for the paddle to not overlap
         */
        if(this.position.x < 0)
        {
            this.position.x =0;
        }
 
        if(this.position.x + this.width > this.gameWidth)
        {
            this.position.x = this.gameWidth - this.width;
        }
 
     }
   
 
 }