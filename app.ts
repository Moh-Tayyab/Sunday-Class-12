type StudentData = {
    name: string,
    id: number,
    section: string
}
//global student database
let allStudent: StudentData[] = [];

// single student 
let student: StudentData = {
    name: '',
    id: 1,
    section: ''

}

allStudent.push(student);
console.log(allStudent);

function addNewSt() {
    allStudent.push(student);
}