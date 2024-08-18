import Weapon from "./clases/Weapon.js";
import Player from "./clases/Player.js";

let zweihander: Weapon = new Weapon("zweihander", 35)

let undead: Player = new Player()

let knight: Player = new Player("Knight", zweihander)

console.log(undead.display())
console.log(knight.display())

knight.attack(undead)

console.log(undead.display())

undead.drinkHealthPotion(25)