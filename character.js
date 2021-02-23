/*--------------------------------------------Character's Name----------------------------------*/

document.getElementById("Herm").style.display = "none";
document.getElementById("Tyna").style.display = "none";
document.getElementById("Raynel").style.display = "none";
document.getElementById("Grent").style.display = "none";

/*---------------------------------------------Display None-------------------------------------*/

document.getElementById("attackdisplay1").style.display = "none";

/*----------------------------------------------Character Generator--------------------------------*/
function Person(race,item){
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;
    
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(){};

    this.damage = function(){};

    this.totalDamage = this.damage();

    this.displayChar = function(){
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    };
}
/*------------------------------------------------Races des Personnages-----------------------------------------------*/
const race = [
    {
        race: "Humain",
        name: "Herm",
        HP: 100,
        ATK: 100,
        DEF: 120,
        DEX: 100,
    },
    {
        race: "Elfe",
        name: "Tyna",
        HP: 100,
        ATK: 100,
        DEF: 100,
        DEX: 130,
    },
    {
        race: "Orc",
        name: "Raynel",
        HP: 140,
        ATK: 100,
        DEF: 100,
        DEX: 100,
    },
    {
        race: "Vampire",
        name: "Grent",
        HP: 100,
        ATK: 100,
        DEF: 100,
        DEX: 100,
        CAP: "stealhp"
    },
]

/*------------------------------------------------Items-----------------------------------------------*/
const items = [
    {
        type: "bottes",
        effet: (DEX + 30),
    },
    {
        type: "baton",
        effet: (HP + 20),
    },
    {
        type: "epee",
        effet: (ATK + 30),
    },
    {
        type: "arc",
        effet: ("atkx2"),
    },
]
