const Student = function (name, year, phone, email, address) {
    this.name = name,
    this.year = year,
    this.phone = phone,
    this.email = email,
    this.address = address
};
const student1 = new Student("John Doe", 2004, "0123456789", "student@gmail.com", "1/1");
// console.log(student1);

Student.prototype.rollCall = function(){
    //
    console.log("Vắng mặt");
}
student1.rollCall();

class inforUser{
    constructor(name, year, email){
        this.name = name,
        this.year = year,
        this.email = email
    }
    login = function(){
       return this.name + " Logined";
    }
}
const newUser = new inforUser("Hoang", "2004", "khaihoang@gmail.com");
console.log(newUser.login());