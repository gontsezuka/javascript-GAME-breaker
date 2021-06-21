import { Brick } from "./brick.js"; 

export function buildLevel(game, level)
{
    let bricks = [];

    //LOOP THROUGH ROW
    level.forEach((row, rowIndex) =>{

            //LOOP THROUGH EACH ELEMENT IN ROW
            row.forEach((brick, brickIndex) => {
                if(brick ===1)
                {

                    let position = {
                        x:80*brickIndex,
                        y:75+24*rowIndex 
                    };

                    bricks.push(new Brick(game,position));
                }
            });
    });

    return bricks;
}

export const level1 = 
[
    [0,1,1,0,0,1,0,1,1,0],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
]