import Player from "./Player.js";
import Weapon from "./Weapon.js";

export default class Mage extends Player {
	private m_mana: number;

	constructor(
		m_name: string = "Mage",
		m_weapon: Weapon = new Weapon("Wand", 10)
	){
		super(m_name, m_weapon)
		this.m_mana = 100
	}

	attack(target: Player): void {
		console.log("---------------------------------------")
		console.log(`${this.m_name} attacks ${target.getName()}`)

		if( target.isAlive() ){
			if(this.isEnoughMana()){
				this.consumeMana()
				target.recieveDamage(this.m_weapon.getDamage())
			}
			else{
				console.log(`Not enough mana (${this.m_mana})`)
			}
		}
		else{
			console.log(`${target.getName()} is already dead`)
		}
	}

	isEnoughMana(): boolean {
		return this.m_mana >= this.m_weapon.getDamage()
	}

	consumeMana(): void {
		this.m_mana -= this.m_weapon.getDamage()
		console.log(`${this.m_name} - ${this.m_weapon.getDamage()} mana (new mana: ${this.m_mana})`)
	}

	drinkManaPotion(mana_potion_quantity: number): void {
		console.log("---------------------------------------")
		console.log(`${this.m_name} drinks mana potion (${mana_potion_quantity})`)
		if(this.m_mana < 100){
			this.m_mana += mana_potion_quantity
			if(this.m_mana > 100){
				this.m_mana = 100
			}
			console.log(`mana restored to ${this.m_mana}`)
		}
		else{
			console.log("Already at full mana")
		}
	}

	display(): string {
		return `
			---------------------------------------
			${this.m_name} HP: ${this.m_health} | Mana: ${this.m_mana}
			Weapon: ${this.m_weapon.displayWeapon()}
			---------------------------------------
		`
	}
}