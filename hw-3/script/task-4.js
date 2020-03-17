const countTotalSalary = function (employees) {
    let totalSalary = 0;

    for (var key in employees) {
        if (typeof employees[key] !== 'number') {
            console.log(`Количечтво выполненой работы ${key} не является числом !!!`);
        } else {
            totalSalary += employees[key];
        }
    }
    return totalSalary;
};

console.log(countTotalSalary({}));

console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    }),
);

console.log(
    countTotalSalary({
        kiwi: 200,
        lux: 50,
        chelsy: 150,
    }),
);