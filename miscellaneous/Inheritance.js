class Vehicle{
constructor(name,color,wheels){
this.name = name,
this.color = color,
this.wheels = wheels
}
getDetails(){
    console.log(`The ${this.name} is ${this.color} in color and has ${this.wheels} wheels.`)
}
}
    class Car extends Vehicle{  //?: Using "EXTENDS" to "inheriting" the "class" of "vehicle" which is "parent class"...
        constructor(brand,color,purpose){
            super('Car',color,4); //?: Using "SUPER();Constructor" to inherit the obj value.,becuase its having the(name,color,wheels)so we dont metion or copy that same in this class. 
            this.brand = brand,
            this.purpose = purpose
        }
        getDetails(){ //?: here we are doing "OVERRIDING" the parent class getDetails to "modify" the values...
            console.log(`Your ${this.name} is ${this.brand} and it is ${this.color} in color, has ${this.wheels} wheels and it is for ${this.purpose}`);
        }
    }
    const car1 = new Car("Mercedes",'Black',"Luxury Travel");
    // console.log(car1.__proto__);//*:"__proto__"("[PROTOTYPE]") to check or modify the parent class value...
    console.log(car1);
    car1.getDetails();