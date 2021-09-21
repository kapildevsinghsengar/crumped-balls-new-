class paper
{
	constructor(x,y,r)
	{
		var options={
            isStatic:false,
            restitution:0.3,
            friction:100,
            density:1.2
        }
        this.r=r;

		this.image=loadImage("paper.png");
		this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body);

		
	}
	display()
	{
			var pos=this.body.position;
            var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;

			

			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			
			fill(255)
			imageMode(CENTER);
	
			image(this.image, 0,0,2*this.r,2*this.r)
			pop()
			
	}
}