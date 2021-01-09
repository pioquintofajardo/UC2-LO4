var myCar2 = {

    maxSpeed: 70,
    driver: "Net Ninja",
    driver: function(speed, time){
        console.log(speed * time);
    },
    logDriver: function(){
        console.log("driver name is " + this.driver);

    }
};



myCar.logDriver();
console.log(myCar2.maxSpeed);
myCar2.driver(50, 3);
