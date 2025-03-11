const assignment1 = (arr) => {
    let square = arr.map((ele) => (ele * ele));
    let sum = arr.reduce((res, ele) => (res + ele));
    let avg = sum / arr.length;
    return avg;
}
const assignment2 = arr => (arr.map((ele) => (ele + 5)));
const assignment3 = strs => (strs.map((ele) => (ele.toUpperCase())));
const assignment4 = (arr, ...args) => ([...arr, ...args.map((ele) => (ele * 2))]);
const assignment5 = (obj1, obj2)  => ({...obj1, ...obj2})
console.log(assignment5({a: 1, b: 2}, {c: 3, d: 4}))
