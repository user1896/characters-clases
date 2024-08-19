import Weapon from "./Weapon.js";

export default class Player{
	protected m_name: string;
	protected m_weapon: Weapon;
	protected m_health: number;

	constructor(
		name: string = "Undead",
		weapon: Weapon = new Weapon()
	){
		this.m_name = name
		this.m_weapon = weapon
		this.m_health = 100
		Player.s_players_spawned++
	}

	recieveDamage(damage_recieved: number): void {
		this.m_health = this.m_health - damage_recieved
		
		if(this.m_health <= 0){
			this.m_health = 0
			Player.s_players_spawned--
		}
		console.log(`${this.m_name} recieves ${damage_recieved} damage, new hp: ${this.m_health}`)
		if(this.m_health == 0){
			console.log(Player.sm_displayPlayersSpawned())
		}
	}

	attack(target: Player): void {
		console.log("---------------------------------------")
		console.log(`${this.m_name} attacks ${target.getName()} using ${this.m_weapon.getName()}`)

		if( target.isAlive() ){
			target.recieveDamage(this.m_weapon.getDamage())
		}
		else{
			console.log(`${target.getName()} is already dead`)
		}
	}

	drinkHealthPotion(health_potion_quantity: number): void{
		if(this.m_health < 100){
			this.m_health += health_potion_quantity
			if(this.m_health > 100) {
				this.m_health = 100
			}
			console.log(`${this.m_name} drank a health potion that retores ${health_potion_quantity} hp.`)
			console.log(`${this.m_name} new hp: ${this.m_health}`)
		}
	}

	isAlive(): boolean {
		return this.m_health > 0
	}

	display(): string {
		return `
			---------------------------------------
			${this.m_name} HP: ${this.m_health}
			Weapon: ${this.m_weapon.displayWeapon()}
			---------------------------------------
		`
	}

	getName(): string {
		return this.m_name
	}

	// Static memebers:
	static s_players_spawned: number = 0

	static sm_displayPlayersSpawned(): string {
		return `Players Alive : ${this.s_players_spawned}`
	}
}