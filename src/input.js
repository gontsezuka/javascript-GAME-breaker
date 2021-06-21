import { Game } from "./game.js";

export class InputHandler {

    constructor(paddle,game)
    {
        document.addEventListener("keydown", event =>
        {

            switch(event.keyCode)
            {
                case 37:
                    //alert("Move Left");
                    paddle.moveLeft();
                break;
                case 39:
                    paddle.moveRight();
                break;
                case 27:
                  game.togglePause(); 
                  break; //Escape Key  
                case 32:
                    game.start();
                break;
            }
        });




        document.addEventListener("keyup", event => {
            // alert(event.keyCode);
     
    
         switch(event.keyCode)
         {
             case 37:
                 //alert("Move Left");
                 if(paddle.speed < 0)
                 paddle.stop();
             break;
             case 39:
                 if(paddle.speed > 0)
                 paddle.stop();
             break;
         }
    
      });
    }


}