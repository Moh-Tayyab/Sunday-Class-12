//global student database
var allStudent = [];
// single student 
var student = {
    name: '',
    id: 1,
    section: ''
};
allStudent.push(student);
console.log(allStudent);
function addNewSt() {
    allStudent.push(student);
}
