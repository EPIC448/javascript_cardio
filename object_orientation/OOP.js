//OBject Orententation Progrmaming.
// resources: https://www.educative.io/blog/object-oriented-programming

/*
Remember the class is a template for modeling a dog, and an object is instantiated from the class representing an individual real world thing.
*/

class Dog {
   
    constructor(name, birthday){
      this.name = name;
      this.birthday = birthday; 
      }
      
    //declare a Private Varibles

      _attendance = 0
      // THis are functions used as instance methods on the Dog Class
    getAge(){
      // getter
      return this.calAge();
      }
      
      calcAge(){
        //calculate age using todays date and birthday
        return Date.now() = this.birthday;
      }
      bark() {
        return console.log("Woof!");
    }

    updateAttendance() {
        //add a day to the dog's attendance days at the petsitters
        this._attendance++;
    }


}
//instantiate a new object of the Dog class, and individual dog named Rufus
    const rufus = new Dog("Rufus", "2/1/2017");
      
      /*
      
      Programming vocabulary:

In JavaScript objects are a type of variable. This may cause confusion, because objects can 
also be declared without a class template in JavaScript, as shown at the beginning.

Objects have states and behaviors. State is defined by data: things like names, birthday, 
and other information you’d want to store about a dog. Behaviors are methods, the object can undertake.
      */