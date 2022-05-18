if (1 === 1) {
  console.log("prvo");
}
if (1 === "1") {
  console.log("drugo");
}
const aaa = "Dobar";
let bbb = aaa;
if (bbb === aaa) {
  console.log("treće");
}
function a(abc) {
  return abc + 2;
}

const b = (abc) => {
  return abc + 2;
};
if (b === a) {
  console.log("četvrto");
  console.log(a(5));
  console.log(b(5));
}
let rrr = { a: "1" };
let zzz = { a: "2" };
if (zzz === rrr) {
  console.log("peto");
}

let jelIsto = 1;
for (const property in rrr) {
  if (rrr[property] != zzz[property]) {
    jelIsto = 0;
  }
}

if (jelIsto) {
  console.log("šesto");
}
