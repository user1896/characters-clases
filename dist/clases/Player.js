import Weapon from "./Weapon.js";
export default class Player {
    constructor(m_name = "Undead", m_weapon = new Weapon(), m_health = 100) {
        this.m_name = m_name;
        this.m_weapon = m_weapon;
        this.m_health = m_health;
    }
    recieveDamage(damage_recieved) {
        if (this.m_health > 0) {
            this.m_health = this.m_health - damage_recieved;
            console.log(`${this.m_name} recieves ${damage_recieved} damage`);
            if (this.m_health < 0) {
                this.m_health = 0;
            }
        }
        else {
            console.log(`${this.m_name} is already dead`);
        }
    }
    attack(target) {
        console.log(`${this.m_name} attacks ${target.getName()}`);
        target.recieveDamage(this.m_weapon.getDamage());
    }
    drinkHealthPotion(health_potion_quantity) {
        if (this.m_health < 100) {
            this.m_health += health_potion_quantity;
            if (this.m_health > 100) {
                this.m_health = 100;
            }
            console.log(`${this.m_name} drank a health potion that retores ${health_potion_quantity} hp.`);
            console.log(`${this.m_name} new hp: ${this.m_health}`);
        }
    }
    isAlive() {
        return this.m_health > 0;
    }
    display() {
        return `
			---------------------------------------
			${this.m_name} HP: ${this.m_health}
			Weapon: ${this.m_weapon.displayWeapon()}
			---------------------------------------
		`;
    }
    getName() {
        return this.m_name;
    }
}
