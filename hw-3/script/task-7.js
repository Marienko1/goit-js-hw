const typeOfTransaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const account = {
    balance: 0,
    transactions: [],
    // генератор рандомного ид
    makeId(length) {
        let result = '';
        let characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },
    //я добавил параметр статус , чтоб понять осуществилась транзакция или нет
    createTransaction(amount, type, status) {
        const movement = {
            id: this.makeId(6), //уникальный ИД с случайными цифрами и числами
            type,
            amount,
            status,
        };
        return movement;
    },
    //можно было бы реализовать статус как отдельный обьект , аналога транзакции
    deposit(amount) {
        let type = typeOfTransaction.DEPOSIT;
        this.balance += amount;
        status = 'SUCCESS';
        this.transactions.push(this.createTransaction(amount, type, status));
    },

    withdraw(amount) {
        if (amount <= this.balance) {
            let type = typeOfTransaction.WITHDRAW;
            this.balance -= amount;
            status = 'SUCCESS';
            this.transactions.push(this.createTransaction(amount, type, status));
        } else {
            let type = typeOfTransaction.WITHDRAW;
            this.balance += 0;
            status = 'FAILED , NO FUNDS';
            this.transactions.push(this.createTransaction(amount, type, status));
        }
    },
    //вывод текущего баланса(сальдо)
    getBalance() {
        return this.balance;
    },
    //проверку делал но не здесь
    getTransactionDetails(id) {
        for (let operation of this.transactions) {
            if (operation.id === id) {
                return operation;
            }
        }
    },
    //выводит список выполненных и не выполненных операций
    getStatus(status) {
        let operations = [];
        for (let operation of this.transactions) {
            if (operation.status === status) {
                operations.push(operation);
            }
        }
        return operations;
    },

    getTransactionTotal(type) {
        let saldo = 0;
        for (let operation of this.transactions) {
            if (operation.type === type) {
                saldo += operation.amount;
            }
        }
        return saldo;
    },
};
//проверка кода (я проверил поиск по ид, все работает )
account.deposit(1000);
account.deposit(2000);
account.withdraw(1430);
account.withdraw(1000);
account.deposit(2100);
account.withdraw(2220);
account.deposit(2030);
account.withdraw(7136);
account.deposit(500);
account.withdraw(2000);

//смотрим все транзакциии в ввиде таблички
console.table(account.transactions);
//Выводим общую сумму запрошуемого депозита
console.log(
    'Total of Requested deposit :',
    account.getTransactionTotal('deposit'),
);
//Общая сумма вывода денег (суммируется даже не проведенная операция )
console.log(
    'Total of Requested withdraw :',
    account.getTransactionTotal('withdraw'),
);
console.log('Current saldo:', account.getBalance());

console.table(account.getStatus('SUCCESS'));
console.table(account.getStatus('FAILED , NO FUNDS'));