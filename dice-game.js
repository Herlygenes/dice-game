function game() {
    const iterations = 10000;
    const startTime = Date.now();
    let numberOfDices = 5;
    roundResult = 0;
    roundResults = [];

    function rollDice(){
        return Math.floor(Math.random() * 6) + 1;
    }

    function rollDices() {
        let currentRoll = [];
        for (let index = 0; index < numberOfDices; index++) {
            currentRoll[index] = rollDice();
        }
        return currentRoll;
    }

    function countHowManyInstancesOf(aNumber){
        return roundResults.filter(result => result === aNumber).length;
    }

    function calculateSmallest(currentRoll){
        let smallest = 0;
        let noNumber3Rolls = currentRoll.filter(aNumber => aNumber != 3);
        numberOfDices = noNumber3Rolls.length;
        if(numberOfDices > 0){
            smallest = Math.min(...noNumber3Rolls);
            numberOfDices--;
        }
        return smallest;
    }

    function runRound() {
        while (numberOfDices > 0) {
            let currentRoll = rollDices();
            let partialResult = calculateSmallest(currentRoll)
            roundResult = roundResult + partialResult;                
        }
        roundResults.push(roundResult);
    }

    function runIterations() {
        for (let index = 0; index < iterations; index++) {
            runRound();
            numberOfDices = 5;
            roundResult = 0;
        }
        const totalSimulationTime = Date.now() - startTime;
        console.log(`Number of simulations was ${iterations} using ${numberOfDices} dices.`);
        let greatest = Math.max(...roundResults);
        for (let index = 0; index <= greatest; index++) {
            const instances = countHowManyInstancesOf(index);
            console.log(`Total ${index} occurs ${instances / iterations} occurred ${instances} times.`);            
        }
        console.log(`Total simulation took ${totalSimulationTime/1000} seconds.`)
    }

    runIterations();
}

game();
