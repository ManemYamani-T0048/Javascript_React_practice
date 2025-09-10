export {}
type custom=number | string | boolean | null | undefined;
const mixedArray: custom[] = [
  42,
  "hello","hi","yamini",45,false,null,
  true,
  null,
  undefined
];
for (let i of mixedArray)
console.log(i);
const anythingGoes: any[] = [42, "hello", true, null, undefined]; //it removes the property of static typing in ts not use
const fixed:[number,string]=[1,'yamini'];
