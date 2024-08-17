let userID: string | number | boolean = "abc1";
userID = 123;
userID = false;

let user: { name: string; age: number; isAdmin: boolean; id: string };

user = {
  name: "Patrick",
  age: 34,
  isAdmin: true,
  id: "123",
};

let hobbies: string[];
hobbies = ["Games", "Cooking"];

function add(a: number, b: number) {
  const result = a + b;
  console.log(result);
  return result;
}

function calculate(
  a: number,
  b: number,
  calcFn: (a: number, b: number) => number
) {
  calcFn(a, b);
}
