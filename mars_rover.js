var directions = [
  'North',
  'East',
  'South',
  'West'
];
var obstacles=[{x:1,y:4},{x:3,y:5},{x:7,y:4}];
var x_coordinate = 1;
var y_coordinate = 2;
var direction = directions[0];
var found ;
var worningString;

function executeCommand(command){
for(let i=0;i<command.length;i++){
let currentX=x_coordinate;
let currentY=y_coordinate
if(command[i]==="F"){
  direction === "North" ? y_coordinate++
  :direction === "South"? y_coordinate++
  :direction === "East"? x_coordinate++
  :direction === "West"? x_coordinate++
  :0; 
}    
if(command[i]==="B"){
    direction === "North" ? y_coordinate--
    :direction === "South"?y_coordinate--
    :direction === "East"? x_coordinate--
    :direction === "West"? x_coordinate--
    :0; 
  }  
  if(command[i]==="L"){
    let index=directions.indexOf(direction);
    let next_index=index-1;
    next_index<0 ? index=3 : index--;
    direction=directions[index];
  }
  if(command[i]==="R"){
    let index=directions.indexOf(direction);
    let next_index=index+1;
    next_index>3 ? index=0 : index++;
    direction=directions[index];
    }  
    avoidObstacles(currentX,currentY);
    found === true ? i=command.length : 0 ;
    found === true ? worningString="STOPPED" : worningString="" ;
}
console.log(x_coordinate+","+y_coordinate+","+direction+worningString);
return x_coordinate+","+y_coordinate+","+direction+" "+worningString;
}

function avoidObstacles(currentXCoordinate,currentYCoordinate){
for(let i =0;i<obstacles.length;i++) {
obstacles[i].x === x_coordinate ? (obstacles[i].y=== y_coordinate ? found =true: found=false):found=false;
found === true ? i= obstacles.length : 0;
};
 found === true ? (x_coordinate=currentXCoordinate,y_coordinate=currentYCoordinate):0;
}
//let val=executeCommand("FLF");
//console.log(val);
var module = module || {};
module.exports = executeCommand ;
