const users = {
    name : "faiz",
    age : 23,
    details: function (){
        console.log(`Welcom ${this.name} your age is ${this.age}`)
    }
}

// console.log(users.details())
users.details()


// ---------------------------------another this example is here ----------------------------------

const ali = {
    name: "Ali",

    showName() {
        console.log(this.name);
    }
};

const ahemd = {
    name : "ahmed",
    showName(){
        console.log(this.name)
    }
}

console.log(ali.name)
ali.showName()
console.log(ahemd.name)
ahemd.showName()