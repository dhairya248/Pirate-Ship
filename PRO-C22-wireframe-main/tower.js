class Tower {
    constructor()

    {
        var options={
            isStatic:true
            }
            
            this.tower= Bodies.rectangle(120,350, 160, 310,options);
            World.add(world,this.tower);

            this.x=120;
            this.y=350;
            this.w=160;
            this.height=310;

            this.image=loadImage("assets/tower.png")
            
    }

    show()
    {
        imageMode(CENTER)
        image(this.image,this.tower.position.x, this.tower.position.y,this.w, this.height);
    }
}