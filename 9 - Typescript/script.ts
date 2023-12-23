function saludar({name, age}: {name: string, age: number}) {
   console.log(name, age) 
   return name
}

const greet = (fn: ({name, age}: {name: string, age: number}) => string) => {
    fn({name:'Carlos', age:24})
}

greet(saludar)