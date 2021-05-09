import {SNAKE_SPEED,update as updateSnake,draw as drawSnake, getSnakeHead, snakeIntersection, getSnakeHead2,snakeIntersection2, s1ons2, s2ons1, whowin} from './snake.js'
import{update as updateFood, draw as drawFood} from './food.js'
import{outsideGrid} from './grid.js'
let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')
let gameOver = false
let gameOver2 = false
let gameOver3 = false
let gameOver4 = false
function main(currentTime){
    
    if(gameOver){
        if(confirm('Winner is red snake!')){
            window.location='/'
        }
        return
    }
    if(gameOver2){
        if(confirm('Winner is blue snake!')){
            window.location='/'
        }
        return
    }
    if(gameOver3 || gameOver4){
        if(whowin()===1){
            if(confirm('Winner is blue snake!')){
                window.location='/'
            }
            return
        }
        if (whowin()===2){
            if(confirm('Winner is  red snake !')){
                window.location='/'
            }
            return
        }
        if (whowin()===3){
            if(confirm("It's a tie!")){
                window.location='/'
            }
            return
        }
    }

    window.requestAnimationFrame(main)
    const secondsLastRender = (currentTime - lastRenderTime)/1000
    if(secondsLastRender < 1/SNAKE_SPEED) return
    
    
    lastRenderTime = currentTime
    update()
    draw()
    
}
window.requestAnimationFrame(main)
function update(){
    updateSnake()
    updateFood()
    checkDeath()
    checkDeath2()
    checks1ons2()
    checks2ons1()

}
function draw(){
    gameBoard.innerHTML=''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}
function checkDeath(){
    gameOver=outsideGrid(getSnakeHead()) || snakeIntersection()
}
function checkDeath2(){
    gameOver2=outsideGrid(getSnakeHead2()) || snakeIntersection2()
}
function checks1ons2(){
    gameOver3=s1ons2()

}
function checks2ons1(){
    gameOver4=s2ons1()
}