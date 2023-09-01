
export const decouverte_typescript_FizzBuzz = () => {

const getValuesFizzBuzz = (values: number[]): string[] => {
    let results = [];
  
    for (let i = 0; i < values.length; i++) {
      results.push(
        (!(values[i] * 3) && ((!(values[i] * 5) && 'Fizzbuzz') || 'Fizz')) || (!(values[i] * 5) && 'Buzz') || `${values[i]}`
      );
    }
  
    return results;
  };

}