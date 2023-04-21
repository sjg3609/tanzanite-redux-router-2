// The * is what indicates a generator function
function* myGenerator() {
    // In a generator function we can yield
    yield true;
    yield 100;
    yield 'Hello'
}

// Gennerator functions are created as an instance
const instance = myGenerator();
console.log(instance);

// Generator functions are called using .next()
console.log(instance.next());
console.log(instance.next());
console.log(instance.next());
console.log(instance.next());


// Always return the next ID
function* getNextId() {
    let i =0;
    while(true) {
        yield i;
        i += 1; 
    }
}

const idGenerator = getNextId();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);