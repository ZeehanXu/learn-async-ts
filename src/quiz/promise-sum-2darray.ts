const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const sum2DArrayAwait = async (array: number[][]): Promise<number> => {
    const rowSums = await Promise.all(array.map(async (row) => {
        return row.reduce((acc, num) => acc + num, 0);
    }));
    return rowSums.reduce((acc, sum) => acc + sum, 0);
};

(async () => {
    try {
        const result = await sum2DArrayAwait(array2D_1);
        console.log(`Sum: ${result}`);
    } catch (error) {
        console.error(error);
    }
})();
