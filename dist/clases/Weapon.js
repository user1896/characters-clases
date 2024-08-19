export default class Weapon {
    constructor(weapon_name = "Broken Sword", damage = 15) {
        this.m_weapon_name = weapon_name;
        this.m_damage = damage;
    }
    displayWeapon() {
        return `${this.m_weapon_name} => ${this.m_damage} damage`;
    }
    getName() {
        return `${this.m_weapon_name}`;
    }
    getDamage() {
        return this.m_damage;
    }
}
