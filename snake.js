import { getInputDirection,getInputDirection2 } from "./input.js"
import{randonGridPosition} from './grid.js'

const snakeBody = [{ x: 11, y: 11 }]
const snakeBody2 = [{ x: 22, y: 22 }]
let newSegment=0
let newSegment2=0
export function update(){
    addSegment()
    addSegment2()
    const inputDirection = getInputDirection()
    for(let i =snakeBody.length-2; i>=0; i--){
        snakeBody[i+1]={...snakeBody[i]}
    }
    snakeBody[0].x+=inputDirection.x
    snakeBody[0].y+=inputDirection.y

    const inputDirection2 = getInputDirection2()
    for(let i =snakeBody2.length-2; i>=0; i--){
        snakeBody2[i+1]={...snakeBody2[i]}
    }
    snakeBody2[0].x+=inputDirection2.x
    snakeBody2[0].y+=inputDirection2.y
}
export function draw(gameBoard){
    snakeBody.forEach(segment=>{
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)

    })
    snakeBody2.forEach(segment=>{
        const snakeElement2 = document.createElement('div')
        snakeElement2.style.gridRowStart = segment.y
        snakeElement2.style.gridColumnStart = segment.x
        snakeElement2.classList.add('snake2')
        gameBoard.appendChild(snakeElement2)

    })
    

}
export function expandSnake(amount){
    newSegment+=amount
}
export function expandSnake2(amount){
    newSegment2+=amount
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
      if (ignoreHead && index === 0) return false
      return equalPositions(segment, position)
    })
  }
  
export function onSnake2(position, { ignoreHead = false } = {}){
    return snakeBody2.some((segment, index)=>{
        if(ignoreHead&&index===0) return false
        return equalPositions(segment, position)
    })

}

function equalPositions(pos1, pos2){
    return pos1.x===pos2.x && pos1.y==pos2.y
}
function addSegment(){
    for (let i=0; i<newSegment; i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]})
    }
    newSegment=0
}
function addSegment2(){
    for (let i=0; i<newSegment2; i++){
        snakeBody2.push({...snakeBody2[snakeBody2.length-1]})
    }
    newSegment2=0
}
export function getSnakeHead() {
    return snakeBody[0]
}
  
export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}
export function getSnakeHead2() {
    return snakeBody2[0]
}
export function snakeIntersection2() {
    return onSnake2(snakeBody2[0], { ignoreHead: true })
}
export function s1ons2(){
    return onSnake2(snakeBody[0])
}
export function s2ons1(){
    return onSnake(snakeBody2[0])
}
export function whowin(){
    if(snakeBody.length>snakeBody2.length) return 1
    if(snakeBody.length<snakeBody2.length) return 2
    if(snakeBody.length === snakeBody2.length) return 3
}