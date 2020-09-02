
import sum from './sum';

export default (a, b) => new Array(a)
    .fill(b)
    .reduce(sum, 0);