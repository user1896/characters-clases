import Weapon from "./Weapon.js";

export default class MagicWeapon extends Weapon{
	private m_consume_mana: number;

	constructor(
		weapon_name: string = "staff",
		damage: number = 10,
		consume_mana: number = 5
	){
		super(weapon_name, damage)
		this.m_consume_mana = consume_mana
	}

	displayWeapon(): string{
		return super.displayWeapon()+` | ${this.m_consume_mana} mana`
	}

	getConsumeMana(): number {
		return this.m_consume_mana
	}
}