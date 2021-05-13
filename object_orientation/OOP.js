//OBject Orententation Progrmaming.
// resources: https://www.educative.io/blog/object-oriented-programming
 
 
/*
 4 Principles of OOP

Inheritance: child classes inherit data and behaviors from parent class or other class
Encapsulation: containing information in an object, exposing only selected information
Abstraction: only exposing high level public methods for accessing an object
Polymorphism: many methods can do the same task

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



 Attributes are information that is stored. Attributes are defined in the Class template. When objects are instantiated individual objects contain data stored in the Attributes field.
The state of an object is defined by the data in the object’s attributes fields. For example, a puppy and a dog might be treated differently at pet camp. 
The birthday could define the state of an object, and allow the software to handle dogs of different ages differently.


Methods
Methods represent behaviors. Methods perform actions; methods might return information about an object, or update an object’s data. The method’s code is defined in the class definition.

When individual objects are instantiated, these objects can call the methods defined in the class.
 In the code snippet below, the bark method is defined in Dog class, and the bark() method is called on the Rufus object.     
  */

 class Dog {
    //Declare protected (private) fields
    _attendance = 0;

    constructor(name, birthday) {
        this.namee = name;
        this.birthday = birthday;
    }

    getAge() {
        //Getter
        return this.calcAge();
    }

    calcAge() {
        //calculate age using today's date and birthday
        return this.calcAge();
    }

    bark() {
        return console.log("Woof!");
    }

    updateAttendance() {
        //add a day to the dog's attendance days at the petsitters
        this._attendance++;
    }
     
     
     /*
     Methods are how programmers promote reusability, and keep functionality encapsulated inside an object. 
     This reusability is a great benefit when debugging. If there’s an error, there’s only one place to find it and fix it instead of many.

     / Stopped at the 4 pillars for the website above.
     */
     

}
