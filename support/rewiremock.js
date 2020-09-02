import rewiremock from 'rewiremock/webpack';
import sum from '../src/sum'

let counter = 0;
rewiremock('./src/sum.js').withDefault((...args) => {
    console.log(`sum calls: ${++counter}`);
    return sum(...args);
});

rewiremock.enable();
