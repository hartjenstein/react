let names = ['toni', 'lulu', 'hans']

let person = {
    name: 'Andrew',
    greet() {
        names.forEach(() => {
            console.log(this.name + 'says hi to' + name)
        }); 
    }
} 
person.greet();