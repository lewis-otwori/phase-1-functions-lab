  
function distanceFromHqInBlocks(block) {
    if (block > 42){
        return block - 42;
    }
    else {
        return 42 - block;
    }      
return distanceFromHqInBlocks(34)
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(blockA, blockB){
    if (blockA < blockB){
        return (blockB - blockA)* 264
    }
    else{
        return(blockA -blockB)* 264
    }
 
}

function calculatesFarePrice(start, destination){
let distanceCoverd;
if(destination > start){
    distanceCoverd = (destination - start)*264;
}
    else {
        distanceCoverd= (start - destination)*264
    }


if(distanceCoverd < 400) {
    return 0;
}else if(distanceCoverd <2000){
    return(distanceCoverd-400)*0.02;
}else if(distanceCoverd > 2000 && distanceCoverd<2500){
    return 25;
}
else{
    return "cannot travel that far"
}
}








