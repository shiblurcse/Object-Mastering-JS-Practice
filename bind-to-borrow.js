const normalPerson = {
    firstName: 'Shiblur Rahman',
    lastName: 'Lipu',
    salary: 15000,
    getFullName: function(){   //Its a method
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary = this.salary -amount;
        return this.salary;
    }
};


const lipuPerson = {
    firstName: 'Shiblur Rahman',
    lastName: 'Lipu',
    salary: 25000,
};

const friendlyPerson = {
    firstName: 'Shiblur Rahman',
    lastName: 'Lipu',
    salary: 25000,
};
// normalPerson.chargeBill();
const lipuChargeBill = normalPerson.chargeBill.bind(lipuPerson);
lipuChargeBill(2000);
lipuChargeBill(3000);
console.log(lipuPerson.salary);
console.log(normalPerson.salary);

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(2000);
console.log(friendlyPerson.salary);
