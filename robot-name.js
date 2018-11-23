class Robot {
  constructor() {
    this.alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

    this.numbers = "1234567890".split("");

    this._name = this.generateName();
  }

  get name() {
    return this._name;
  }

  reset() {
    this._name = this.generateName();
  }

  generateName() {
    let newName = "";

    while(usedRobotNames.has(newName) || newName.length == 0){
      for(let i = 0; i < 2; i++) {
        newName += this.alphabet[Math.floor(Math.random()*this.alphabet.length)];
      }

      for(let i = 0; i < 3; i++) {
        newName += this.numbers[Math.floor(Math.random()*this.numbers.length)];
      }
    }

    usedRobotNames.add(newName);

    return newName;
  }
}

export default Robot

let usedRobotNames = new Set();
