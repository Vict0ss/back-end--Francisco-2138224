class Person {
    construtor(firstname,lastName){
        this.firstname=firstname;
        this.lastName=lastName;
        this.greet =function() {
            return  this.firstname + " " + this.lastName;
        };
    }
}

var emtr = new Emiter();

emtr.on ("greet",function()
    console.log("Hello");   
)