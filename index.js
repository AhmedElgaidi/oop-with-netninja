// # Object Oriented Programing (OOP) with Netninja

// ## (1) Encapsulation: Means capturing everything related to something in one place => like a user, anything related to him (name, email, addres, singup, login etc...) and these properties, and mehtods in are one place (one piece)

// We are encapsulating everything related to the user (propeties, methods) in a capsule/ object
const user = {
  name: "ahmed",
  email: "ahmed@gmail.com",
  age: 23,
  login() {
    // Object literal
    console.log(`${this.name} has logged in`);
  },
  logout() {
    console.log(`${this.name} has logged out`);
  },
  changeName() {
    return (this.name = "elbotanist");
  },
};

// user.login();
// user.logout();
// console.log(user.name);
// user.changeName()
// console.log(user.name);

// ## 2) Update properties:
// 1) dot notation
user.name = "elbotanist";

// 2) square brackets
user["name"] = "ahmed elgaidi";

// console.log(user)

// ## 3) Classes (are syntactic sugar based on prototype model):

class User {
  // this this refers the created empty object(instance)
  // ### Constructor with properties:
  constructor(name, age, isAdmin, email) {
    this.name = name;
    this.age = age;
    this.isAdmin = isAdmin;
    this.email = email;
  }

  // ### Class mehtods:
  login() {
    console.log(`${this.name} logged in successfully.`);
    return this;
  }
  logout() {
    console.log(`${this.name} logged out successfully.`);
    return this;
  }
}

// this userOne is an instance of User class (the constructor is User class)
const userOne = new User("ahmed", 23, false, "ahmed@gmail.com");
// console.log(userOne)
// userOne.login()

// ### Method Chaining: return thise in the function so you can chain it's mehtods!!!

// userOne.login().logout() // gives undefined before usign "this" in class method!!

// ### Class Inheritance
// Let's say we have some methods that we only want admin users do it (not regular users!!), we can make a new class, but by this we repeate code!!! (name, age, login, logout, etc..)
// So we will interit these propertes into the new class!!

// Here we are using User class (only adding some extra stuffe to it)!!
class Admin extends User {
  // we don't need to create a constructor as it's already there at User class

  // Our extra functionalites
  deleteUser(email) {
    users = users.filter((el) => {
      return el.email != email;
    });
    console.log("Deleted successfully.");
  }
}

const userTwo = new User("maha", 25, false, "maha@gmail.com");

let users = [userOne, userTwo];

const adminOne = new Admin("admin", 33,true, "admin@gmail.com");
// console.log(users.length);

// adminOne.deleteUser("maha@gmail.com");
console.log(users);
