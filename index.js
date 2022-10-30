// Write your solution in this file!
//Make a object name employee with two keys.
const employee = {name: 'Sam',
    key: '11 Broadway'} 


function updateEmployeeWithKeyAndValue (employee, key, value) {
    // copy object with ...
    const newemployee = {...employee};
    // Add key and value to employee using dot notation
    newemployee[key] = value
    //return employee
    return (newemployee)

}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newemployee = {...employee}
    delete newemployee[key] 
    return (newemployee)
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return (employee)
}