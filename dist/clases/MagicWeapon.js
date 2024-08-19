import Weapon from "./Weapon.js";
export default class MagicWeapon extends Weapon {
    constructor(weapon_name = "staff", damage = 10, consume_mana = 5) {
        super(weapon_name, damage);
        this.m_consume_mana = consume_mana;
    }
    displayWeapon() {
        return super.displayWeapon() + ` | ${this.m_consume_mana} mana`;
    }
    getConsumeMana() {
        return this.m_consume_mana;
    }
}
