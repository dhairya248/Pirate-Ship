class Ship
{
    constructor(x, y, w, h, boatPos, boatAnimation) //boat Position
    {
        var options= 
        {
            restitution: 0.8, 
            friction: 1.2,
            density: 1,
        }

        this.animation= boatAnimation;
        this.speed= 0.05;
        this.body= Bodies.rectangle(x, y, w, h, options)
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;

        this.image= loadImage("assets/boat.png")
        this.boatPos= boatPos;

        World.add(world, this.body)
    }

    animate()
    {
        this.speed+= 0.05;
    }

    remove(i)
    {
        setTimeout(()=>{
            World.remove(world, boats[i])

            delete boats[i]

        }, 2000)//2000 milliseconds= 2 seconds
    }

    show()
    {
        var pos= this.body.position;
        var index= floor(this.speed % this.animation.length)
        push()
        translate(pos.x, pos.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.animation[index], 0, this.boatPos, this.w, this.h)

        pop()
    }
}