class Bird extends Baseclass {   //inheriting from Base Class
  constructor(x,y)
  {
    super(x,y,50,50)   //call the constructor of base class
    this.image=loadImage("sprites/bird.png")
  }
  display()
  {
    this.body.position.x=mouseX
    this.body.position.y=mouseY
    super.display()
  }
}
    