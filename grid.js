const GRID_SIZE=31
export function randonGridPosition(){
    return{
        x: Math.floor(Math.random()*GRID_SIZE)+1,
        y:Math.floor(Math.random()*GRID_SIZE)+1
    }
}
export function outsideGrid(position) {
    return (
      position.x <= 0 || position.x >GRID_SIZE ||
      position.y <= 0 || position.y > GRID_SIZE
    )
  }