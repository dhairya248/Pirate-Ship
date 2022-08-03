class CanonBall
{
    constructor(x, y)
    {
        var options=
        {
            isStatic:true
        }

        this.body=Bodies.circle(x, y, 30, options)
        this.image=loadImage("assets/cannonball.png");
        World.add(world, this.body);
        this.r=30;
        this.trajectory=[]
    }

    shoot()
    {
        var newAngle=canon.angle-28;
        newAngle=newAngle*(3.14/180);
        var velocity=p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);

        Body.setStatic(this.body, false)
        Body.setVelocity(this.body, {x:velocity.x*(180/3.14), y:velocity.y*(180/3.14)})
    }

    remove(i)
    {
        Matter.Body.setVelocity(this.body, {x:0, y:0})
        setTimeout(()=>{
            World.remove(world, this.body)

            delete balls[i]

        }, 1000)
    }

    show()
    {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.r, this.r)


        if(this.body.velocity.x>0 && this.body.position.x>200)
        {
            var position=[this.body.position.x, this.body.position.y]
            this.trajectory.push(position)
        }

        for(var i=0; i<this.trajectory.length; i++)
        {
            image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5,5)
        }

    }



}