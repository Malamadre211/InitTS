"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decouverte_typescript_FizzBuzz = void 0;
const decouverte_typescript_FizzBuzz = () => {
    const getValuesFizzBuzz = (values) => {
        let results = [];
        for (let i = 0; i < values.length; i++) {
            results.push((!(values[i] * 3) && ((!(values[i] * 5) && 'Fizzbuzz') || 'Fizz')) || (!(values[i] * 5) && 'Buzz') || `${values[i]}`);
        }
        return results;
    };
};
exports.decouverte_typescript_FizzBuzz = decouverte_typescript_FizzBuzz;
