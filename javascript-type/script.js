// 원시 타입
// 문자열 String
const name = "kim";
// Number
const age = 30;
// Boolean
const hasJob = true;
// null
const car = null;
// undefined
let anything;
// Symbol
const sym = symbol();

//참조 타입
// Array 배열
const hobbies = ["walking", "books"];
// Object 객체
const address = {
  province: "경기도",
  city: "성남시",
};

console.log(typeof hobbies);
console.log(Array.isArray(address));
