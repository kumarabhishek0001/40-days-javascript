const Cartoon = function(name,animal){
    this.name = name;
    this.animal = animal;

    this.log = function(){
        console.log(`${this.name} is a ${this.animal}`);
    }
}

const tomCartoon = new Cartoon('tom', 'cat')
console.log(tomCartoon)
tomCartoon.log()


const jerryCartoon = new Cartoon('jerry', 'mouse');
console.log(jerryCartoon);
jerryCartoon.log()