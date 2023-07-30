import { $catch } from "ar-catch";
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();

console.log(gen.next()); // { value: 1, done: false }

(async () => {
  const res = await $catch("https://jsonplaceholder.typicode.com/todos/1");

  console.log(res);

  if (res) gen.next();
})();
