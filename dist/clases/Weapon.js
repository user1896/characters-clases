export default class Weapon {
    constructor(m_weapon_name = "Broken Sword", m_damage = 15) {
        this.m_weapon_name = m_weapon_name;
        this.m_damage = m_damage;
    }
    change(weapon_name, damage) {
        this.m_weapon_name = weapon_name;
        this.m_damage = damage;
    }
    displayWeapon() {
        return `${this.m_weapon_name} => ${this.m_damage} damage`;
    }
    getDamage() {
        return this.m_damage;
    }
}
