const findBestEmployee = function (employees) {
    let bestScore = 0;
    let bestWorker;
    for (let key in employees) {
        if (typeof employees[key] !== 'number') {
            console.log(`Количечтво выполненой работы ${key} не является числом !!!`);
        } else {
            if (bestScore < employees[key]) {
                bestScore = employees[key];
                bestWorker = key;
            }
        }
    }
    return bestWorker;
};

console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
);

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
);

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
);

console.log(
    findBestEmployee({
        lux2: 'ghfh',
        david2: 'gfdg',
        kiwi: 19,
        chelsy: 38,
    }),
);