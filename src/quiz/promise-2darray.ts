/**
 * An asynchronous function that sums all numbers in a 2D array
 * @param arr 2D array of numbers
 * @returns a promise that resolves to the sum of all numbers in the 2D array
 * or rejects if the array is empty
 */
function sum2DArray(arr: number[][]): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if (arr.length === 0) {
            reject('Cannot sum an empty array');
        }

        const promises = arr.map(row => {
            return new Promise<number>((resolve) => {
                let rowSum = 0;
                for (let num of row) {
                    console.log(`Adding ${num} to rowSum`);
                    rowSum += num;
                }
                resolve(rowSum);
            });
        });

        Promise.all(promises)
            .then(rowSums => {
                const totalSum = rowSums.reduce((acc, curr) => acc + curr, 0);
                resolve(totalSum);
            })
            .catch(error => reject(error));

        console.log('returning from sum');
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const sumPromise1 = sum2DArray(array2D);
sumPromise1.then((sum) => console.log('Sum:', sum))
.catch((error) => console.log('Error:', error));;

const sumPromise2 = sum2DArray([]);
sumPromise2.then((sum) => console.log('Sum:', sum))
.catch((error) => console.log('Error:', error));;