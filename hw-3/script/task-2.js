const countProps = function (obj) {
    return Object.keys(obj).length;
};

console.log(countProps({}));

console.log(countProps({
    name: 'Mango',
    age: 2
}));

console.log(countProps({
    mail: 'poly@mail.com',
    isOnline: true,
    score: 500
}));

console.log(
    countProps({
        mail: 'poly@mail.com',
        isOnline: true,
        score: 500,
        isOndaaSassdline: true,
        maisdal: 'poly@mail.com',
        isOnldasine: true,
        scdasore: 500,
        isOnliasddsane: true,
    }),
);