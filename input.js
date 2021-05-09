let inputDirection = {x:0, y:0}
let inputDirection2 = {x:0, y:0}
let lastInputDirection={x:0,y:0}
let lastInputDirection2={x:0,y:0}
window.addEventListener('keydown',e =>{
    console.log(e.key)
    switch(e.key){
        case 'ArrowUp':
            if(lastInputDirection.y!==0)break
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if(lastInputDirection.y!==0)break
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if(lastInputDirection.x!==0)break
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if(lastInputDirection.x!==0)break
            inputDirection = { x: 1, y: 0 }
            break
        case 'd':
            if(lastInputDirection2.x!==0)break
            inputDirection2 = { x: 1, y: 0 }
            break
        case 'a':
            if(lastInputDirection2.x!==0)break
            inputDirection2 = { x: -1, y: 0 }
            break
        case 'w':
            if(lastInputDirection2.y!==0)break
            inputDirection2 = {x: 0, y: -1}
            break
        case 's':
            if(lastInputDirection2.y!==0)break
            inputDirection2 = {x:0,y:1}
            break
  
    }

})
export function getInputDirection(){
    lastInputDirection=inputDirection
    return inputDirection
}
export function getInputDirection2(){
    lastInputDirection2=inputDirection2
    return inputDirection2
}