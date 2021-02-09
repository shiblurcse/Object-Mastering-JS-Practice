// using apply method
const normalPerson = {
    firstName: 'Muhammad',
    lastName: 'Shahnewaz',
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
// normalPerson.chargeBill.apply(newazPerson, [900]); //using apply method
normalPerson.chargeBill.apply(newazPerson, [900, 100, 10]);  //we can apply multiple parameters only array format using apply method
normalPerson.chargeBill.apply(newazPerson, [3000, 300, 30]); 
console.log(newazPerson.salary);