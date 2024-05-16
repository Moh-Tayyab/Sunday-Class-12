
//objects

const dataSt: {
    name: string;
    fatherName: string;
    age: number;
    edu: string;
    rollNo: number;
    qualification:{
        grade: string;
        result: string;
        attendence: number;
    }

} = {
    name: "zayan",
    fatherName: "zaman",
    age: 14,
    edu: "class v",
    rollNo: 5,
    qualification:{
        grade: "A",
        result: "pass",
        attendence: 80 ,
    }

}
// key access 
// dot and [] use 

console.log(dataSt);
//console.log(dataSt['father.Name']);
console.log(dataSt['age']);
//console.log(dataSt.qualificatiion.grade);
//console.log(dataSt['qualificatiion']['result']);
//console.log(dataSt['qualificatiion'].attendence);
//console.log(dataSt.qualificatiion['result']);


//pass by value and pass by reference

type StudentType = {
    name: string,
    age: number,
    isStudent: boolean
} 

const student: StudentType = {
    name: 'Zain',
    age: 21,
    isStudent: true
}

console.log(student);