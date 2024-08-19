import Weapon from "./Weapon.js";
class Player {
    constructor(name = "Undead", weapon = new Weapon()) {
        this.m_class = "Unclassed";
        this.m_name = name;
        this.m_weapon = weapon;
        this.m_health = 100;
        Player.s_players_spawned++;
    }
    recieveDamage(damage_recieved) {
        this.m_health = this.m_health - damage_recieved;
        if (this.m_health <= 0) {
            this.m_health = 0;
            Player.s_players_spawned--;
        }
        console.log(`${this.m_name} recieves ${damage_recieved} damage, new hp: ${this.m_health}`);
        if (this.m_health == 0) {
            console.log(Player.sm_displayPlayersSpawned());
        }
    }
    attack(target) {
        console.log("---------------------------------------");
        console.log(`${this.m_name} attacks ${target.getName()} using ${this.m_weapon.getName()}`);
        if (target.isAlive()) {
            target.recieveDamage(this.m_weapon.getDamage());
        }
        else {
            console.log(`${target.getName()} is already dead`);
        }
    }
    drinkHealthPotion(health_potion_quantity) {
        if (this.m_health < 100) {
            this.m_health += health_potion_quantity;
            if (this.m_health > 100) {
                this.m_health = 100;
            }
            console.log("---------------------------------------");
            console.log(`${this.m_name} drank a health potion that retores ${health_potion_quantity} hp.`);
            console.log(`${this.m_name} new hp: ${this.m_health}`);
        }
    }
    isAlive() {
        return this.m_health > 0;
    }
    display() {
        return `
			---------------------------------------
			${this.m_name}
			Class: ${this.m_class}
			HP: ${this.m_health}
			Weapon: ${this.m_weapon.displayWeapon()}
			---------------------------------------
		`;
    }
    getName() {
        return this.m_name;
    }
    static sm_displayPlayersSpawned() {
        return `Players Alive : ${this.s_players_spawned}`;
    }
}
// Static memebers:
Player.s_players_spawned = 0;
export default Player;
