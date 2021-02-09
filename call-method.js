// using call method
const normalPerson = {
    firstName: 'Shiblur Rahman',
    lastName: 'Lipu',
    salary: 15000,
    getFullName: function(){   //Its a method
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        // console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
};

const lipuPerson = {
    firstName: 'Shiblur Rahman',
    lastName: 'Lipu',
    salary: 25000,
};
// normalPerson.chargeBill.call(lipuPerson, 900); //using call method
normalPerson.chargeBill.call(lipuPerson, 900, 100, 10);  //we can call multiple parameters using call method
normalPerson.chargeBill.call(lipuPerson, 3000, 300, 30); //we can call multiple parameters using call method
console.log(lipuPerson.salary);