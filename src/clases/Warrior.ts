import Player from "./Player.js";
import Weapon from "./Weapon.js";

export default class Warrior extends Player {
	private m_damage_multiplier: number

	constructor(
		name: string = "Warrior",
		damage_multiplier: number = 1.2,
		weapon: Weapon = new Weapon("Wood Axe", 20)
	){
		super(name, weapon)
		this.m_class = "Warrior"
		this.m_damage_multiplier = damage_multiplier
	}

	attack(target: Player): void {
		console.log("---------------------------------------")
		console.log(`${this.m_name} attacks ${target.getName()} using ${this.m_weapon.getName()}`)

		if( target.isAlive() ){
			target.recieveDamage(this.m_weapon.getDamage() * this.m_damage_multiplier)
		}
		else{
			console.log(`${target.getName()} is already dead`)
		}
	}

	display(): string {
		return `
			---------------------------------------
			${this.m_name}
			Class: ${this.m_class}
			HP: ${this.m_health}
			Weapon: ${this.m_weapon.displayWeapon()}
			Damage Multiplier: ${this.m_damage_multiplier}
			---------------------------------------
		`
	}
}