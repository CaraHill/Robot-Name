class Robot {
  constructor() {
    this.alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

    this.numbers = "1234567890".split("");

    this.usedNames = [];

    this.name = this.generateName();
  }

  reset() {
    this.name = this.generateName();
  }

  generateName() {
    let newName = "";

    while(this.usedNames.includes(newName) || newName.length == 0){
      for(let i = 0; i < 2; i++) {
        newName += this.alphabet[Math.floor(Math.random()*this.alphabet.length)];
      }

      for(let i = 0; i < 3; i++) {
        newName += this.numbers[Math.floor(Math.random()*this.numbers.length)];
      }
    }

    this.usedNames.push(newName);

    return newName;
  }
}

export default Robot
