var Car = function(mexspeed, driver) {

    this.maxSpeed = maxSpeed;
    this.maxSpeed = driver;
    this.maxsSpeed = function(speed, time){
        console.log(speed * time);    
    };

}

var myCar = new Car(70, "Ninja man");
var myCar = new Car(40, "Humpty Dumpty");
var myCar = new Car(10, "Shaun");
var myCar = new Car(90, "James Bond");

myCar.drive(30,5);
myCar3.logDriver();