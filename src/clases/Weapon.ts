export default class Weapon{
	protected m_weapon_name: string;
	protected m_damage: number;

	constructor(
		weapon_name: string = "Broken Sword",
		damage: number = 15
	){
		this.m_weapon_name = weapon_name
		this.m_damage = damage
	}

	displayWeapon(): string{
		return `${this.m_weapon_name} => ${this.m_damage} damage`
	}

	getName(): string{
		return `${this.m_weapon_name}`
	}

	getDamage(): number{
		return this.m_damage
	}
}