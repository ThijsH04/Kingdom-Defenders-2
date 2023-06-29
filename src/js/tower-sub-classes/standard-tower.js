class StandardTower extends Tower{
    constructor(id,x,y,damage,mapData, color, className){
        super(id,"Standard Tower",x,y,2,2,1,"./assets/images/towers/cannon.png",100,"land",damage,5,mapData, color, className);

        this.image = {}
        this.image.rotating = new Image()
        this.image.rotating.src = "./assets/images/towers/cannon.png"

        this.projectileImg = new Image()
        this.projectileImg.src = "./assets/images/projectiles/cannonball.png"
    }

    upgrade(path, level) {

    }
}