// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "value2",
};
function updateEmployeeWithKeyAndValue(employee,key,value){
    return {
        ...employee,
        name:"Sam",
        streetAddress: "11 Broadway",
};
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,streetAddress,value){
    employee[streetAddress]="12 Broadway";
    return employee;
};
function deleteFromEmployeeByKey(employee,key){
    const copyOfEmployee = {...employee};
    delete copyOfEmployee[key];
    return copyOfEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}