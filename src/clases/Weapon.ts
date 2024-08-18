export default class Weapon{
	constructor(
		private m_weapon_name: string = "Broken Sword",
		private m_damage: number = 15
	){}

	change(weapon_name: string, damage: number): void{
		this.m_weapon_name = weapon_name
		this.m_damage = damage
	}

	displayWeapon(): string{
		return `${this.m_weapon_name} ${this.m_damage} damage`
	}
	
	getDamage(): number{
		return this.m_damage
	}
}