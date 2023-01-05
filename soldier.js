let soldier = {
    name: 'John',
    heal: 1,
    weapon: {
        name: 'M4A1 carbine',
        bullets: 25
    },
    supplies: 3,

    fire() {
        if (this.weapon.bullets == 0) {
            console.log('Обойма пуста. Перезарядитесь.');
            return;
        }
        this.weapon.bullets--;
        console.log('Бах-Бах!');
    },

    reload() {
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


