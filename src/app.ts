import Weapon from "./clases/Weapon.js";
import Player from "./clases/Player.js";
import Mage from "./clases/Mage.js";
import MagicWeapon from "./clases/MagicWeapon.js";

let zweihander: Weapon = new Weapon("Zweihander", 35)

let staff: MagicWeapon = new MagicWeapon("Legendary Staff", 55, 35)

let undead: Player = new Player("Undead-1")

let undead2: Player = new Player("Undead-2")

let knight: Player = new Player("Knight", zweihander)

let medivh: Mage = new Mage("Medivh", staff)

console.log(undead.display())
console.log(knight.display())
console.log(medivh.display())

console.log(Player.sm_displayPlayersSpawned())

console.log("**************************")
console.log("********* Knight VS Undead-1 *********")

knight.attack(undead)

undead.drinkHealthPotion(25)

knight.attack(undead)
knight.attack(undead)
knight.attack(undead)

console.log("**************************")
console.log("********* Medivh VS Knight *********")

medivh.drinkManaPotion(50)

medivh.attackMagic(knight)
medivh.attackMagic(knight)
medivh.attackMagic(knight)

console.log("**************************")
console.log("********* Medivh VS Undead-2 *********")

medivh.attackMagic(undead2)

medivh.drinkManaPotion(50)

medivh.attackMagic(undead2)
medivh.attackMagic(undead2)