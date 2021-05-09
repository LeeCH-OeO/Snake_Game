import{onSnake,expandSnake,onSnake2,expandSnake2} from './snake.js'
import{randonGridPosition} from './grid.js'
let food=getRandomFoodPosition()
const EXPANSION_RATE = 5
export function update(){
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food=getRandomFoodPosition()
    }
    if(onSnake2(food)){
        expandSnake2(EXPANSION_RATE)
        food=getRandomFoodPosition()
    }

}
export function draw(gameBoard){
    
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)

}
function getRandomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)||onSnake2(newFoodPosition)) {
        newFoodPosition = randonGridPosition()
        
    }
    return newFoodPosition
}
