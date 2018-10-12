function Circle(radius){
    console.log("this ->",this);
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    };
}

let circle = new Circle(1);
circle.draw();