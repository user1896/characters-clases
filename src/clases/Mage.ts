import Player from "./Player.js";
import MagicWeapon from "./MagicWeapon.js";

export default class Mage extends Player {
	private m_mana: number;
	private m_magic_weapon: MagicWeapon;

	constructor(
		name: string = "Mage",
		magicWeapon: MagicWeapon = new MagicWeapon()
	){
		super(name)
		this.m_class = "Mage"
		this.m_mana = 100
		this.m_magic_weapon = magicWeapon
	}

	attackMagic(target: Player): void {
		console.log("---------------------------------------")
		console.log(`${this.m_name} attacks ${target.getName()} using ${this.m_magic_weapon.getName()}`)

		if( target.isAlive() ){
			if(this.isEnoughMana()){
				this.consumeMana()
				target.recieveDamage(this.m_magic_weapon.getDamage())
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
		return this.m_mana >= this.m_magic_weapon.getConsumeMana()
	}

	consumeMana(): void {
		this.m_mana -= this.m_magic_weapon.getConsumeMana()
		console.log(`${this.m_name} - ${this.m_magic_weapon.getConsumeMana()} mana (new mana: ${this.m_mana})`)
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
			${this.m_name}
			Class: ${this.m_class}
			HP: ${this.m_health} | Mana: ${this.m_mana}
			Weapon: ${this.m_weapon.displayWeapon()}
			Magical Weapon: ${this.m_magic_weapon.displayWeapon()}
			---------------------------------------
		`
	}
}