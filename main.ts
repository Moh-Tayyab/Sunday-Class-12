//split method return arrary
//forEach method return :void
// map method void[]

const names2 = ['anas', 'zain', 'ali', 'qasim'];
// forEach: void
// map: void[]   
const processed = names2.map((name: string)=> 
    name + "result"
);
console.log(processed);

const joinMethod = names2.join('');

const splitMethod = 'MY name is ta' // count value 

console.log(splitMethod.split(' ').length);
//split method return arrary 


let student = ['ali', 'zain', 'ahmer', ['bakar', 'umair', ['sulman', 'usama']]]

let newStudent = ['qasim', 'fahad']
let result = student.concat(newStudent)
let result1 = student.flat();

console.log(result);
console.log(result1);







