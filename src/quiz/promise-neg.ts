const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];
const logNegativeRows = async (array: number[][]) => {
    const promises = array.map(async (row, index) => {
        if (row.some(num => num < 0)) {
            console.log(`Row ${index} has a negative number:`, row);
        }
    });
    await Promise.all(promises);
};

logNegativeRows(array2D_3);