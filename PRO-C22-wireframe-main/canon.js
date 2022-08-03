class Canon {
    constructor(x,y,w,h, angle)

    {
            this.x=x;
            this.y=y;
            this.w=w;
            this.height=h;
            this.angle=angle;

            this.image1=loadImage("assets/cannonBase.png")
            this.image2=loadImage("assets/canon.png")
    }

    show()
    {
        //imageMode(CENTER)
        //image(this.image,this.tower.position.x, this.tower.position.y,this.w, this.height);

        //console.log(this.angle)
        if(keyIsDown(RIGHT_ARROW) && this.angle<70)
        { 
            this.angle+=1
        }

        if(keyIsDown(LEFT_ARROW) && this.angle>-35)
        {
            this.angle-=1
        }

        push()
        translate(this.x, this.y)
        rotate(this.angle)
        imageMode(CENTER)
        image(this.image2, 0,0, this.w, this.height)

        pop()
        image(this.image1, 120, 120, 200, 200)

        //noFill()

    }
}