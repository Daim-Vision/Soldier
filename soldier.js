let soldier = {
    name: 'John',
    heal: 1,
    weapon: {
        name: 'M4A1 carbine',
        bullets: 1
    },
    supplies: 1,

    fire() {
        if (this.weapon.bullets > 0) {
        this.weapon.bullets--;
        console.log('Бах-Бах!');};

        if (this.weapon.bullets == 0) {
            console.log('Обойма пуста. Перезарядитесь.');
        }
    },

    reload() {
        if (this.supplies <= 0) {
            console.log("Не осталось припасов.")
            return;
        }
        this.weapon.bullets = 30;
        this.supplies--;
        console.log("Перезарядка...");
    },

    wound() {
        this.heal--;
        if (this.heal <= 0) {
            console.log(`${this.name} умер.`);
        }
    },

};
soldier.fire()
console.log(soldier);


