class Ground {
    constructor()

    {
        var options={
            isStatic:true
            }
            
            this.ground= Bodies.rectangle(0,height-1, width*2,1,options);
            World.add(world,this.ground);

            this.x=0;
            this.y=height-1;
            this.w=width*2;
            this.height=1;
            
    }

    show()
    {
        rect(this.ground.position.x, this.ground.position.y,this.w, this.height);
    }
}