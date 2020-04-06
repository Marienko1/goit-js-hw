class Storage {
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        if (this.items.includes(item)) {
            this.items.splice(this.items.indexOf(item), 1);
        } else {
            console.log(`Item ${item} dont exist in storage !!!!`);
        }
    }
}
const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);

const items = storage.getItems();

console.table(items);

storage.addItem('Дроид');
console.table(items);

storage.removeItem('Бомбомет');
console.table(items);

storage.removeItem('Пролонгер');
console.table(items);