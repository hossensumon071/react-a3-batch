// // function calling function
// function fruitCutter(fruite){
//     return fruite * 4
// }



function technicalTest(ramFeq, cpuClock) {
    const dramState = ramFreqTest(ramFeq);
    const cpuState = cpuTurbo(cpuClock);

    return `${dramState} and ${cpuState}`;
}

console.log(technicalTest(2400, 1.8));

function ramFreqTest(ramFreq){
    return ramFreq >= 2600 ? `DDR4` : `DDR3`;
}

function cpuTurbo(cpuClock) {
    return cpuClock >= 3.1 ? `1800rpm` : `1400rpm`
}


/* 
1st to 10th = 10000 per floor
11th floor = 12000
12th to 21st = 10000 per floor
22th floor = 12000

73 floors ??

*/

function brickCalculation(totalFloors) {
    let totalBricks;
    const undergoundBricks = 50000;
    let bricksForAllFloors = totalFloors * 10000;

    if(totalFloors >= 11){
        const extraFloors = Math.trunc(totalFloors / 11);
        const extraBricks = extraFloors * 2000;
        totalBricks = undergoundBricks + bricksForAllFloors;
    } else {
        totalBricks = undergoundBricks + bricksForAllFloors
    }

    return `total bricks needed: ${totalBricks}`;
}

console.log(brickCalculation(10));