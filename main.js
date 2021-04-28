let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
const runnerAge = 21;

if (registeredEarly && runnerAge > 18) {
    raceNumber += 1000;
};

if (runnerAge > 18 && registeredEarly) {
    console.log(`The runner number ${raceNumber} will race at 9:30AM`);
} else if (runnerAge > 18 && !registeredEarly) {
    console.log(`The runner number ${raceNumber} will race at 11:00AM`);
} else if (runnerAge < 18) {
    console.log(`The runner number ${raceNumber} will race at 12:30PM`);
} else {
    console.log(`The runner number ${raceNumber} is asked to wait for further instructions`)
}

