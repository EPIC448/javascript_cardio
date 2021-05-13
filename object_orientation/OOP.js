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


  =======  4 Prinicples of OOP======Inheritance, Encapsulation, Abstraction,===
     
INHERITANCE:  -- Parent classes can extend attributes & behavior to child class
      Support reusability, Child class can be created to extend parent class functionilty, Thus, A generic parent class can br created, then create
      a spcific child class as needed
       Such as this,

       NOTE: parent class also knoW a base or Super class?  inheritance is also know at prototyping.

       //Parent class Dog
class Dog{
    //Declare protected (private) fields
    _attendance = 0;

    constructor(namee, birthday) {
        this.name = name;
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
}

  child class Herding DOg, inherts the method bark from the parent class DOG, and child class adds an addition method , herd().

//Child class HerdingDog, inherits from parent Dog

class HerdingDog extends Dog {
    constructor(name, birthday) {
        super(name);
        super(birthday);
    }

    herd() {
        //additional method for HerdingDog child class
        return console.log("Stay together!")
    }
}

 Encapsulation: contail all important information inside an OBJECT, while exposing selected information to the outside world.
      Encapsulation requires defining some fields as private and some as public.
    Private/ Internal interface: methods and properties, accessible from other methods of the same class.
     Public / External Interface: methods and properties, accessible also from outside the class.

     Adds a layer of secuirty, where the developer chooses what data cen be seen on an object by exposing that data through public methods in the class definition.
      In javascript, 
      protectec field are prefixed with  _; Private field are prefixed with a #

       This how we get this in the above code. 


        updateAttendance() {
        //add a day to the dog's attendance days at the petsitters
        this._attendance++;
       }
       Note: 
       This allows us to hide important information that should not be changed from both phishing and the more likely scenario of other developers mistakenly changing important data.

Encapsulation adds security to code and makes it easier to collaborate with external developers. When you’re programming to share information with an external company, you wouldn’t want to expose the classes’ templates or private data because your company owns that intellectual property.

Instead, developers create public methods that allow other developers to call methods on an object. Ideally, these public methods come with documentation for the external developers.

The benefits of encapsulation are summarized here:

Adds security: Only public methods and attributes are accessible from the outside
Protects against common mistakes: Only public fields & methods accessible, so developers don’t accidentally change something dangerous
Protects IP: Code is hidden in a class, only public methods are accessible by the outside developers
Supportable: Most code undergoes updates and improvements
Hides complexity: No one can see what’s behind the object’s curtain!



       Abstration: 

       Abstraction means that the user interacts with only selected attributes and methods of an object.
        Abstraction uses simplified, high level tools, to access a complex object.

Using simple things to represent complexity
Hide complex details from user
Abstraction is using simple classes to represent complexity. Abstraction is an extension of encapsulation.
 For example, you don’t have to know all the details of how the engine works to drive a car. It also, maintane high level of security  

   The benefits of abstraction are summarized below:

Simple, high level user interfaces
Complex code is hidden
Security
Easier software maintenance
Code updates rarely change abstraction


       Polymorphism:
       Design objcet to share behavior

       Note: Using inheritance, objects can override shared parent behaviors, with specific child behaviors.
        Polymorphism allows the same method to execute different behaviors in two ways: method overriding and method overloading.
       As in: In method overriding, a child class can provide a different implementation than its parent class. In our dog example, we may 
       want to give TrackingDog a specific type of bark different than the generic dog class.
    
    
    Note how bark() was overriding in the parent (DOG)
     
     Benfits-> object of different types can be passed through the same interface
      Method overriding
     
       */
     

}
