// Write your solution in this file!

const employee = {
    name: "John",
   streetAddress: "123 Main Street"
    //    street1: "123 Main Street",
    //    street2: "apt 1",
    //    city: "New York",
    //    state: "NY",
    //    zip: "10000",
    //}
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employee1 = {...employee}
    
    employee1.name = 'Sam';
    employee1.streetAddress = '11 Broadway' 

    return employee1
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = 'Sam'
    employee.streetAddress = '12 Broadway'

    return employee
}

function deleteFromEmployeeByKey(employee, key, value) {
    const employee2 = {...employee}

    delete employee2.name

    return employee2
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name

    return employee
}