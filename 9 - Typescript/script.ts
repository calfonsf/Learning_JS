// Type Annotation for variable
const Name: string = "Carlos";

// Objects
const persona = {
    name: "Carlos",
    age: 24,
};

console.log(persona.name);

// Any and uknown
let something: any = "Carlos";
something = 8;

//functions annotation
function saludar({ name, age }: { name: string; age: number }) {
    console.log(name, age);
    return name;
}

function saludar2(persona: { name: string; age: number }) {
    const {name, age} = persona
    console.log(name, age);
    return name;
}

const greet = (fn: ({name, age}: {name: string, age: number}) => string) => {
    fn({name:'Carlos', age:24})
}

greet(saludar)

// Crear Tipos (typedef) convention: use PascalCase

type HeroId = `${string}-${string}-${string}-${string}-${string}`

type Hero = {
    readonly id?: HeroId,
    name: string,
    age: number,
    isActive?: boolean
}

const myhero: Hero = {name: 'Thor', age: 30, id: crypto.randomUUID()}

// optional chaining
myhero.isActive?.valueOf

//readonly property
//myhero.id = 10

type Persona = typeof persona

const wizard: Persona = {
    name: "Harry",
    age: 11,
}

// Arrays
const houses: string[] = []
const classes: Array<string> = []

houses.push('Griffindor')
classes.push('Defense Against The Dark Arts')

// Multiple types in an array
const list: (string | number)[] = []

list.push('item')
list.push(2)

// objects array
const heroes: Hero[] = [] 