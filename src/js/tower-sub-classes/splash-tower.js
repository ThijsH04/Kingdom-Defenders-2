class SplashTower extends Tower{
    constructor(id,x,y,mapData, unlockedUpgrades){
        super(id, x, y, mapData, "Mage Tower", unlockedUpgrades);
        this.w = 2
        this.h = 2
        this.attackSpeed = 1
        this.cost = 100
        this.type = "land"
        this.hitTypes = ["ground", "air"]
        this.r = 5
        this.damage = new SplashDamage(5,null,3,.2,this.stats)
        this.className = "Magic"

        this.image = {}
        this.image.base = new Image()
        this.image.base.src = "./assets/images/towers/mage_tower.png"

        this.image.animation = new Image()
        this.image.animation.src = "./assets/images/projectiles/magic_orb.png"
        this.image.animation.maxSize = .35;
        this.image.animation.types = ["grow", "rotate"]
        

        this.projectileImg = new Image()
        this.projectileImg.src = "./assets/images/projectiles/magic_orb.png"
    }

    upgrade(path, level) {
        
    }
}