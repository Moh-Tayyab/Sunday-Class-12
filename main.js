//split method return arrary
//forEach method return :void
// map method void[]
var names2 = ['anas', 'zain', 'ali', 'qasim'];
// forEach: void
// map: void[]   
var processed = names2.map(function (name) {
    return name + "result";
});
console.log(processed);
var joinMethod = names2.join('');
var splitMethod = 'MY name is ta'; // count value 
console.log(splitMethod.split(' ').length);
//split method return arrary 
var student = ['ali', 'zain', 'ahmer', ['bakar', 'umair', ['sulman', 'usama']]];
var newStudent = ['qasim', 'fahad'];
var result = student.concat(newStudent);
var result1 = student.flat();
var result2 = student.flat();
console.log(result);
console.log(result1);
