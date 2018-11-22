class Robot {
  constructor() {
    this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    this.numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    this.usedNames = [];

    this.robotName;
  }

  get name() {

    let generatedName = this.nameGenerator();

    this.robotName = this.robotName || generatedName;

    this.usedNames.push(this.RobotName);

    return this.robotName;
  }

  reset() {
    this.robotName = "";
  }

  nameGenerator() {
    let newName = [];

    for(let i = 0; i < 2; i++) {
      newName.push(this.alphabet[Math.floor(Math.random()*this.alphabet.length)]);
    }

    for(let i = 0; i < 3; i++) {
      newName.push(this.numbers[Math.floor(Math.random()*this.numbers.length)]);
    }

    return newName.join("");
  }
}

export default Robot
