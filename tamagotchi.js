/**
 * Created by Marina on 29.10.2016.
 */

function Tamagotchi(name, age, hobby) {
    this.name = name || 'Pet';
    this.hobby = hobby || 'eating icecream';
    this.ageParametr = age || 1;    // measured in days
    this.foodParametr = 2;          // [1...100]
    this.moodParametr = 5;          // [1...10]
    this.sleepParametr = 1;         // [1...10]
    this.healthParametr = 60;       // [1...100]
    this.studyParametr = 10;        // [1...100]
    this.drinkParametr = 80;        // [1...100]
    this.cleanParametr = 70;        // [1...100]
}

Tamagotchi.prototype.eat = function () {
    if (this.foodParametr == 0 || this.sleepParametr == 0
        || this.drinkParametr == 0 || this.healthParametr == 0
        || this.ageParametr > 1000 || this.moodParametr == 0) {
        this.die();
    }
    else if (this.foodParametr <= 95) {
        this.foodParametr += 5;
        this.drinkParametr -= 10;
        this.printStatus();
    }
};

Tamagotchi.prototype.action = function () {
    if (this.foodParametr == 0 || this.sleepParametr == 0 ||
        this.drinkParametr == 0 || this.healthParametr == 0 ||
        this.ageParametr > 1000 || this.moodParametr == 0) {
        this.die();
    }
    else if (this.moodParametr < 10) {
        this.moodParametr++;
        this.ageParametr++;
        this.foodParametr--;
        this.sleepParametr--;
        this.healthParametr--;
        this.drinkParametr -= 10;
        this.cleanParametr -= 10;
        this.printStatus();
    }
};

Tamagotchi.prototype.sleep = function () {
    if (this.foodParametr == 0 || this.sleepParametr == 0 ||
        this.drinkParametr == 0 || this.healthParametr == 0 ||
        this.ageParametr > 1000 || this.moodParametr == 0) {
        this.die();
    }
    else if (this.sleepParametr < 10) {
        this.sleepParametr++;
        this.printStatus();
    }
};

Tamagotchi.prototype.hospitalization = function () {
    if (this.foodParametr == 0 || this.sleepParametr == 0 ||
        this.drinkParametr == 0 || this.healthParametr == 0 ||
        this.ageParametr > 1000 || this.moodParametr == 0) {
        this.die();
    }
    else if (this.healthParametr <= 95){
        this.healthParametr += 5;
        this.printStatus();
    }
};

Tamagotchi.prototype.study = function () {
    if (this.foodParametr == 0 || this.sleepParametr == 0 ||
        this.drinkParametr == 0 || this.healthParametr == 0 ||
        this.ageParametr > 1000 || this.moodParametr == 0) {
        this.die();
    }
    else if (this.studyParametr < 100) {
        this.sleepParametr--;
        this.foodParametr--;
        this.moodParametr--;
        this.studyParametr++;
        this.ageParametr++;
        this.printStatus();
    }
};

Tamagotchi.prototype.drink = function () {
    if (this.foodParametr == 0 || this.sleepParametr == 0 ||
        this.drinkParametr == 0 || this.healthParametr == 0 ||
        this.ageParametr > 1000 || this.moodParametr == 0) {
        this.die();
    }
    else if (this.drinkParametr <= 90) {
        this.drinkParametr += 10;

    }
};

Tamagotchi.prototype.clean = function () {
    if (this.foodParametr == 0 || this.sleepParametr == 0 ||
        this.drinkParametr == 0 || this.healthParametr == 0 ||
        this.ageParametr > 1000 || this.moodParametr == 0) {
        this.die();
    }
    else if (this.cleanParametr <= 90) {
        this.cleanParametr += 10;

    }
};

Tamagotchi.prototype.die = function () {
    alert('Game over =(\nCreate new pet!');
};

Tamagotchi.prototype.printStatus = function () {
    console.log('food: ' + this.foodParametr + '\tmood: ' + this.moodParametr + '\tsleep: ' + this.sleepParametr + '\n');
    console.log('health: ' + this.healthParametr + '\tstudy: ' + this.studyParametr + '\tdrink:' + this.drinkParametr + '\n');
};

var hamster = new Tamagotchi('Tiny', 12, 'running');