let yourName = "You";

class greet {

    constructor(name){
        this.name = name;
    }

    hello(){
        console.log("Hello " + this.name);
    }
}

new greet(yourName);