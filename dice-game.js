function game() {
    const iterations = 10000;
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

    function calculateResults(currentRoll){
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
            let partialResult = calculateResults(currentRoll)
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
        console.log(`Number of simulations was ${iterations} using ${numberOfDices} dice.`);
        console.log('roundResults: ', roundResults);
        let greatest = Math.max(roundResults);
        for (let index = 0; index < greatest; index++) {
            
            
        }
    }

    runIterations();
}

game();